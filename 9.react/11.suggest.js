function ajax({url=new Error('url必须提供!'),method='GET',data={},jsonp,dataType='json',processData=true,context}){
  return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest;
         //生成一个回调函数方法名
        var cbMethod= `jQuery_${Date.now()}`;
        url += (`?${jsonp}=${cbMethod}`);// cb=jQuery_1473758526782
        if(processData){
            var qs = [];
            for(var attr in data){
                qs.push(`${attr}=${data[attr]}`);//wd=a
            }// qs = ['wd=a','bb=c']=> wd=a&bb=c
            url += `&${qs.join('&')}`;
        }
        xhr.open(method,url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(/2\d{2}/.test(xhr.status)){
                    var result = xhr.responseText;
                    //jQuery_1473758526782({"q":"","s":[]});
                    if(dataType == 'jsonp'){
                        var regex = new RegExp('\((\{.+\})\)') ;
                        var matches  = result.match(regex);
                        if(matches){
                           result = matches[1];
                        }
                    }
                    result = JSON.parse(result);
                    resolve(result);
                }else{
                    reject(xhr.responseText);
                }
            }
        }
      xhr.send();
  });
}
var Suggest = React.createClass({
    getInitialState(){
      return {items:[]}
    },
    handleChange(event){
        var wd = event.target.value;//取得输入框的值
        var self=this;
        $.ajax({
            //url:'http://localhost:8080/su',
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
            self.setState({
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