/**
 * jsx
 * 遇到 < 以html来解析
 * 遇到 {开头的话以js代码来解析
 */
var names = ['张三','福原爱','张三'];
ReactDOM.render(
    <div>
        {
          names.map((item,index)=><div key={index}>hello:{item}</div>)
        }
    </div>,
    document.querySelector('#app')
);
