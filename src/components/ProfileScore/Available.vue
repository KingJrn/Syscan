<template>
  <div class="pt-4">
    <button type="button" class="btn btn-rounded btn-primary btn-sm float-end">
      <span class="btn-icon-start text-primary"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
          />
          <path
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
          />
        </svg> </span
      >Get
    </button>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="table-responsive">
            <table
              id="example5"
              class="table shadow-hover doctor-list table-bordered mb-4 dataTablesCard fs-14"
            >
              <thead>
                <tr>
                  <th>profile</th>

                  <th>Version</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="">
                    <div class="d-flex align-items-end">
                      <input
                        type="checkbox"
                        class="form-check-input me-2"
                        id="customCheckBox2"
                        required
                      />
                      <p class="mb-0">DevSec Apache Baseline</p>
                    </div>
                  </td>

                  <td class="">2.22</td>
                  <td class="">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary light btn-rounded btn-sm text-nowrap"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        /></svg
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-end">
                      <input
                        type="checkbox"
                        class="form-check-input me-2"
                        id="customCheckBox2"
                        required
                      />
                      <p class="mb-0">DevSec Apache Baseline</p>
                    </div>
                  </td>

                  <td>3.34</td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary light btn-rounded btn-sm text-nowrap"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        /></svg
                    ></a>
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

<script>
  export default {
  }
</script>

<style></style>
