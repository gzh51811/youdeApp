<template>
  <div>
    <ul>
      <li v-for="nav in navs" :key="nav.text" @click="addcart(nav.text)">
        <i v-if="nav.hasIco">{{nav.ico}}</i>
        {{nav.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      navs: [
        {
          text: "电话",
          path: "/phone",
          hasIco: true,
          ico: "电话"
        },
        {
          text: "购物车",
          path: "/cart",
          hasIco: true,
          ico: "购物车"
        },
        {
          text: "立即购买",
          path: "/buy",
          hasIco: false
        },
        {
          text: "加入购物车",
          path: "/cart",
          hasIco: false
        }
      ]
    };
  },
  methods: {
    addcart(text) {
      let username = localStorage.getItem("username");
      if(!username){
        this.$router.push({name:"login"});
        return;
      }
      let goodsId = this.$route.query.goodsId;
      if (text == "加入购物车") {
        this.$axios.post(
          "http://localhost:3000/cart",
          qs.stringify({
            username,
            goodsId
          })
        ).then(res=>{
          console.log(res);
          let data = res.data
          this.$store.dispatch("setcartlist",data)
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  bottom: 0;
  height: 1.3rem;
  width: 100%;
  ul {
    font-size: 0px;
    height: 1.3rem;
    background: #f5f5f5;
    display: flex;
    text-align: center;
    li {
      height: 100%;
      border: none;
      line-height: 1.3rem;
    }
    li:nth-child(1),
    li:nth-child(2) {
      flex: 1;
      font-size: 0.25rem;
    }
    li:nth-child(3),
    li:nth-child(4) {
      flex: 2;
      font-size: 0.35rem;
      color: white;
    }
    li:nth-child(3) {
      background: #4792d1;
    }
    li:nth-child(4) {
      background: #ff5d5d;
    }
  }
}
</style>


