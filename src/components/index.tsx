import React from 'react'
import Node from './node'
import Conditions from './conditions'
import EndNode from './endNode'
import './index.less'
import type {IProcess, INode} from '../App'

const RenderNode: React.FC<{ node: INode }> = ({node}) => {
    return <React.Fragment>
        {
            node.type === 'normal' && <Node data={node}/>
        }
        {
            node.type === 'condition' && <Conditions conditions={node.conditions}/>
        }
    </React.Fragment>
}

const Process: React.FC<{ process: IProcess }> = ({process}) => {
    return <div className={'process-wrap'}>
        {process.node && <RenderNode node={process.node}/>}
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
