var Focus = React.createClass({
    handleClick(){
        //如何在事件处理函数中得到对应的DOM元素
        this.refs.yourInput.focus();
        $(this.refs.yourInput).val('your value');
    },
    render(){
        return <div>
            <input ref="myInput" type="text" className="form-control"/>
            <input ref="yourInput" type="text" className="form-control"/>
            <input className="btn btn-primary" type="button" onClick={this.handleClick} value="获得焦点"/>
        </div>
    }
});
ReactDOM.render(<Focus></Focus>,document.querySelector('#app'));