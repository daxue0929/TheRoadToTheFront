import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import TodoList from './Todolist';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot){
  module.hot.accept();
}


/**
 * （一）
 *
 * 在/src/index.js文件中配置 模块热替换 来提高开发体验，create-react-app构建的的代码有个优点，可以在你更改代码的时候
 * 浏览器自动刷新页面
 * 模块热替换（HMR）是一个帮你你在浏览器重新加载应用对的工具，不需要刷新页面。
 * 在create-react-app中可以很容易的开启这个工具
 * 在/src/index.js中添加一些代码
 * 如下:
 *    if (module.hot){
 *       module.hot.accept();
 *    }
 * 一个典型的效果：
 *  打印的控制台信息，不会被刷新了
 * 使用HMR最大的好处是你可以保持应用的状态
 *
 *  （二）
 *
 *  构造函数只会在组建初始化时，调用一次。
 */
y









