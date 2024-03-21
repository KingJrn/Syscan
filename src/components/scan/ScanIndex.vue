<template>
  <div>
    <div class="content-body">
      <!-- row -->
      <div class="container-fluid">
        <div class="page-titles bg-white p-3">
          <span > Manage your Nodes and Node Groups</span>
        </div>
        <div class="form-head d-flex mb-3 mb-md-4 align-items-start">
          <div class="input-group search-area ms-auto d-inline-flex me-3">
            <input type="text" class="form-control" placeholder="Search here" />
            <div class="input-group-append">
              <button type="button" class="input-group-text">
                <i class="flaticon-381-search-2"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Node list components comes here -->
        <NodeList />
      </div>
      
    </div>
  </div>
</template>

<script>
import NodeList from "./NodeList.vue";

export default {
  name: "CredentialsIndex",
  components: {
    NodeList,
  },
  data(){
    return{
    }
  },
  methods: {

  },
}
</script>

<style></style>
