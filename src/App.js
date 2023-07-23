import React, { Component } from 'react'
import './App.css'

import Demo1 from './components/1_setState'
import Demo2 from './components/2_lazyLoad'
import Demo3 from './components/3_hooks_useState'
import Demo4 from './components/4_hooks_useEffect'
import Demo5 from './components/5_hooks_useRef'
import Demo6 from './components/6_fragment'
import Demo7 from './components/7_hooks_useContext和Context'
import Demo8 from './components/8_renderProps和childrenProps'
import Demo9 from './components/9_errorBoundary'
import Demo10 from './components/10_router6'




export default class App extends Component {
  render() {
    return (
      <div className='myContainer'>
        <Demo1 x={100} /><hr />
        <Demo2 /> <hr />
        <Demo3 /> <hr />
        <Demo4 /> <hr />
        <Demo5 /> <hr />
        <Demo6 /> <hr />
        <Demo7 /> <hr />
        <Demo8 /> <hr />
        <Demo9 /> <hr />
        <Demo10 /> <hr />
      </div>
    )
  }
}
