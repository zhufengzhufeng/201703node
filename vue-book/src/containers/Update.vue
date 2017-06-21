<template>
    <div>
      <m-header title="修改页面"></m-header>
      <div class="add">
        <div class="group">
          <label for="bookName">书名</label>
          <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
        </div>
        <div class="group">
          <label for="bookName">书的地址</label>
          <input type="text" id="bookCover" placeholder="请输入书的封面" v-model="book.bookCover">
        </div>
        <div class="group">
          <label for="content">书的详情</label>
          <input type="text" id="content" placeholder="请输入书的详细内容" v-model="book.content">
        </div>
        <div class="group">
          <button @click="update">修改图书</button>
          <router-link to="/list" tag="button">返回</router-link>
        </div>
      </div>
    </div>
</template>
<script>
    import MHeader from 'components/MHeader';
    import {getOneBook,updateBook} from 'api';
    export default {
        data(){
            return {
                book:{
                    bookName:'',
                    bookCover:'',
                    content:''
                }
            }
        },
        created(){
            //id是当前路径的参数id
            this.getBook();
        },
        computed: {},
        components: {MHeader},
        methods: {
            getBook(){
              getOneBook(this.$route.params.id).then(res=>{
                this.book = res.data;//将数据挂载视图上
              });
            },
            update(){ //修改图书
              //1.告诉服务端 需要改哪一本书 书的id /api/book?id=1  2.告诉更改的内容 book
              updateBook(this.$route.params.id,this.book).then(()=>{
                  this.$router.push('/list')
              });
            }
        },
        activated(){ //如果keep-alive执行 依然会调用activated方法
            this.getBook();
        }
        //钩子方法 beforeCreate() created beforeMount Mounted beforeUpdate update beforeDestroy destroyed beforeEach > beforeEnter > beforeRouteEnter

        //组件
    }
</script>
<style scoped lang="less">
  .add{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .group{
      label{
        font-size: 16px;
        line-height: 25px;
      }
      input{
        border: 1px solid #ccc;
        height: 30px;
      }
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      button{
        height: 35px;
      }
    }
  }
</style>
