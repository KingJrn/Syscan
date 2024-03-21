<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table id="example5" class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Last Modified</th>
                      <th class="">Status</th>
                      <th class="">Select Profile</th>
                      <th v-if="status === 'pass'"></th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>Node 1</span>
                      </td>

                      <td class="text-primary">SSH</td>
                      <td>22 Mar 2021</td>
                      <td class="py-2"><span class="badge badge-warning badge-sm light"
                          v-if="status === 'pass'">Processing <i class="bi bi-arrow-clockwise"></i></span>
                        <span class="badge badge-primary badge-sm light" v-if="status === 'passs'">Completed <i
                            class="bi bi-check2"></i></span>
                        <span class="badge badge-danger badge-sm light" v-if="status === 'failed'">Failed <i
                            class="bi bi-slash-circle"></i></span>
                      </td>
                      <td>
                        <select id="inputState" class="default-select form-control form-select-sm w-50">
                          <option selected>Choose...</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </td>
                      <td v-if="status === 'pass'">
                        <RouterLink to="node-report" class="text-primary ">Report</RouterLink>
                      </td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm">Remediate</button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <h4 class="fs-4">Previous Scan</h4>

          <div class="card">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table id="example5" class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Last Modified</th>
                      <th class="">Status</th>
                      <th class="">Select Profile</th>
                      <th v-if="status === 'pass'"></th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>Node 1</span>
                      </td>

                      <td class="text-primary">SSH</td>
                      <td>22 Mar 2021</td>
                      <td class="py-2"><span class="badge badge-warning badge-sm light"
                          v-if="status === 'processings'">Processing <i class="bi bi-arrow-clockwise"></i></span>
                        <span class="badge badge-primary badge-sm light" v-if="status === 'passs'">Completed <i
                            class="bi bi-check2"></i></span>
                        <span class="badge badge-danger badge-sm light" v-if="status === 'pass'">Failed <i
                            class="bi bi-slash-circle"></i></span>
                      </td>
                      <td>
                        <select id="inputState" class="default-select form-control form-select-sm w-50">
                          <option selected>Choose...</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </td>
                      <td v-if="status === 'pass'">
                        <RouterLink to="node-report" class="text-primary ">Report</RouterLink>
                      </td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm">Remediate</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Node 1</span>
                      </td>

                      <td class="text-primary">SSH</td>
                      <td>22 Mar 2021</td>
                      <td class="py-2"><span class="badge badge-warning badge-sm light"
                          v-if="status === 'processing'">Processing <i class="bi bi-arrow-clockwise"></i></span>
                        <span class="badge badge-primary badge-sm light" v-if="status === 'pass'">Completed <i
                            class="bi bi-check2"></i></span>
                        <span class="badge badge-danger badge-sm light" v-if="status === 'failed'">Failed <i
                            class="bi bi-slash-circle"></i></span>
                      </td>
                      <td>
                        <select id="inputState" class="default-select form-control form-select-sm w-50">
                          <option selected>Choose...</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </td>
                      <td v-if="status === 'pass'">
                        <RouterLink to="node-report" class="text-primary ">Report</RouterLink>
                      </td>
                      <td v-if="status !== 'pass'">
                        <button type="button" class="btn btn-primary btn-sm">Remediate</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- row -->


</template>
<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  name: "Profiles",
  data() {
    return {
      status: 'pass',
    }
  }
};
</script>
