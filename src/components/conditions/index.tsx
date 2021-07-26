import React from 'react'
import {INode} from "../../App";
import AddButton from "../addButton";
import Node from "../node";

const Conditions: React.FC<{ data: INode }> = ({data}) => {
    return <div className="conditions-wrap">
        <div className="conditions">
            <div className="conditions-add">
                <a className={'conditions-add-btn'}>添加条件</a>
            </div>
            {
                data.conditions?.map((item, i) => (
                        <section className="conditions-columns" key={i}>
                            <div className="conditions-columns-box">
                                {(i === 0 || i === 5) && <>
                                    <div className="top"/>
                                    <div className="bottom"/>
                                </>}
                                <div>
                                    <Node data={item}/>
                                </div>
                            </div>
                        </section>
                    )
                )}

        </div>
        <AddButton data={data}/>
    </div>
}

export default Conditions
