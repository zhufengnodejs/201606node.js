var Person = React.createClass({
    //规定使用此组件的时候必须提供的属性名和属性的约束
    //属性放置的是由外界传入，而且初始化之后就不能改变的属性
    propTypes:{
        //必须提供姓名属性 类型是字符串
        name:React.PropTypes.string.isRequired,
        //必须提供性别属性 类型是字符串
        gender:React.PropTypes.string.isRequired
    },
    //定义默认属性,如果外界使用此组件的时候传入了此属性，则使用外部传入的属性
    // 如果外界没有传入，则使用默认属性
    getDefaultProps(){
        return {name:'无名'}
    },
    render(){
        //所有属性可以在组件中通过this.props取到
        return (
            <div>
                姓名:{this.props.name}<br/>
                性别:{this.props.gender}
            </div>
        )
    }
});
//解构赋值
var props= {
    gender:'男'
}
ReactDOM.render(
    <Person  {...props}><span>hello</span></Person>,
    document.querySelector('#app')
);