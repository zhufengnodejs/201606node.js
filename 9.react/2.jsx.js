/**
 * jsx
 * 遇到 < 以html来解析
 * 遇到 {开头的话以js代码来解析
 */
var names = ['张三','福原爱','张三'];
var style = {color:'red'};
ReactDOM.render(
    <div className="bg" style={style}>
        {
          names.map((item,index)=><div key={index}>hello:{item}</div>)
        }
        <h1>dd</h1>
        <h1>dd</h1>
        <h1>dd</h1>
        <h1>dd</h1>
    </div>,
    document.querySelector('#app')
);
