// React ReactDOM
/**
 * 插入DOM节点有且只能有一个根节点
 * JS和html代码混合编写的语法就叫jsx=js+xml
 */
ReactDOM.render(
    <h1>欢迎来到珠峰培训<span>嵌套</span></h1>,
    document.querySelector('#app')
);
ReactDOM.render(
    <h1>欢迎来到珠峰培训</h1>,
    document.querySelector('#app2')
);