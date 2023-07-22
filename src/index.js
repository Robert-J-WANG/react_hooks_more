import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App';


// react18 渲染写法
export const root = ReactDOM.createRoot(document.getElementById('root')); root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)