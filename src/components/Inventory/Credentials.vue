<template>
  <div>
    <div class="page-titles bg-white p-3">
          <span v-if="showCred === true"> Manage your credentials to interact with your nodes</span>
          <span v-if="showCred === false">All credentials</span>
        </div>
        <div class="form-head d-flex mb-3 mb-md-4 align-items-start" v-if="showCred === true">
          <div class="me-auto d-none d-lg-block">
            <a href="javascript:void();" class="btn btn-primary btn-rounded add-staff" @click="showCredential">+ New Credentials</a>
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
        <saveCredentials v-if="showCred === false"/>
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
  data(){
    return{
      showCred: true,
    }
  },
  methods: {
    showCredential(){
      this.showCred = false;
    }
  },
}
</script>

<style></style>