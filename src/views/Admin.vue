<template>
<Sidebar />
<Settings />
  
</template>
<script>
  // import Sidebar from '../'
  // import Settings from './components/Admin/Settings.vue';
  export default {
    name: "Admin",
    component: {
      Sidebar,
      Settings
    }
  }
</script>