var Person = React.createClass({
    render(){
        return <ul className="list-group">
            {
                this.props.children.map((item,index)=><li className="list-group-item" key={index}>{item}</li>)
            }
        </ul>
    }
});

ReactDOM.render(
    <Person>
        <span>大毛</span>
        <span>二毛</span>
        <span>小毛</span>
    </Person>,
    document.querySelector('#app')
);


