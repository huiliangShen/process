import React from 'react'
import AddButton from "../addButton";
import {INode} from "../../App";

const Node: React.FC<{ data: INode }> = ({data}) => {
    return <div>
        <div className="process-node">
            <div className="process-node-header">{data.name || '-'}</div>
            <div className="process-node-content">
                {data.description}
            </div>
        </div>
        <AddButton data={data}/>
    </div>
}

export default Node
