<template>
  <div>
    <div class="page-titles bg-white p-3">
      <span v-if="showCred === true"> Manage your credentials to interact with your nodes</span>
      <span v-if="showCred === false">All credentials</span>
      <!-- Back button -->
      <div class="m-4" @click="goBack" v-if="showCred === false">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
        <a href="javascript: void(0)" class="text-primary"> Back</a>
      </div>
    </div>

    <div class="form-head d-flex mb-3 mb-md-4 align-items-start" v-if="showCred === true">
      <div class="me-auto d-none d-lg-block">
        <a href="javascript:void();" class="btn btn-primary btn-rounded add-staff" @click="showCredential">+ New
          Credentials</a>
      </div>

      <div class="input-group search-area ms-auto d-inline-flex me-3">
        <input type="text" class="form-control" placeholder="Search here" />
        <div class="input-group-append">
          <button type="button" class="input-group-text">
            <i class="flaticon-381-search-2"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Added Credential components comes here -->
    <AddedCredentials v-if="showCred === true" />
    <saveCredentials v-if="showCred === false" />
  </div>
</template>

<script>
import AddedCredentials from "./AddedCredentials.vue";
import saveCredentials from "./saveCredentials.vue";
export default {
  name: "CredentialsIndex",
  components: {
    AddedCredentials,
    saveCredentials,
  },
  data() {
    return {
      showCred: true,
    }
  },
  methods: {
    showCredential() {
      this.showCred = false;
    },
    goBack() {
      this.showCred = true;
    },
  },
}
</script>

<style></style>