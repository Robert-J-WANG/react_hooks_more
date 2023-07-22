import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 };

    /* ----------------------------- 1. setState传递对象的情况（其中callback函数可选，可以得到render完成的状态值 ---------------------------- */
    /*
    add = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 }, () => {
            console.log(this.state.count); // 回调函数中，可打印出的是页面render之后的值
        });
        console.log(this.state.count)// 打印出的是页面render之前的值

    }
    */

    /* ----------------------------- 2. setState传递函数的情况（其中callback函数可选，可以得到render完成的状态值 ---------------------------- */

    add = () => {
        this.setState((state, props) => {
            // console.log(this.state, this.props)
            return ({ count: state.count + 1 })
        })
    }

    render() {
        return (
            <div>
                <h3> 扩展1：setState更新状态的2种写法。 当前求和为{this.state.count}</h3>
                <button onClick={this.add}>点击加1</button>
            </div>
        )
    }
}
