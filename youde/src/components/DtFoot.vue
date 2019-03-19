<template>

    <div>
        <ul>
            <li>

                <i></i>
                <p>电话</p>
            </li>
            <li @click="goPurchese"> 
                <p style="position:absolute;left:2.2rem;top:4px;background:red;height:12px;
                          width:12px;line-height:12px;text-align:center;border-radius:3px;font-size:10px;
                          border:1px solid red;border-radius:50%;color: white!important;">0</p>
                <i class="icon iconfont icon-add_cart"></i>
                <p style="font-size:10px">购物车</p>
            </li>
            <li>

                <i></i>
                <p>立即购买</p>
            </li>
            <li @click="purchese">
                <i></i>
                <p>加入购物车</p>
            </li>
        </ul>
    </div>
    
</template>

<script>
import qs from "qs";
export default {
 
  methods: {
    purchese(){
            this.$store.commit('updateCode',{
                                code : 2,
                                top : "0%"
                            });
        },

        goPurchese(){
            this.$router.push({
                path : '/cart'
            });
        }
      
    },
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

</script>

<style lang="scss" scoped>

div{
    position: fixed;
    bottom: -1px;
    height: 1.3rem;
    width: 100%;
    ul{
        
        font-size: 0px;
        height: 1.3rem;
        background: #f5f5f5; 
        display: flex;
        text-align: center;
        li{
            height: 100%;
            border: none;
            line-height: 1.3rem;
        }
        li:nth-child(1),li:nth-child(2){
            flex : 1;
            font-size: .25rem;
        }
        li:nth-child(3),li:nth-child(4){
            flex : 2;
            font-size: .35rem;
            color: white;
        }
        li:nth-child(3){
            background: #4792d1;
        }
        li:nth-child(4){
            background: #ff5d5d;
        }
    }
  }

</style>


