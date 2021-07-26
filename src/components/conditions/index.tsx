import React from 'react'
import {INode} from "../../App";

const Conditions: React.FC<{ conditions: INode[] }> = ({conditions}) => {
    return <div className="conditions-wrap">
        <div className="conditions">
            <div className="conditions-add">
                <a className={'conditions-add-btn'}>添加条件</a>
            </div>
            {
                conditions.map((item, i) => (
                        <section className="conditions-columns" key={i}>
                            <div className="conditions-columns-box">
                                {(i === 0 || i === 5) && <>
                                    <div className="top"/>
                                    <div className="bottom"/>
                                </>}
                                <div>
                                    <div className="process-node">
                                        <div className="process-node-header">{item.name}</div>
                                        <div className="process-node-content">
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className="process-add-btn">
                                        <button type={'button'}>+</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                )}

        </div>
        <div className="process-add-btn">
            <button type={'button'}>+</button>
        </div>
    </div>
}

export default Conditions
