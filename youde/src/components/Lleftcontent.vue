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
        v-for="(list,idx) in category"
        :key="list.name"
        @click="show(idx)"
      >{{list.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props:["category","changeidx"],
  data() {
    return {
   
      active: 0
     
    };
  },
  methods: {
    show(idx) {
      // console.log(idx);
      this.active = idx; 
      this.$emit("changeidx",idx);     
    }
  }
};
</script>
<style scopde>
</style>
