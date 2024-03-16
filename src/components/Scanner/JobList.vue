<template>
  <div class="col-xl-10 col-lg-6 col-md-6 col-sm-6">
    <div class="card">
      <div class="card-body">
        <!-- Display once an item is available -->
        <div class="table-responsive">
          <table id="example5" class="table shadow-hover doctor-list table-bordered mb-4 dataTablesCard fs-14">
            <thead>
              <tr>
                <th>job</th>

                <th>nodes</th>
                <th>last scan</th>
                <th>status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>
                  linux-base-scan
                </td>

                <td>1</td>
                <td>not scanned before</td>
                <td>scheduled</td>
                <td >
                  <RouterLink to="/" class="text-primary ">Report</RouterLink>
                </td>
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
</template>