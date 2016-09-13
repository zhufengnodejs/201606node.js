var Person = React.createClass({
    //定义此组件使用的时候必须提供一个name属性,类型是字符串
   PropTypes:{
        name:React.PropTypes.string.isRequired
   },
   //定义初始状态,可以通过this.state来引用这个状态对象
   getInitialState(){
        return {happy:true}
   },
    //处理点击事件,可以在此修改当前实例的状态，当状态改变之后会重新触发render方法，重新渲染视图
   handleClick(){
     this.setState({happy:!this.state.happy});
   },
   render(){
       console.log('render');
       var heart = this.state.happy?'开心':'不开心';
       return <p>
           {this.props.name}:{heart}<br/>
           <button className="btn btn-primary" onClick={this.handleClick} >变心</button>
       </p>
   }
});
ReactDOM.render(
    <Person name="张三"/>,
    document.querySelector('#app')
);
