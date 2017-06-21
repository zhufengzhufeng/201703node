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
          <button @click="add">修改图书</button>
          <button>返回</button>
        </div>
      </div>
    </div>
</template>
<script>
    import MHeader from 'components/MHeader';
    import {getOneBook} from 'api';
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
          getOneBook(this.$route.params.id).then(res=>{
              this.book = res.data;//将数据挂载视图上
          });
        },
        computed: {},
        components: {MHeader},
        methods: {
            add(){

            }
        }
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
