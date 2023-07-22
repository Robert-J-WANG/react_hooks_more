import React, { Component, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { root } from '../../index'; // 引入暴露过的根节点，用于将其卸载

/* -------------------------类式组件 ------------------------- */
// class Demo extends Component {
//     state = { count: 1 };

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 500)
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     unmountRoot = () => {
//         // React旧版本写法 卸载根节点
//         // ReactDOM.unmountComponentAtNode(document.getElementById('root'));

//         // React18版本写法，卸载根节点，(需要将root节点在入口文件中暴露，在本文件中引入使用)
//         root.unmount();
//     }

//     unmountDiv = () => {
//         // React旧版本写法 卸载根节点
//         // ReactDOM.unmountComponentAtNode(document.querySelector('.myRoot'));

//         // React18版本写法，卸载其他子节点，
//         createRoot(document.querySelector('.myRoot')).unmount();
//     }

//     render() {
//         return (
//             <div className='myRoot'>
//                 <h3 > 扩展3：Hooks的基础用法。 当前求和为{this.state.count}</h3>
//                 <button onClick={this.add}>点击加1</button>
//                 <button onClick={this.unmountRoot}>卸载根节点root组件</button>
//                 <button onClick={this.unmountDiv}>卸载子节点div组件</button>
//             </div>
//         )
//     }
// }


/* -------------------------函数式组件 ------------------------- */

function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1);
        }, 500);

        // useEffect的返回值是一个函数，相当于生命周期钩子 componentWillUnmount()
        return () => {
            console.log("@@@@@@@@")
            clearInterval(timer);
        }

    }, []);
    // 有[]，相当于componentDidMount()；没有[]，相当于componentDidUpdate()

    const add = () => {
        setCount(count => count + 1)
    }

    const unmountRoot = () => {
        root.unmount();
    }

    const unmountDiv = () => {
        createRoot(document.querySelector('.myRoot')).unmount();
    }

    return (
        <div className='myRoot' >
            <h3> 扩展4：Hooks的基础用法之 useEffect。 当前求和为{count}</h3>
            <button onClick={add}>点击加1</button>
            <button onClick={unmountRoot}>卸载根节点root组件</button>
            <button onClick={unmountDiv}>卸载子节点div组件</button>
        </div >
    )
}
export default Demo;
