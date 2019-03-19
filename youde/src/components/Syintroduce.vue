<template>
  <div data-v-0f5990e2 class="recommend">
    <div data-v-0f5990e2 class="recommendTitle">
      <img
        data-v-0f5990e2
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACCElEQVRYR82X4TEEQRCF30XARYAMiMDJgAgQgROBEwEiQARkgAjIABkQAfVdbV/tjt3p7i1V9J+tu+3pftPz5nXvRH9sk2T+bUmHknhis+b52DxfJN1K4hmyKIC5pBNJm6Go0pukS0lXnr8HYF/SRSJxmQ8gp5Luh4DUACwknXk7CL4n1nmf7xCAm+asg/FDbsQ8Lj37APzmzst8HAfcWFkJgDO/C+1nvNNBmxMlAEizkYj91PjuJtaQY8v82wC4ajA+Y3uN80NmUcMFOKE2gDG7NyHKrl1VwQCgbM9jdyHpSNJ1cv0OimkAYCZKF7X3HnHKVgGVnBsAtLxGJBKSAI3/kMT58bttyDSVWG96Bb9rhIbAMw8AySBauLkUoDhaCAqo0joAviq1Hwuilpx0xJ1aBWoAzDlTCS85MT+pjHcE7cJEKxFJTtwQB3rPzbkqHqFteQdA9Boy7cD0mkU7Ke15kRWi5SIHQLSbdoSImBEhgYg2/3G1TLwQFTiCIc9eb1gJWbYZTZskJKZ52f0muc2A/PfqVInB5Ecz8qrAtbHy9gmLXVcbv9YGQHRk/N8NJICOksipcu9rdySzVdGrlAHRe4VrY/mYCWkI0I+dm2PkwwR2Z+bENggIx0ZGfZi0A6F+cCMKhMT4L69azbwKlGtpNICxj1MbYmw6Zm4gaXh+yALwNpR+/w0xW3Ah/eWmtQAAAABJRU5ErkJggg=="
      >
      <span data-v-0f5990e2 style="margin-right:200px;">为您推荐</span>
    </div>
    <div data-v-0f5990e2 class="recommendCont clearfix">
      <div
        data-v-0f5990e2
        class="recommendList"
        v-for="(item) in itemList"
        :key="item.data.id"
        style="height:200px;overflow:hidden;"
        @click="gotoDetails(item.data.id)"
      >
        <div data-v-0f5990e2 class="inner">
          <div data-v-0f5990e2 class="recommendListImg">
            <img
              data-v-0f5990e2
              :src="item.data.thumbnail"
              style="width:106px;height:106px;"
              class="recommendImgSize"
            >
          </div>
          <p data-v-0f5990e2 class="recommendListTitle">{{item.data.title}}</p>
          <p data-v-0f5990e2 class="recommendListPrace">
            <span data-v-0f5990e2>￥{{item.data.maxPrice/100}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: []
    };
  },

  methods: {
      gotoDetails(id){
          this.$router.push({name:"details",query:{goodsId:id}});
      }
  },
  created() {
    this.$axios("http://localhost:3000/list", {}).then(res => {
      this.itemList = res.data;
    });
  }
};
</script>
<style scoped>
</style>