
import { Fragment } from "react"

export default function index() {
    return (
        <div >
            <h3> 扩展6：Fragment与空标签：减少节点的层级</h3>
            {/* Fragment可以传递key值，用于遍历 */}
            <Fragment key={1}>
                <input type="text" />
                <input type="text" />
            </Fragment>
            <br />

            {/* 空标签不能传递任何值 */}
            <>
                <input type="text" />
                <input type="text" />
            </>
        </div >
    )
}
