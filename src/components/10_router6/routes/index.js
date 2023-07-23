import { Navigate } from "react-router-dom";
import { lazy } from 'react'

// 懒加载路由组件
const Home = lazy(() => import('../Home'));
const About = lazy(() => import('../About'));
const News = lazy(() => import('../Home/News'));
const Messages = lazy(() => import('../Home/Messages'));
const Detail = lazy(() => import('../Home/Detail'));


const routes = [
    { path: '/about', element: <About /> },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />,
                children: [
                    { path: 'detail', element: <Detail /> },
                ]
            },
            {
                path: 'messages',
                element: <Messages />,
                children: [
                    // params参数申明
                    // { path: 'detail/:id/:title/:content', element: <Detail /> }

                    // search参数申明
                    // { path: 'detail', element: <Detail /> }

                    // state参数申明
                    { path: 'detail', element: <Detail /> },
                ]
            },
            { path: '', element: <Navigate to='news' /> },
        ]
    },

    { path: '/', element: <Navigate to='/about' /> }
]
export default routes
