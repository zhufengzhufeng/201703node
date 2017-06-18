//写增删改查的逻辑
$.ajax({
    url:'/user',
    dataType:'json',
    method:'get'
}).then(function (data) {
    console.log(data);
});