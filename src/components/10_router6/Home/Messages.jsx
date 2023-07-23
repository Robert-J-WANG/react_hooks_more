import React, { Fragment, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Messages() {
    const [messages, setMessages] = useState([
        { id: 1, title: 'message001', content: 'this is the message001' },
        { id: 2, title: 'message002', content: 'this is the message002' },
        { id: 3, title: 'message003', content: 'this is the message003' },
    ])
    return (
        <Fragment>
            <h4>messages:</h4>
            {messages.map(m =>
                <Fragment key={m.id}>
                    {/* params 传参 */}
                    {/* <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link> */}

                    {/* search 传参 */}
                    {/* <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link> */}

                    {/* state 传参 */}
                    <Link to='detail' state={{ id: m.id, title: m.title, content: m.content }}>{m.title}</Link>

                    &nbsp;&nbsp;
                </Fragment>
            )}
            <hr />
            {/* 子路由组件显示标识位置 */}
            <Outlet />
        </Fragment >
    )
}
