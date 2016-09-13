var Input = React.createClass({
   //定义初始状态
   getInitialState(){
       return {val:'请输入内容'};
   },
    //当触发事件的时候参数列表里有event对象
   handleChange(event){
       //通过event事件对象取得事件源，再通过value取得事件源的值
       var val = event.target.value;
       this.setState({val});
   },
   //渲染方法
   render(){
       return <div>
           <input onChange={this.handleChange} value={this.state.val} type="text" className="form-control"/>
           <p>{this.state.val}</p>
       </div>
   }
});
ReactDOM.render(
    <Input/>,
    document.querySelector('#app')
);