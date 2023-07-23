import React, { Fragment, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function News() {

    const [news, setNews] = useState([
        { id: 1, title: 'news001', content: 'this is the news001' },
        { id: 2, title: 'news002', content: 'this is the news002' },
        { id: 3, title: 'news003', content: 'this is the news003' },
    ])
    const navigate = useNavigate();

    const showDetail = (n) => {
        return () => {
            navigate('detail', {
                // replace: true,
                state: {
                    id: n.id,
                    title: n.title,
                    content: n.content
                }
            })
        }

    }
    const goForward = () => {
        navigate(1);
    }

    const goBack = () => {
        navigate(-1);
    }
    return (
        <Fragment>
            <h4>News:</h4>
            {news.map(n => <Fragment key={n.id}><button onClick={showDetail(n)}>{n.title}</button></Fragment>)}
            <hr />
            <Outlet />
            <button onClick={goForward}>goForward</button>
            <button onClick={goBack}>goBack</button>
        </Fragment>
    )
}
