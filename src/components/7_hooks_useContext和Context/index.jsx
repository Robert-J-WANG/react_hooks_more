import React, { Component } from 'react'

// 创建Context对象
const MyContext = React.createContext();
// 取出Provider,Consumer
const { Provider, Consumer } = MyContext;

export default class A extends Component {
    state = { username: 'Tom', age: 18 }

    render() {
        const { username, age } = this.state;
        return (
            <div className='grandfather'>
                <h3> 扩展7：Context 的用法，用于祖孙组件之间的传递</h3>
                <h4>我是祖组件A</h4>
                <p>我传递的name是{username},年龄是{age}</p>

                {/* 用Provider包裹子组件，并使用value属性传递数据 */}
                <Provider value={{ username, age }}>
                    <B />
                </Provider>

            </div>
        )
    }
}

class B extends Component {
    render() {

        return (
            <div className='father'>
                <h4>我是父组件B</h4>
                <C />
            </div>
        )
    }
}
/* -----------------类式组件接收数据方式 -------------------------- */
// class C extends Component {
//     static contextType = MyContext;
//     render() {
//         const { username, age } = this.context;
//         return (
//             <div className='grandson'>
//                 <h4>我是孙组件C</h4>
//                 <p>我接收的name是：{username},年龄是{age}</p>
//             </div>
//         )
//     }
// }

/* --------------函数式组件接收数据方式 1： Consumer ------------------ */

// function C() {
//     return (
//         <div className='grandson'>
//             <h4>我是孙组件C</h4>
//             <p>我接收的name是：
//                 {/* 使用Consumer包裹传递的数据 */}
//                 <Consumer>
//                     {value => `${value.username},年龄是${value.age} `}
//                 </Consumer>
//             </p>
//         </div>
//     )
// }

/* -------------函数式组件接收数据方式 2： useContext钩子更简单---------------- */

function C() {
    const { username, age } = React.useContext(MyContext);
    return (
        <div className='grandson'>
            <h4>我是孙组件C</h4>
            <p>我接收的name是{username},年龄是{age}</p>
        </div>
    )
}
