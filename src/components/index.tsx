import React, {useEffect, useState} from 'react'
import Node from './node'
import Conditions from './conditions'
import EndNode from './endNode'
import './index.less'
import type {IProcess, INode} from '../App'

const RenderNode: React.FC<{ node: INode, onAdd: (type: string, data: INode) => void }> = ({node, onAdd}) => {
    return <React.Fragment>
        {
            node.type === 'normal' && <Node data={node} onAdd={onAdd}/>
        }
        {
            node.type === 'condition' && <Conditions data={node}/>
        }
    </React.Fragment>
}

const map = new Map<String, any>()
let cloneData: INode

function deepLoop(node: INode) {
    if (!node) {
        return
    }

    map.set(node.id, node)

    node.children && deepLoop(node.children)

    node.conditions?.forEach(deepLoop)
}

const Process: React.FC<{ process: IProcess }> = ({process}) => {
    const [node, setNode] = useState<INode>()
    const handleOnAdd = (type: any, node: INode) => {
        node = map.get(node.id)
        node.children = {
            type,
            id: (+new Date()).toString(),
            name: 'test',
            description: '我就看看',
        }
        console.log(cloneData)
        setNode(cloneData)
    }

    useEffect(() => {
        if (process.node) {
            setNode(process.node)
            cloneData = JSON.parse(JSON.stringify(process.node))
            deepLoop(cloneData)
            console.log(map)
        }
    }, [process])

    const DeepRender = (node: INode) => {
        return <>
            <RenderNode node={node!} onAdd={handleOnAdd}/>
            {
                node.conditions &&  node.conditions.map(item => <RenderNode key={item.id} node={node!} onAdd={handleOnAdd}/>)
            }
            {
                node.children && <RenderNode node={node.children} onAdd={handleOnAdd}/>
            }
        </>
    }

    return <div className={'process-wrap'}>
        {node && DeepRender(node)}
        <EndNode/>
    </div>
}

export default Process
/*

<div>
<div className="process-node">
    <div className="process-node-header">asdqw</div>
    <div className="process-node-content">
    hahah
    </div>
    </div>
    <div className="process-add-btn">
    <button type={'button'}>+</button>
</div>
</div>
<div className="conditions-wrap">
<div className="conditions">
<div className="conditions-add">
<a className={'conditions-add-btn'}>添加条件</a>
</div>
{
new Array(6).fill(null).map((_, i) => (
<section className="conditions-columns" key={i}>
<div className="conditions-columns-box">
{(i === 0 || i === 5) && <>
<div className="top"/>
<div className="bottom"/>
</>}
<div>
<div className="process-node">
<div className="process-node-header">asdqw</div>
<div className="process-node-content">
hahah
</div>
</div>
<div className="process-add-btn">
<button type={'button'}>+</button>
</div>
</div>
{(Math.random() * 10 > 8) && <div>
<div className="process-node">
<div className="process-node-header">asdqw</div>
<div className="process-node-content">
hahah
</div>
</div>
<div className="process-add-btn">
<button type={'button'}>+</button>
</div>
</div>}
{(Math.random() * 10 > 8) && <div>
<div className="conditions-wrap">
<div className="conditions">
<div className="conditions-add">
<a className={'conditions-add-btn'}>添加条件</a>
</div>
{
new Array(6).fill(null).map((_, i) => (
<section className="conditions-columns" key={i}>
<div className="conditions-columns-box">
{(i === 0 || i === 5) && <>
<div className="top"/>
<div className="bottom"/>
</>}
<div>
<div className="process-node">
<div className="process-node-header">asdqw</div>
<div className="process-node-content">
hahah
</div>
</div>
<div className="process-add-btn">
<button type={'button'}>+</button>
</div>
</div>
{(Math.random() * 10 > 8) && <div>
<div className="process-node">
<div className="process-node-header">asdqw</div>
<div className="process-node-content">
hahah
</div>
</div>
<div className="process-add-btn">
<button type={'button'}>+</button>
</div>
</div>}
</div>
</section>
)
)}

</div>
<div className="process-add-btn">
<button type={'button'}>+</button>
</div>
</div>
</div>}
</div>
</section>
)
)}

</div>
<div className="process-add-btn">
<button type={'button'}>+</button>
</div>
</div>
<div className="process-end-node">
<div className="process-end-node-circle"/>
<div className="process-end-node-text">结束</div>
</div>*/
