import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
    //params参数的接收 useParams
    // const { id, title, content } = useParams();

    //search参数的接收 useSearchParams
    // const [searchParams, setSearchParams] = useSearchParams();
    // const id = searchParams.get('id');
    // const title = searchParams.get('title');
    // const content = searchParams.get('content');

    //state参数的接收 useLocation
    // 连续解构赋值
    const {
        state: { id, title, content },
    } = useLocation()
    // console.log(useLocation())

    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}
