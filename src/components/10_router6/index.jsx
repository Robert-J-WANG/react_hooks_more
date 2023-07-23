// 引入lazy函数，引入Suspense组件包裹所以注册的路由
import React, { Suspense } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'

// 懒加载路由组件
import Loading from './Loading';
import routes from './routes';

export default function Demo() {
    const elements = useRoutes(routes);

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h3>扩展10：router6的新语法</h3></div>
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
                                {/* 标记路由表加载的位置 */}
                                {elements}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
