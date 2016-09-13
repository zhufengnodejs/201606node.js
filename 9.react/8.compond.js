//最外层的panel组件 success warning danger primary info default
var Panel = React.createClass({
  render(){
      console.log('panel render');
      return <div className="panel panel-success">
                <PanelHead head={this.props.head}></PanelHead>
                <PanelBody>{this.props.body}</PanelBody>
                <PanelFooter>{this.props.footer}</PanelFooter>
             </div>
  }
});


var PanelHead = React.createClass({
    render(){
        return <div className="panel-heading">{this.props.head}</div>
    }
});
var PanelBody = React.createClass({
    render(){
        return <div className="panel-body">{this.props.children}</div>
    }
});
var PanelFooter = React.createClass({
    render(){
        return <div className="panel-footer">{this.props.children}</div>
    }
});

var content = {
    head:'我是头',
    body:'我是身体',
    footer:'我是尾巴'
}
ReactDOM.render(
    <Panel {...content}/>,
    document.querySelector('#app')
);
