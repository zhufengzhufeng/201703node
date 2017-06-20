<template>
    <div>
      <m-header title="列表页"></m-header>
      <scroller :on-refresh="refresh" ref="scroller">
      <ul class="list">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
          </div>
        </li>
      </ul>
      </scroller>
    </div>
</template>
<script>
    import MHeader from 'components/MHeader';
    import {getBook} from 'api';
    export default {
        data(){
            return {books:[]}
        },
        created(){
          this.getList();
        },
        computed: {},
        components: {MHeader},
        methods: {
            refresh(){
                //获取最新数据
              this.getList();
            },
            getList(){
              getBook().then(res=>{
                this.books = res.data;//读取所有图书放到数组中
                //加载数据后 获取scroller 调用 finishPullToRefresh
                this.$refs.scroller.finishPullToRefresh();
              });
            }
        }
    }
</script>
<style scoped lang="less">
.list{
  li{
    display: flex;
    border-bottom: 1px solid #ccc;
    img{width: 100px;height: 90px}
    div{
      h3{color: #666666;margin: 5px;}
      display: flex;
      flex-direction: column;
    }
  }
  img[lazy="loading"]{
    background: url("../assets/loading.gif") no-repeat center;
    background-size: 50%;
  }
  img[lazy="loaded"]{
    animation: fadeIn 0.5s;
  }
}
  @keyframes fadeIn {
    from{opacity: 0}
    to{opacity: 1}
  }

</style>
