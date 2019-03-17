<template>
  <div>
    <Lheader></Lheader>
    <Lleft :category ="category" v-on:changeidx ="changeidx"></Lleft>
    <lrigth :goodslit="category" :num="num"></Lrigth>
    <Sytotop></Sytotop>
  </div>
</template> 
<script>
import Lheader from "../components/Lheader.vue";
import Lleft from "../components/Lleftcontent.vue";
import Lrigth from "../components/Lrigthcontent.vue";
import Sytotop from "../components/Sytotop.vue";

export default {
  data() {
    return {
      category:[],
      num:0
    };
  },
  components: {
    Lheader,
    Lleft,
    Lrigth,
    Sytotop
  },
  created() {
    this.$axios.get("http://localhost:3000/classfiy", {}).then(res => {
      //  console.log(res.data[0].data);
       var classfiy = res.data[0].data
       this.category = classfiy
    });
  },
 methods:{
   changeidx(idx){
      this.num = idx
      
   }  
 }
};
</script>
<style scoped>
</style>
