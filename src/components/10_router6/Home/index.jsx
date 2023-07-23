import React, { Component, Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <h4>我是Home组件</h4>
                <hr />
                <NavLink className="list-group-item " to='news' >news</NavLink>
                <NavLink className="list-group-item " to='messages' >messages</NavLink>
                <hr />
                <Outlet />
            </Fragment>
        )
    }
}
