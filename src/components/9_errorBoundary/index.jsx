import React, { Component, Fragment } from 'react'

export default class Demo extends Component {

    state = { hasError: null } // 用于识别子组件是否产生错误
    // 当父组件的子组件出现错误时，会触发 getDerivedStateFromError的调用，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log('@@@@', error)
        return { hasError: error }
    }

    render() {

        return (
            <div>
                <h3> 扩展9：错误边界errorboundary的用法,使用getDerivedStateFromError，只能捕获生命周期函数的错误，常见的是render中的错误</h3>
                <Fragment >
                    {/* 渲染当前子组件并传递数据 */}
                    <A render={() => this.state.hasError ?
                        (<h4 style={{ color: 'red' }}>当前网络不稳定，稍后再试...</h4>) :
                        <B />} />
                </Fragment>
            </div>

        )
    }
}

class A extends Component {


    render() {
        return (
            <div className='grandfather'>
                <h4>我是父组件A</h4>
                {/* renderProps: 渲染如下： */}
                {this.props.render()}
            </div>
        )
    }
}
class B extends Component {

    state = {
        /* ----------- 正确的数据 ------------------------ */
        users: [
            { id: '001', name: 'Peter', age: 18 },
            { id: '002', name: 'Peter1', age: 19 },
            { id: '003', name: 'Peter2', age: 20 },
            { id: '004', name: 'Peter3', age: 21 },
        ]

        /* ----------- 错误的数据 ------------------------ */
        // users: 'dfafdsa'
    }
    render() {
        return (
            <div className='father'>
                <h4>我是子组件B</h4>
                <Fragment>
                    我接收的信息是{this.state.users.map(user => <li key={user.id}>{user.name}---{user.age}</li>)}
                </Fragment>
            </div>
        )
    }
}
