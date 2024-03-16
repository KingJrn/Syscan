<template>
  <div>
    <!-- sidebar -->
    <Sidebar/>
    <Index/>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Index from "../components/Credential/credentialsIndex.vue";



export default {
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