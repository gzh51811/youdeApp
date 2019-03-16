<template>
  <header data-v-916e8b0c class="gHeader clearfix">
    <div data-v-916e8b0c class="f_logo" @click="back">
      <i data-v-916e8b0c class="icon iconfont icon-back" style="color: rgb(88, 89, 89);"></i>
    </div>
    <div data-v-916e8b0c class="search-wrapper">
      <div data-v-0f11067f data-v-916e8b0c class="search-wrapper">
        <div data-v-0f11067f class="input-wrapper">
          <span data-v-0f11067f class="icon iconfont icon-search"></span>
          <span data-v-0f11067f class="icon iconfont icon-close-b" style="display: none;"></span>
          <input data-v-0f11067f placeholder="搜索商品">
        </div>
        <div data-v-0f11067f class="button-wrapper" style="display: none;">
          <a data-v-0f11067f class="search-btn cancel-btn">取消</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return{
      isok:true  
    }
  },
  methods:{
   back(){
     this.$router.back();
   }
  }
}
</script>





<style scoped>
.icon-search:before {
  content: "\e63F";
}
.icon-back:before {
  content: "\e661";
}


.iconfont {
font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
