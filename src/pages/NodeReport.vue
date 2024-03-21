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
                        <div class="col-xl-5 col-xxl-6 col-md-6 ">
                            <div class="card">
                                <div class="card-header border-0 pb-0">
                                    <h4 class="fs-20 font-w600 m-auto">Node 1 Compliance Status</h4>
                                </div>
                                <div class="card-body text-center position-relative">
                                    <button type="button"
                                        class="btn btn-primary btn-sm position-absolute scan_btn top-0">Scan
                                        Node</button>

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
                        <div class="col-xl-5 col-xxl-6 col-md-6">
                            <div class="card">
                                <div class="card-header border-0 pb-0">
                                    <h4 class="fs-20 font-w600 m-auto">Desired Compliance Status</h4>
                                </div>
                                <div class="card-body text-center">

                                    <div class="rounded-circle bg-body-secondary  d-flex justify-content-center align-items-center m-auto"
                                        style="width: 200px; height: 200px;">
                                        <div
                                            class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center">
                                            <p class="text-center text-dark">
                                            <h2>100%</h2>
                                            </p>
                                        </div>
                                    </div>

                                    <div id="external-events" class="my-3">
                                        <p>Set Desired Compliance</p>
                                        <div class="external-event btn-primary light" data-class="bg-primary"><i
                                                class="fa fa-move"></i><span>Set 1</span></div>
                                        <div class="external-event btn-warning light" data-class="bg-warning"><i
                                                class="fa fa-move"></i> Not
                                            Set 2
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-12 col-xxl-12 col-md-12">
                        <div class="card">
                            <div class="card-header border-0 pb-0">
                                <h4 class="fs-5 font-w600 m-auto">Detailed Report Table</h4>
                                <button type="button" class="btn btn-primary btn-sm ">Remediate</button>

                            </div>
                            <div class="card-body text-center">

                                <div class="table-responsive">
                                    <table id="example5"
                                        class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                                        <thead>
                                            <tr>

                                                <th>Security Control</th>
                                                <th>Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td class="text-primary">
                                                    <div class="dropdown">
                                                        <a class=" dropdown-toggle" type="button"
                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                            Control 1
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                                            <li><a class="dropdown-item" href="#">Another action</a>
                                                            </li>
                                                            <li><a class="dropdown-item" href="#">Something else
                                                                    here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td class="">Pass</td>

                                            </tr>
                                            <tr>
                                                <td class="text-primary">
                                                    <div class="dropdown">
                                                        <a class=" dropdown-toggle" type="button"
                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                            control 2
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                                            <li><a class="dropdown-item" href="#">Another action</a>
                                                            </li>
                                                            <li><a class="dropdown-item" href="#">Something else
                                                                    here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td class="">Failed</td>

                                            </tr>
                                            <tr>
                                                <td class="text-primary">
                                                    <div class="dropdown">
                                                        <a class=" dropdown-toggle" type="button"
                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                            Control 3
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                                            <li><a class="dropdown-item" href="#">Another action</a>
                                                            </li>
                                                            <li><a class="dropdown-item" href="#">Something else
                                                                    here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td class="">Pass</td>

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
    </main>
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
