let vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {isSelected:true,title:'晚上回去睡觉'}
        ],
        hash:'complete',//路径切换时 获取的hash值
        todo:'',// 输入框中需要增加的内容,
        t:''//当前点击的那一个
    },
    methods:{
        addTodo(){
            let todo = {isSelected:false,title:this.todo};
            this.todos.push(todo);
            this.todo = '';
        },
        remove(todo){
            this.todos = this.todos.filter(item=>todo!==item);
        },
        change(todo){
            //todo代表的是我当前点击的是哪一个，存储当前点击的这一项
            this.t = todo;
        },
        reset(){
            this.t = '';
        }
    },
    computed:{
        lists(){
            if(this.hash === 'complete'){
                return this.todos;
            }
            if(this.hash === 'finish'){
                return this.todos.filter(item=>item.isSelected)
            }
            if(this.hash === 'unfinish'){
                return this.todos.filter(item=>!item.isSelected)
            }
        },
        total(){
            //求出数组中为false的个数
            //将数组中的true全部干掉，求出剩余length
            return this.todos.filter(item=>!item.isSelected).length;
        }
    },
});
let listener = () => {
    let hash = window.location.hash.slice(1) || 'complete'; //如果打开页面没有hash默认是全部
    vm.hash = hash;
};
listener(); //页面一加载 就需要获取一次hash值，否则可能导致 回到默认hash
window.addEventListener('hashchange',listener,false);
//1.将数据渲染到页面上 √
//2.获取数据将内容插入到列表中  √
//4.算出 当前未完成的事件的个数  √

//3.点击删除，实现删除当前项
//5.点击完成后增加del样式 :class="{del:'xxx'}"

