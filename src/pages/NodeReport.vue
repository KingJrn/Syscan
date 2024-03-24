<template>
    <main>
        <div class="content-body" style="margin-left: 10rem;">
            <!-- row -->
            <div class="container-fluid">
                <!-- Back button -->
                <div class="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    <routerLink to="report" class="text-primary"> Back</routerLink>
                </div>

                <div class="row">

                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-xxl-12 col-md-12">
                            <div class="card">
                                <div class="card-header border-0 pb-0">
                                    <h4 class="fs-5 font-w600 m-auto">Detailed Report Table</h4>
                                    <button type="button" class="btn btn-primary btn-sm me-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                            fill="currentColor" class="bi bi-download me-2" viewBox="0 0 16 16">
                                            <path
                                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                            <path
                                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                        </svg>Download</button>
                                    <button type="button" class="btn btn-primary btn-sm ">Remediate</button>

                                </div>
                                <div class="card-body text-center">

                                    <div class="table-responsive">
                                        <table id="example5"
                                            class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                                            <thead>
                                                <tr>
                                                    <th class="text-start">Security Control</th>
                                                    <th class="text-end">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-primary text-start" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">
                                                        <div class="dropdown">
                                                            <a class=" dropdown-toggle" type="button"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                Control 1
                                                            </a>

                                                        </div>
                                                    </td>
                                                    <td class="text-end">Pass</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-xxl-6 col-md-6 ">
                            <div class="card">
                                <div class="card-header border-0 pb-0">
                                    <h4 class="fs-20 font-w600 m-auto">Node 1 Compliance Status</h4>
                                </div>
                                <div class="card-body text-center position-relative">

                                    <div class="rounded-circle bg-primary d-flex justify-content-center align-items-center m-auto"
                                        style="width: 200px; height: 200px; ">
                                        <div
                                            class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center">
                                            <h2 class="text-center text-dark ">50%</h2>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <p class="mb-2 d-flex text-dark font-w500  fs-14">Pass (60%)
                                        </p>
                                        <div class="progress mb-3" style="height:15px">
                                            <div class="progress-bar bg-primary progress-animated"
                                                style="width:85%; height:15px;" role="progressbar">
                                                <span class="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                        <p class="mb-2 d-flex text-dark font-w500  fs-14">Error (30%)
                                        </p>
                                        <div class="progress mb-3" style="height:15px">
                                            <div class="progress-bar bg-warning progress-animated"
                                                style="width:90%; height:15px;" role="progressbar">
                                                <span class="sr-only">30% Complete</span>
                                            </div>
                                        </div>
                                        <p class="mb-2 d-flex  text-dark font-w500 fs-14">Failed (10%)
                                        </p>
                                        <div class="progress" style="height:15px">
                                            <div class="progress-bar bg-danger progress-animated"
                                                style="width:65%; height:15px;" role="progressbar">
                                                <span class="sr-only">10% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Doctor</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <h1>Linux System Control Options</h1>
                        <h2>Control Methods</h2>
                        <div class="d-flex flex-column">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "NodeReport",
    data: function () {
        return {
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
        }
    }
}
</script>
<style>
#apexchartsvuechart-example {
    width: auto !important;
}
</style>
