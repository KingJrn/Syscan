<template>
    <!-- Nav tabs -->
    <!--Assessment Node -->
    <div class="col-xl-12">
        <div class="pt-4">
            <div class="col-xl-6 col-lg-6">
                <div class="row">
                    <div class="col-xl-4 mb-3">
                        <div class="example">
                            <p class="mb-1">Filter By</p>
                            <input class="form-control input-daterange-datepicker form-control-sm" type="date"
                                name="daterange" value="01/01/2015 - 01/31/2015" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-head d-flex mb-3 mb-md-4 align-items-start">
                <div class="me-auto d-none d-lg-block">
                    <a href="" class="btn btn-primary btn-sm rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                            class="bi bi-download me-2" viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>Download</a>
                </div>

                <div class="input-group search-area ms-auto d-inline-flex me-3">
                    <input type="search" class="form-control form-control-sm " placeholder="Search here" />
                </div>
            </div>
            <div class="card">
                <div class="card-body" v-if="node">
                    <div class="rounded-circle bg-body-secondary d-flex justify-content-center align-items-center m-auto mb-3"
                        style="width: 80px; height: 80px">
                        <div
                            class="rounded-circle bg-primary w-75 h-75 d-flex justify-content-evenly align-items-center">
                            <div
                                class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center">
                            </div>
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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-primary">04-023-2024</td>
                                    <td class="text-primary">Infinix-234</td>
                                    <td>33%</td>
                                    <td>linux-kernel</td>
                                    <td>No</td>
                                    <td>
                                        <RouterLink to="node-report" class="map-button bg-primary">VIEW</RouterLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-primary">04-023-2024</td>
                                    <td class="text-primary">Infinix-234</td>
                                    <td>33%</td>
                                    <td>linux-kernel</td>
                                    <td>No</td>
                                    <td>
                                        <RouterLink to="node-report" class="map-button bg-primary">VIEW</RouterLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer text-body-secondary">Global Compliance: <strong>100</strong></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Remediate",
    components: {
    },
    data() {
        return {
        }
    },
    methods: {

    },
}
</script>