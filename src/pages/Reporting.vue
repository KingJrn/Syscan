<template>
  <div class="content-body">
    <!-- row -->
    <div class="container-fluid">
      <div class="page-titles">

        <!-- alert -->
        <div class="alert alert-light alert-dismissible fade show" v-if="node">
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
                    Assessment Report</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#contact1">Remediation Report</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="home1" role="tabpanel">
                  <div class="pt-4">
                    <div class="col-xl-12 col-lg-6 col-md-6 col-sm-6">
                      <!-- Assessment Report -->
                      <overview />
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="contact1">
                  <!-- Remediation Report -->
                  <remediate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import overview from "../components/Reporting/overview.vue";
import remediate from "../components/Reporting/remediate.vue";

export default {
  name: "Reporting",
  components: {
    overview,
    remediate,
  },
  data() {
    return {
      node: false
    }
  }
};
</script>
