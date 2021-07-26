import React from 'react'
import Process from './components'
import './App.css'
import 'antd/dist/antd.css'

type INodeType = 'condition' | 'normal' | 'end' | 'middleware'

export interface INode {
    id: string
    name?: string
    parentId?: string
    description?: string
    type: INodeType
    children?: INode
    conditions?: INode[]
}

export interface IProcess {
    id: string
    description?: string
    name?: string
    node?: INode
}

const data: IProcess = {
    id: '1',
    description: '111',
    name: '测试用的',
    node: {
        id: '11111',
        parentId: '',
        description: '这是主题',
        name: '发起人',
        type: "normal",
        children: undefined
    }
}

function App() {
    return (
        <div className="App">
            <Process process={data}/>
        </div>
    )
}

export default App
