import React, { useState } from 'react'

////类式组件
// class Demo extends Component {
//     state = { count: 1 };
//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }
//     render() {
//         return (
//             <div>
//                 <h3> 扩展3：Hooks的基础用法。 当前求和为{this.state.count}</h3>
//                 <button onClick={this.add}>点击加1</button>
//             </div>
//         )
//     }
// }

// 函数式组件

function Demo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Peter')

    const add = () => {
        // 第1种写法
        // setCount(count + 1) 
        // 第2种写法
        setCount(count => count + 1)
    }

    const changeName = () => {
        setName('Jack')
    }

    return (

        <div >
            <h3> 扩展3：Hooks的基础用法之 useState。 当前求和为{count}</h3>
            <h4>name:{name}</h4>
            <button onClick={add}>点击加1</button>
            <button onClick={changeName}>点击改名</button>

        </div >
    )
}


export default Demo;
