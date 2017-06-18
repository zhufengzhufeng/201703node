//写增删改查的逻辑
function bindHtml(data) { //渲染列表数据
    let str = '';
    data.forEach(item=>{
        str+= `
            <li class="list-group-item">
                用户名 ${item.username} 密码 ${item.password}
                <button class="btn btn-danger pull-right btn-xs">删除</button>
                <button class="btn btn-warning pull-right btn-xs">修改</button>
            </li>
        `
    });
    $('.list-group').html(str);
}
$.ajax({
    url:'/user',
    dataType:'json',
    method:'get',
}).then(function (data) {
    bindHtml(data);
});
$('#add').on('click',function () {
    $.ajax({
        method:'post',
        url:'/user',
        dataType:'json',
        data:{ //通过请求体
            username:$('#username').val(),
            password:$('#password').val()
        }
    }).then(function (data) {
        bindHtml(data)
    })
});