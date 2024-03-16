<template>
  <div class="pt-4">
    <button type="button" class="btn btn-rounded btn-primary btn-sm float-end">
      <span class="btn-icon-start text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
          <path
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
          <path
            d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
        </svg></span>Upload
    </button>
    <div class="col-xl-10 col-lg-6 col-md-6 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-none">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill=""
                class="bi bi-file-earmark-lock2 m-auto d-block mb-4" viewBox="0 0 16 16">
                <path
                  d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0M7 7v1h2V7a1 1 0 0 0-2 0" />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </div>
            <p class="text-center">
              seems like you need to install some profiles!
              <br />
              install pre-packaged compliance profile from the available tab or
              just upload your own
            </p>
          </div>

          <!-- Display once an item is available -->
          <div class="table-responsive">
            <table id="example5" class="table shadow-hover doctor-list table-bordered mb-4 dataTablesCard fs-14">
              <thead>
                <tr>
                  <th>profile</th>

                  <th>Version</th>
                  <th>Identifier</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>
                    <div class="d-flex align-items-end">
                      <input type="checkbox" class="form-check-input me-2" id="customCheckBox2" required />
                      <p class="mb-0">DevSec Apache Baseline</p>
                    </div>
                  </td>

                  <td>3.34</td>
                  <td>Workstation-1/linux-baseline</td>
                  <td>
                    <a href="javascript:void(0);" class="btn btn-primary light btn-rounded btn-sm text-nowrap"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                      </svg></a>
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

<script lang="ts" setup></script>

<style></style>
