<template>
  <div >
    <!-- sidebar -->
    <Sidebar />
    <Index />
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Index from "../components/Remediation/Profiles.vue";


export default {
  name: "Remediation",
  components: {
    Sidebar,
    Index,
  },
};
</script>


<style>

</style>../components/ProfileScore/Index.vue../components/ProfileScore/ProfileScoreIndex.vue