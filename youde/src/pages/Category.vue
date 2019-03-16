<template>
  <div>
      <Lheader></Lheader>
      <Lleft></Lleft>
      <Lrigth></Lrigth>
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
