<template>
     <div>
           <Lheader></Lheader>
          <div data-v-27ebe30a class="wrapper">
            <Lsort></Lsort>
             <Listgoods></Listgoods>
         </div>
    </div>
     
</template>
<script>


import Lheader from "../components/Lheader.vue";
import Lsort from "../components/Lsort.vue";
import Listgoods from "../components/Listgoods.vue";



export default {
    components:{
        Lheader,
        Lsort,
        Listgoods
     
    }
}
</script>
<style>

</style>
