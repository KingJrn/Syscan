<template>
  <sidebar />
  <settings />
</template>

<script>
import sidebar from '@/components/sidebar.vue';
import settings from '@/components/settings.vue';
export default {
  components: {
    sidebar,
    settings,
  }
}
</script>