//增加用户
/**
 * 1. 弹出模态窗口，输入姓名
 * 2. 获取姓名并提交到后台接口
 * 3. 后台接口把此用户保存到文件系统中，返回保存后的用户
 *
 */
function saveUser(){
    var name = document.querySelector('#name').value;
    //当接口请求并响应回来之后会执行通过then注册的回调函数
    $.post('/users',{name:name}).then(function(user){
        $('#addUserModal').hide();
        $('#userBody').html($('#userBody').html()+`
        <tr>
           <td>${user.id}</td>
           <td>${user.name}</td>
           <td>
                <button class="btn btn-warning">修改用户</button>
                <button class="btn btn-danger">删除用户</button>
           </td>
         </tr>
            `);
    });
}