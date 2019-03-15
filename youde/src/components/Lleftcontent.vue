<template>
  <div data-v-8f50877c class="scroll-view scroll-view-left">
    <ul
      data-v-8f50877c
      class="ul-wrapper"
      style="transition-property: transform; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
    >
      <li
        data-v-8f50877c
        :class ="{active:idx == active}"
        style="pointer-events: auto;"
        v-for="(list,idx) in lists"
        :key="list.goodsname"
        @click="show(idx)"
      >{{list.goodsname}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          goodsname: "医疗健康器材",
          
        },
        {
          goodsname: "中西成药"
        },
        {
          goodsname: "养生中药"
        },
        {
          goodsname: "全球购"
        },
        {
          goodsname: "健康食品"
        },
        {
          goodsname: "普通食品"
        },
        {
          goodsname: "生活用品"
        },
        {
          goodsname: "厨房大全"
        },
        {
          goodsname: "个人护理品"
        },
        {
          goodsname: "美容瘦身"
        },
        {
          goodsname: "会员日"
        }
      ],
      active: 0
    };
  },
  methods: {
    show(idx) {
      this.active = idx;
      
    }
  }
};
</script>
<style scopde>
</style>
