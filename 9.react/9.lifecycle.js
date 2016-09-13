var MessageBox = React.createClass({
    getDefaultProps(){
        console.log('1.getDefaultProps 获取默认属性');
        return {count:1}
    },
    getInitialState(){
        console.log('2.getInitialState 获取初始状态');
        //状态可以来自于属性,可以从属性初始化
        return {count:this.props.count}
    },
    componentWillMount(){
        console.log('3.componentWillMount 组件将要被加载到DOM容器中');
    },
    handleClick(){
        this.setState({count:this.state.count+1});
    },
    render(){
        console.log('4. render 把组件渲染到DOM容器中');
        return <div>
                     {this.state.count}
                     <button className="btn btn-primary" onClick={this.handleClick}>加1</button>
               </div>
    },
    componentDidMount(){
        console.log('5.componentDidMount 组件被渲染到DOM容器之后');
    },
    //
    shouldComponentUpdate(nextProps,nextState){
      console.log('6.shouldComponentUpdate 当状态或属性发生改变后是否需要重新调用render进行刷新');
      if(nextState.count>10){
          return false
      }
      return true;
    },
    componentWillUpdate(){
        console.log('7.componentWillUpdate 组件将要被更新');
    },
    componentDidUpdate(){
        console.log('8.componentDidUpdate 组件更新之后');
    }
});

ReactDOM.render(<MessageBox></MessageBox>,document.querySelector('#app'));