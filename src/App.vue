<script setup>
import { RouterLink, RouterView } from 'vue-router'
import topNav from './components/topNav.vue';
</script>

<template>
  <div>
    <topNav/>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
