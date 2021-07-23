import React from 'react'

const Conditions = () => {
    return <div className="conditions-wrap">
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
