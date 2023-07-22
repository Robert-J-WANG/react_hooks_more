import React, { Component, Fragment } from 'react'

import DemoX from '../2_lazyLoad'

export default class Demo extends Component {

    render() {

        return (
            <div>
                <h3> 扩展8：renderProps和childrenProps的用法</h3>
                <Fragment >
                    {/* childrenProps: 组件标签体的内容Hello */}
                    {/* <A> Hello </A> */}

                    {/* renderProps: 组件标签内部定义render属性，并传递函数用来返回一个新的组件，并传递数据 */}

                    {/* 渲染当前子组件并传递数据 */}
                    <A render={(username) => <B username={username} />} />

                    {/* 渲染任意位置的组件 */}
                    {/* <A render={() => <DemoX />} /> */}

                </Fragment>
            </div>

        )
    }
}

class A extends Component {
    state = { username: 'kate' }
    render() {
        return (
            <div className='grandfather'>
                <h4>我是父组件A</h4>
                {/* childrenProps: 渲染如下： */}
                {/* {this.props.children} */}

                {/* renderProps: 渲染如下： */}
                {this.props.render(this.state.username)}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='father'>
                <h4>我是子组件B</h4>
                <h5>我接收的姓名是{this.props.username}</h5>
            </div>
        )
    }
}
