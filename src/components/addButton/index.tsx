import React from 'react'
import {INode} from "../../App";
import {Popover, Button} from 'antd'

const AddButton: React.FC<{ data: INode, onClick: (type: string) => void }> = ({data, onClick}) => {

    const content = () => (
        <ul>
            <Button>增加普通节点</Button>
            <Button>增加条件</Button>
        </ul>
    )

    return <div className="process-add-btn">
        <Popover content={content} title="Title" trigger="click">
            <button>+</button>
        </Popover>
    </div>
}

export default AddButton
