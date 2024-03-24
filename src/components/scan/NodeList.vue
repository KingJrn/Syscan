<template>
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table id="example5" class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Platform</th>
                                    <th>Last Modified</th>
                                    <th class="">Status</th>
                                    <th class="">Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="checkbox text-end align-self-center">
                                                <div class="form-check custom-checkbox ">
                                                    <input type="checkbox" class="form-check-input me-2"
                                                        id="customCheckBox2" required="">
                                                    <p>Node 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="text-primary">SSH</td>
                                    <td>22 Mar 2021</td>
                                    <td class="py-2"><span class="badge badge-warning badge-sm light"
                                            v-if="status === 'pass'">Processing <i
                                                class="bi bi-arrow-clockwise"></i></span>
                                        <span class="badge badge-primary badge-sm light"
                                            v-if="status === 'passs'">Completed <i class="bi bi-check2"></i></span>
                                        <span class="badge badge-danger badge-sm light"
                                            v-if="status === 'failed'">Failed <i class="bi bi-slash-circle"></i></span>
                                    </td>
                                    <td>
                                        Profile
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container demo">

        <div class="modal left fade" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="nav flex-sm-column flex-row">
                            <a class="nav-item nav-link active" href="#">Home</a>
                            <a href="#" class="nav-item nav-link">Link</a>
                            <a href="#" class="nav-item nav-link">Link</a>
                            <a href="#" class="nav-item nav-link">Link</a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- container -->
</template>
<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
    name: "AddedCredentials",
    data() {
        return {
            status: 'pass',
        }
    }
};
</script>
