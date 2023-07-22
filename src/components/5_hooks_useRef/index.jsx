import React, { Component, useState, useRef, } from 'react'
import { createRoot } from 'react-dom/client'
import { root } from '../../index'; // 引入暴露过的根节点，用于将其卸载

/* -------------------------类式组件 ------------------------- */
// class Demo extends Component {
//     state = { count: 1 };
//     myRef = React.createRef();

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     show = () => {
//         alert(this.myRef.current.value)
//     }

//     render() {
//         return (
//             <div className='myRoot'>
//                 <h3> 扩展5：Hooks的基础用法之 useRef。 当前求和为{this.state.count}</h3>
//                 <button onClick={this.add}>点击加1</button>
//                 <input type="text" ref={this.myRef} />
//                 <button onClick={this.show}>点我提示输入的信息</button>
//             </div>
//         )
//     }
// }


/* -------------------------函数式组件 ------------------------- */

function Demo() {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count => count + 1)
    }

    const myRef = useRef();
    const show = () => {
        alert(myRef.current.value);
    }


    return (
        <div className='myRoot' >
            <h3> 扩展5：Hooks的基础用法之 useRef。 当前求和为{count}</h3>
            <button onClick={add}>点击加1</button>
            <input type="text" ref={myRef} />
            <button onClick={show}>点我提示输入的信息</button>
        </div >
    )
}

export default Demo;
