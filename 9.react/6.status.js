var Person = React.createClass({
    //定义此组件使用的时候必须提供一个name属性,类型是字符串
   PropTypes:{
        name:React.PropTypes.string.isRequired
   },
   //定义初始状态,可以通过this.state来引用这个状态对象
    //状态是由内部初始化的，不能由外部直接改变
   getInitialState(){
        return {happy:true}
   },
    //处理点击事件,可以在此修改当前实例的状态，当状态改变之后会重新触发render方法，重新渲染视图
   handleClick(){
       var before = this.state;
       console.log(this.state.happy);
       // setState是一个异步方法，如果要取新的状态，必须在回调里面取
       //不能在setstate方法之后取，因为异步方法要在所有的同步方法执行完毕之后执行
     this.setState({happy:!this.state.happy},()=>{
         console.log(this.state.happy);
       /*  var after = this.state;
         console.log(before === after );*/
     });
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
