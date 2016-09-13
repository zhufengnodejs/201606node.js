var Suggest = React.createClass({
    getInitialState(){
      return {items:[]}
    },
    handleChange(event){
        var wd = event.target.value;//取得输入框的值
        $.ajax({
            url:'https://www.baidu.com/su',
            method:'get',
            data:{wd},
            //指定后台读取方法名的参数名
            jsonp:'cb',
            dataType:'jsonp',
            //如果为true,会把data对象转成查询字符串并追加到url中
            processData:true,
            //绑定回调函数的this指针
            context:this,
        }).then(function(data){
            this.setState({
                items:data.s.map((item,index)=><li className="list-group-item" key={index}>{item}</li>)
            });
        });
    },
    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <input onChange={this.handleChange} type="text" className="form-control"/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.items
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest></Suggest>,document.querySelector('#app'));