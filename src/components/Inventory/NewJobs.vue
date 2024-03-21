<template>
  <div class="mb-4">
    <a href="javascript:void();" class="btn btn-danger btn-sm btn-rounded add-staff" @click="cancel">Cancel</a>
    <a href="javascript:void();" class="btn btn-primary btn-sm btn-rounded add-staff ms-2 "
      @click="saveChanges">save</a>
  </div>
  <JobCreation  v-if="!save"/>
  <JobList v-if="save"/>
</template>
<script>
import JobCreation from './JobCreation.vue';
import JobList from './JobList.vue';
export default {
  name: "NewJob",
  components: {
    JobCreation,
    JobList
  },
  data(){
    return {
      save: false,
    }
  },
  methods: {
    saveChanges(){
      this.save = true;
    },
    cancel(){
      this.save = false;
    }
  }
}
</script>
