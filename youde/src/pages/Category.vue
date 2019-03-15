<template>
  <div data-v-8f50877c class="container">
    <Lheader></Lheader>
    <div data-v-8f50877c>
      <Lleft></Lleft>
      <Lrigth></Lrigth>
    </div>
  </div>
</template> 
<script>
import Lheader from "../components/Lheader.vue";
import Lleft from "../components/Lleftcontent.vue";
import Lrigth from "../components/Lrigthcontent.vue";


export default {
  data(){
    return{
      isok:true
    }
  },
  components: {
    Lheader,
    Lleft,
    Lrigth
  }
};
</script>
<style scoped>
</style>
