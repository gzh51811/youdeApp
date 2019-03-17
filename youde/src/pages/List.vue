<template>
  <div>
    <Lheader></Lheader>
    <div data-v-27ebe30a class="wrapper">
      <Lsort  v-on:changexin="changexin" v-on:changexiao="changexiao" v-on:changeprice="changeprice"></Lsort>
      <Listgoods :splist="splist"></Listgoods>

      
      <Sytotop></Sytotop>
    </div>
  </div>
</template>
<script>
import Lheader from "../components/Lheader.vue";
import Lsort from "../components/Lsort.vue";
import Listgoods from "../components/Listgoods.vue";
import Sytotop from "../components/Sytotop.vue";

export default {
  components: {
    Lheader,
    Lsort,
    Listgoods,
    Sytotop
  },
  data() {
    return {
      splist: []
    };
  },
  created() {
    this.$axios.get("http://localhost:3000/list", {}).then(res => {
      let datas = res.data;
      datas.sort((a, b) => {

        return a.data.salesVolume - b.data.salesVolume;
      });
      this.splist = datas;
    });
  },
  methods: {
    //新品排序
    changexin(){

      this.splist.sort((a, b) => {
         var btiem = new Date(b.data.updateTime).getTime();
         var atiem = new Date(a.data.updateTime).getTime();
        return btiem - atiem;
      });
    },
    //销量排序
    changexiao(){
        this.splist.sort((a,b) =>{
     
              return a.data.salesVolume - b.data.salesVolume;
        })
    },
    //价格排序
    changeprice(){
         this.splist.sort((a,b) =>{
         
              return a.data.minPrice/100 - b.data.minPrice/100;
        })
    }
  }
};
</script>
<style>
</style>
