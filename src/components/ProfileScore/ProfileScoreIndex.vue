<template>
  <div class="content-body">
    <!-- row -->
    <div class="container-fluid">
      <div class="page-titles">
        <div class="form-head d-flex mb-3 mb-md-4 align-items-start">
          <div class="input-group search-area ms-auto d-inline-flex me-3">
            <input type="text" class="form-control" placeholder="Search here" />
          </div>
        </div>

        <div class="row">
          <div class="col-xl-12">
            <!-- content -->

            <!-- Nav tabs -->
            <div class="custom-tab-1">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#home1">
                    0 Profiles</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#profile1"
                    >88 Available</a
                  >
                </li>
              </ul>
              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="home1"
                  role="tabpanel"
                >
                  <!-- Profile component here -->
                  <Profile />
                </div>
                <div class="tab-pane fade" id="profile1">
                  <!-- AVailable component here -->
                  <Available />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--**********************************
            Content body end
        ***********************************-->
  </div>
</template>

<script>
import Profile from "./Profiles.vue";
import Available from "./Available.vue";
export default {
  name: "ProfileScoreIndex",
  components: {
    Profile,
    Available,
  },
};
</script>

<style></style>
