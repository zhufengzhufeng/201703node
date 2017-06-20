<template>
    <div>
      <m-header title="列表页"></m-header>
      <ul class="list">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
          </div>
        </li>
      </ul>
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
          getBook().then(res=>{
              this.books = res.data;//读取所有图书放到数组中
          })
        },
        computed: {},
        components: {MHeader},
        methods: {}
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
