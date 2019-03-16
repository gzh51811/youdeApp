<template>
  <div class="scroll-list">
        <ul class="list">
            <li class="list-app" v-for="item in splist" :key="item.id">
                <a>
                    <div class="box">
                        <div class="lefts">
                          <img :src="item.thumbnail" >
                        </div>
                        <div class="rigths">
                            <span class="spname">{{item.title}}</span><br>
                            <span class="sprice">￥{{item.maxPrice/100}}</span><br>
                            <span class="spsite">自营</span>
                        </div>
                    </div>
                </a>
            </li>

        </ul>
     
      <div data-v-6b1dde78 data-v-27ebe30a class="go-top-wrapper" style="display: none;">
        <i data-v-6b1dde78 class="icon iconfont icon-top"></i>
      </div>
      <a data-v-5c396eb0 data-v-27ebe30a href="/demand" class="btn-wrapper">
        <img
          data-v-5c396eb0
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkZCQTM5RjBERkQ5MTFFN0IwNDVBNUNCMDc1OTdCMzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkZCQTM5RjFERkQ5MTFFN0IwNDVBNUNCMDc1OTdCMzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRkJBMzlFRURGRDkxMUU3QjA0NUE1Q0IwNzU5N0IzNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRkJBMzlFRkRGRDkxMUU3QjA0NUE1Q0IwNzU5N0IzNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjddMNAAAAyxSURBVHja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"
        >
      </a>
  </div>
</template>
<script>
export default {
  data(){
    return{
        splist:[]
    }
  },
  created(){
      this.$axios.get("http://localhost:3000/list",{

      }).then(res=>{
          let datas = res.data;
        
          this.splist = datas
      });
  },
 

};
</script>

<style scoped>
span{
    float: none
}
.scroll-list{
    position: absolute;
    top: 1.66rem;
    width: 100%;
    left: 0;
    bottom: 0;

}
.list li{
    height: 80px;
    padding: 15px 12px;
    border-bottom: 1px solid #ddd;
}
.list-app a{
  display: block;
  color: #7e8c8d;
  text-decoration: none;
}
.box{
  display: flex
}
.sprice{
    font-size: 12px;
    color: #eb4344;
}
.spsite{
  font-size: 12px;
  color: #377dcc;
}
.spname{
    font-size: 13px;
    color: #656565;
    line-height: 18px;
    height: 36px;
}
.rigths{
      flex: 1;
      width: 75%;
      box-sizing: border-box;
      line-height: 22px;
}

.lefts {
      width: 25%;
    height: 80px;
    margin-right: 10px;
}
.lefts img{
    width: 80px;
    height: 80px;
}
</style>
