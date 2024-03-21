<template>
  <div>
    <!-- sidebar -->
    <Sidebar/>
    <Index/>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Index from "../components/scan/ScanIndex.vue";



export default {
  name: "Inventory",
  components: {
    Sidebar,
    Index,
  },
  mounted(){
  
  }
};

</script>
<style scoped>
</style>