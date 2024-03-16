<template>
  <div class="content-body">
    <!-- row -->
    <div class="container-fluid">
      <div class="page-titles">
        <div class="col-xl-6 col-lg-6">
          <div class="row">
            <div class="col-xl-4 mb-3">
              <div class="example">
                <p class="mb-1">Filter By</p>
                <input
                  class="form-control input-daterange-datepicker"
                  type="date"
                  name="daterange"
                  value="01/01/2015 - 01/31/2015"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="form-head d-flex mb-3 mb-md-4 align-items-start">
          <div class="me-auto d-none d-lg-block">
            <a href="" class="btn btn-primary btn-rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-download me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
                />
                <path
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
                /></svg
              >Download</a
            >
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
        <!-- alert -->
        <div class="alert alert-light alert-dismissible fade show">
          <p>
            There are no compliance scan to display report meta data. Learn how
            to start your first
            <a href="" class="text-primary">compliance scan</a>
          </p>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <!-- content -->
            <!-- Nav tabs -->
            <div class="custom-tab-1">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#home1">
                    Overview</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#profile1"
                    >0 Nodes</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#contact1"
                    >0 Profile</a
                  >
                </li>
              </ul>
              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="home1"
                  role="tabpanel"
                >
                  <div class="pt-4">
                    <div class="col-xl-10 col-lg-6 col-md-6 col-sm-6">
                      <!-- Overview -->
                      <overview />
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile1">
                  <div class="pt-4">
                    <p>
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor.
                    </p>
                    <p>
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor.
                    </p>
                  </div>
                </div>
                <div class="tab-pane fade" id="contact1">
                  <div class="pt-4">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove.
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import overview from "../components/Reporting/overview.vue";

export default {
  components: {
    overview,
  },
};
</script>
