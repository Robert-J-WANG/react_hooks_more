import React, { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function About() {
    const [count, setCount] = useState(0);

    const add = () => {
        // 第1种写法
        // setCount(count + 1) 
        // 第2种写法
        setCount(count => count + 1)
    }
    return (
        <Fragment>
            <h4>我是About组件</h4>
            {
                count === 3 ?
                    // Navigate的跳转作用
                    <Navigate to='/home' /> :
                    <h5>当前求和为{count}</h5>
            }
            <button onClick={add}>点击加1</button>
        </Fragment>
    )
}
