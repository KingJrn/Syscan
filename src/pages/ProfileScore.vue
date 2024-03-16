<template>
  <div >
    <!-- sidebar -->
    <Sidebar />
    <Index />
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Index from "../components/ProfileScore/ProfileScoreIndex.vue";


export default {
  name: "Profile-Store",
  components: {
    Sidebar,
    Index,
  },
};
</script>


<style>

</style>../components/ProfileScore/Index.vue../components/ProfileScore/ProfileScoreIndex.vue