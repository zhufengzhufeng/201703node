let vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {isSelected:true,title:'晚上回去睡觉'}
        ],
        todo:''// 输入框中需要增加的内容
    },
    methods:{
        addTodo(){
            let todo = {isSelected:false,title:this.todo};
            this.todos.push(todo);
            this.todo = '';
        }
    },
    computed:{
        total(){
            //求出数组中为false的个数
            //将数组中的true全部干掉，求出剩余length
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
})

//1.将数据渲染到页面上 √
//2.获取数据将内容插入到列表中  √
//4.算出 当前未完成的事件的个数  √

//3.点击删除，实现删除当前项
//5.点击完成后增加del样式 :class="{del:'xxx'}"

