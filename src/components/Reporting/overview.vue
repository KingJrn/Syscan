<template>
  <!-- Nav tabs -->
  <template v-if="default_node">
    <div class="col-xl-12">
      <div class="pt-4">

        <div class="card">
          <div class="card-body" v-if="node">
            <div class="rounded-circle bg-body-secondary d-flex justify-content-center align-items-center m-auto mb-3"
              style="width: 80px; height: 80px">
              <div class="rounded-circle bg-primary w-75 h-75 d-flex justify-content-evenly align-items-center">
                <div class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center"></div>
              </div>
            </div>
            <p class="text-center">
              Compliance status and severity for your node will appear here
              <br />
              learn to start your first
              <span class="text-primary">compliance scan</span>
            </p>
          </div>
          <!-- Node Table -->
          <div class="card-body text-center">

            <div class="table-responsive">
              <table id="example5" class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                <thead>
                  <tr>

                    <th>Scan Date</th>
                    <th>Target</th>
                    <th>Compliance score</th>
                    <th>Profile</th>
                    <th>Node Group</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-primary">04-023-2024</td>
                    <td class="text-primary">Infinix-234</td>
                    <td>33%</td>
                    <td>linux-kernel</td>
                    <td>No</td>
                    <td> <button type="button" class="btn btn-primary btn-sm" @click="OpenReport()">view</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-primary">04-023-2024</td>
                    <td class="text-primary">Infinix-234</td>
                    <td>53%</td>
                    <td>linux-kernel</td>
                    <td>Yes</td>
                    <td> <button type="button" class="btn btn-primary btn-sm" @click="OpenReport()">view</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-primary">04-023-2024</td>
                    <td class="text-primary">Infinix-234</td>
                    <td>33%</td>
                    <td>linux-kernel</td>
                    <td>No</td>
                    <td> <button type="button" class="btn btn-primary btn-sm" @click="OpenReport()">view</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer text-body-secondary">Global Compliance</div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="node_view">

    <div class="col-xl-12">
      <div class="pt-4">
        <!-- Back button -->
        <div class="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
          <a href="" class="text-primary"> Back</a>
        </div>

        <div class="card">
          <div class="card-body" v-if="node">
            <div class="rounded-circle bg-body-secondary d-flex justify-content-center align-items-center m-auto mb-3"
              style="width: 80px; height: 80px">
              <div class="rounded-circle bg-primary w-75 h-75 d-flex justify-content-evenly align-items-center">
                <div class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center"></div>
              </div>
            </div>
            <p class="text-center">
              Compliance status and severity for your node will appear here
              <br />
              learn to start your first
              <span class="text-primary">compliance scan</span>
            </p>
          </div>
          <!-- Node Table -->
          <div class="card-body text-center">

            <div class="table-responsive">
              <table id="example5" class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                <thead>
                  <tr>

                    <th>Scan Date</th>
                    <th>Target</th>
                    <th>Compliance score</th>
                    <th>Profile</th>
                    <th>Node Group</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-primary">Today</td>
                    <td class="text-primary">Host in ABC</td>
                    <td>50%</td>
                    <td>ABC Profile</td>
                    <td>Not Applicable</td>
                    <td> <RouterLink to="node-report" class="btn btn-primary btn-sm" >view</RouterLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <!-- Node Report -->

</template>
<script>
export default {
  name: "overview",
  components: {
  },
  data() {
    return {
      default_node: true,
      node_view: false,
    }
  },
  methods: {
    OpenReport() {
      this.default_node = false;
      this.node_view = true;
    },
  },
}
</script>
