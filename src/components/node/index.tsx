import React from 'react'
import AddButton from "../addButton";
import {INode} from "../../App";

const Node: React.FC<{ data: INode, onAdd?: (type: string, data: INode) => void }> = ({data, onAdd}) => {
    return <div>
        <div className="process-node">
            <div className="process-node-header">{data.name || '-'}</div>
            <div className="process-node-content">
                {data.description}
            </div>
        </div>
        <AddButton data={data} onClick={(type, data) => onAdd?.(type, data)}/>
    </div>
}

export default Node
