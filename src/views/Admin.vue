<template>
<Sidebar />
<Settings />
  
</template>
<script>
  import Sidebar from '../components/sidebar.vue';
  import Settings from '../components/Admin/Settings.vue';
  export default {
    name: "Admin",
    component: {
      Sidebar,
      Settings
    }
  }
</script>