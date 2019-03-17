<template>
<div>
  <ul data-v-27ebe30a class="tab" >                                                  
        <li data-v-27ebe30a @click="xinping(idx)" v-for="(item,idx) in fenlei" :key="item" :class ="{active:activeindex == idx}"> {{item}}
            <span data-v-27ebe30a class="icon iconfont icon-asc" v-if="idx == 2"></span>
        </li>
      
  </ul>
</div>
</template>
<script>
export default {
    props:["chengexin","changexiao","changeprice"],
    data(){
        return{
           fenlei:[
               "新品", 
               "销量",
               "价格"   
           ],
           activeindex:1

        }
    },

    methods:{
        xinping(idx){
              this.activeindex = idx;
              if(idx === 0){
                this.$emit("changexin",idx)
              }else if(idx === 1){
                  this.$emit("changexiao",idx)
              }else if(idx===2){
                    this.$emit("changeprice",idx)
              }
        

     
        }
    }

}
</script>
<style scoped>
span{
    float: none
}

</style>

