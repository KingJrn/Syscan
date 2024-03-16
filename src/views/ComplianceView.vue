<template>
  <div>
    <!-- sidebar -->
    <Sidebar />
    <Reporting />
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Reporting from "../pages/Reporting.vue";


export default {
  components: {
    Sidebar,
    Reporting,    
  },
};
</script>
