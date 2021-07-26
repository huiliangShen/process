import React from 'react'
import {INode} from "../../App";
import {Popover, Button, Space} from 'antd'

const AddButton: React.FC<{ data: INode, onClick?: (type: string, data: INode) => void }> = ({data, onClick}) => {

    const content = () => (
        <Space>
            <Button onClick={() => onClick?.('normal', data)}>增加普通节点</Button>
            <Button onClick={() => onClick?.('condition', data)}>增加条件</Button>
        </Space>
    )

    return <div className="process-add-btn">
        <Popover content={content} title="Title" trigger="click">
            <button>+</button>
        </Popover>
    </div>
}

export default AddButton
