<template>
  <div data-v-35c3340a class="wrapPadding">
    <div data-v-35c3340a class="cartList">
      <div data-v-35c3340a class="listHeader">
        <label data-v-35c3340a :class="{active:active==true}" @click="checkall"></label>
        <span data-v-35c3340a class="cartTitle">优德电商平台</span>
      </div>
      <ul data-v-35c3340a>
        <li data-v-35c3340a class="listItem" v-for="(item,idx) in cartlist" :key="item.data.id">
          <div data-v-35c3340a class="listItemContainer">
            <div data-v-35c3340a class="checkBox">
              <label data-v-35c3340a :class="{active:arr[idx]}" @click.stop="show(idx)">
                <!-- <input type="checkbox" > -->
              </label>
            </div>
            <span data-v-35c3340a class="goodsImg">
              <img data-v-35c3340a :src="item.data.thumbnail" class="imgSize">
            </span>
            <div data-v-35c3340a class="goodsRight">
              <h3 data-v-35c3340a class="goodsName">{{item.data.title}}</h3>
              <span data-v-35c3340a class="goodsSize">20g*10袋</span>
              <div data-v-35c3340a class="goodsRightBtm">
                <span data-v-35c3340a class="goodsPrice">¥{{item.data.minPrice/100}}.00</span>
                <div data-v-11ebe725 data-v-35c3340a>
                  <div data-v-11ebe725 class="goodsCount">
                    <span
                      data-v-11ebe725
                      class="de"
                      :class="{
                                                     active:goodslist[idx].qty>1
                                        }"
                      @click="delqty(idx)"
                    ></span>
                    <em data-v-11ebe725>{{goodslist[idx].qty}}</em>
                    <span data-v-11ebe725 class="add active" @click="addqty(idx)"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div data-v-35c3340a class="cartFixedBtm">
      <div data-v-35c3340a class="cartCheckAll">
        <label data-v-35c3340a :class="{active:active==true}" @click="checkall"></label> 全选
      </div>
      <div data-v-35c3340a class="cartTotal">
        <p data-v-35c3340a v-show="!btnStatus">合计：
          <strong data-v-35c3340a>￥{{total}}.00</strong>
        </p>
      </div>
      <div
        data-v-35c3340a
        class="cartFixedRight"
        :class="{
            bgRed : btnStatus
            }"
      >
        <span data-v-35c3340a @click="remove">{{btnStatus ? '删除' : '结算'}} </span>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  props: ["btnStatus"],
  data() {
    return {
      active: false,
      selected: [],
      arr: [],
      newarr:[],
      total:0,
      sum :0,
      removearr:[]
    };
  },
  computed: {
    cartlist() {
      return this.$store.getters.getcartlist;
    },
    goodslist() {
      return this.$store.getters.getgoodslist;
    }
  },
  methods: {
    checkall() {
      if (this.active) {
        this.arr = this.cartlist.map(() => {
          return false;
        });
      } else {
        this.arr = this.cartlist.map(() => {
          return true;
        });

      }
      this.active = !this.active;
        this.totalprice();
      this.$forceUpdate();
    },
    show(idx) {
      
      this.arr[idx] = !this.arr[idx];
      if (this.arr.length == this.cartlist.length) {
        this.sum =0;
        for(let i =0; i<this.arr.length; i++){
            if(this.arr[i]){
              this.sum++
            }
        }
        this.active = (this.sum == this.cartlist.length)
        // this.active = this.arr.every((item,idx) => {
        //   console.log(this.arr);
        //   this.sum++;
        //   console.log(this.sum);
        //   return item == true && this.sum == this.cartlist.length;
        // });
      } else {
        this.active = false;
      }

      this.totalprice();


      this.$forceUpdate();
    },
    totalprice(){
        this.newarr =[]
      for(let i =0; i<this.arr.length;i++){
          if(this.arr[i]){
             this.newarr.push(i);
          }
      }

      this.total = 0
      for(let j=0; j<this.newarr.length;j++){
          this.total += this.goodslist[this.newarr[j]].qty * this.cartlist[this.newarr[j]].data.minPrice/100
      }
    },
    addqty(idx) {
      let username = localStorage.getItem("username");
      let goodsId = this.goodslist[idx].goodsId;
      this.$axios
        .post(
          "http://localhost:3000/cart/add",
          qs.stringify({
            username,
            goodsId
          })
        )
        .then(res => {
          this.$store.dispatch("setgoodslist", res.data);
          this.totalprice();

        });

        
    },
    delqty(idx) {
      if (this.goodslist[idx].qty === 1) {
        return;
      }
      let username = localStorage.getItem("username");
      let goodsId = this.goodslist[idx].goodsId;
      this.$axios
        .post(
          "http://localhost:3000/cart/del",
          qs.stringify({
            username,
            goodsId
          })
        )
        .then(res => {
          this.$store.dispatch("setgoodslist", res.data);
          this.totalprice();
        });
        
    },
    remove(e){
       this.removearr=[];
        if(e.target.innerText=="删除"){
           
            // console.log(this.arr);
            // for(let i=0; i<this.arr.length; i++){
            //   console.log(666);
            //      if(this.arr[i] == true){
            //        this.removearr.push(i);
            //      } 
            // }
              let goodsarr = []
              let username  = localStorage.getItem("username");
              for(let i=0; i<this.newarr.length;i++){
               goodsarr.push(this.cartlist[this.newarr[i]].data.id)     

              }
              console.log(goodsarr,this.goodslist);
              let len = goodsarr.length
              this.$axios.post("http://localhost:3000/cart/remove",
              qs.stringify({
                goodsarr,
                username
              })
              
              ).then(res=>{
                console.log(res);
                  this.$store.dispatch("setcartlist",res.data.cartlist);
                  this.$store.dispatch("setgoodslist",res.data.goodslist);
                  this.arr =[];
                  this.active = false;
                  this.totalprice();
              });

        }
    }
  },
  created() {
    let username = localStorage.getItem("username");
    this.$axios
      .post(
        "http://localhost:3000/cart/goodslist",

        qs.stringify({
          username
        })
      )
      .then(res => {
        this.$store.dispatch("setcartlist", res.data);
      });
  }
};
</script>
<style scoped>
.cartTitle {
  /*width: 100%;*/
  height: 0.86rem;
  line-height: 0.86rem;
  font-size: 0.3rem;
  color: #464646;
  border-bottom: 1px solid #efefef;
}

.cartWrap .listItemContainer .goodsRight {
  width: 3.6rem !important;
}

.cartWrap label {
  background: url("../assets/checkIcon.a368a5c.png") no-repeat !important;
  background-position: -10px 0px !important;
  /*红色部分Y轴-58*/
}
.cartWrap label.active {
  background-position: -10px -63px !important;
}
.cartFixedBtm .cartFixedRight {
  width: 110px !important;
}

.cartFixedBtm .cartFixedRight span {
  margin-right: 35px;
}
</style>