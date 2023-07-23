// 引入lazy函数，引入Suspense组件包裹所以注册的路由
import React, { Component, lazy, Suspense } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'

// 懒加载路由组件
import Loading from './Loading';

// import About from './About'
// import Home from './Home'
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));


export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h3>扩展2：路由组件可以懒加载</h3></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            <NavLink className="list-group-item " to='/about'>About</NavLink>
                            <NavLink className="list-group-item " to='/home'>Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<Loading />}>
                                    <Routes>
                                        <Route path="/about" element={<About />}></Route>
                                        <Route path="/home" element={<Home />}></Route>
                                        <Route path="/" element={<Navigate to='about' />}></Route>
                                    </Routes>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
