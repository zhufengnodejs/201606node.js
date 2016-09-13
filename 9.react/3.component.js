/**
 * 定义一个组件之后，此组件可以像普通的
 * DOM标签一样使用，插入DOM容器中
 */
var Message  = React.createClass({
    //会返回一个DOM结构
    //return 后面需要加一个小括号
    //return 能且只能返回一个顶级元素
    render(){
        return <div>hello</div>
    }
});
//把此组件插入到DOM容器中
ReactDOM.render(
    <Message></Message>,
    document.querySelector('#app')
);

