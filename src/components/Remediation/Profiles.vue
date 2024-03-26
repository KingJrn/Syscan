<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body p-0">
                    <div class="table-responsive position-relative">
                        <!-- scan btn for multiple select items -->
                        <transition>
                            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenter" v-if="showScanBtn">Start Remediation</button>
                        </transition>
                        <!-- Tables -->
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
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="checkbox text-end align-self-center">
                                                <div class="form-check custom-checkbox">
                                                    <input type="checkbox" class="form-check-input me-2"
                                                        id="customCheckBox2" required="" @change="toggleChecks(1)" />
                                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">Node 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">SSH
                                    </td>
                                    <td data-bs-toggle="modal" data-bs-target="#exampleModal">22 Mar 2021</td>
                                    <td class="py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <span class="badge badge-warning badge-sm light"
                                            v-if="status === 'pass'">Processing <i
                                                class="bi bi-arrow-clockwise"></i></span>
                                        <span class="badge badge-primary badge-sm light"
                                            v-if="status === 'passs'">Completed <i class="bi bi-check2"></i></span>
                                        <span class="badge badge-danger badge-sm light"
                                            v-if="status === 'failed'">Failed <i class="bi bi-slash-circle"></i></span>
                                    </td>
                                    <td data-bs-toggle="modal" data-bs-target="#exampleModal">Profile</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="checkbox text-end align-self-center">
                                                <div class="form-check custom-checkbox">
                                                    <input type="checkbox" class="form-check-input me-2"
                                                        id="customCheckBox2" required="" @change="toggleChecks(2)" />
                                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">Node 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">SSH
                                    </td>
                                    <td data-bs-toggle="modal" data-bs-target="#exampleModal">22 Mar 2021</td>
                                    <td class="py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <span class="badge badge-warning badge-sm light"
                                            v-if="status === 'pass'">Processing <i
                                                class="bi bi-arrow-clockwise"></i></span>
                                        <span class="badge badge-primary badge-sm light"
                                            v-if="status === 'passs'">Completed <i class="bi bi-check2"></i></span>
                                        <span class="badge badge-danger badge-sm light"
                                            v-if="status === 'failed'">Failed <i class="bi bi-slash-circle"></i></span>
                                    </td>
                                    <td data-bs-toggle="modal" data-bs-target="#exampleModal">Profile</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="container demo">
        <div class="modal left fade" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container mt-5 sidebar_modal">
                            <h1 class="text-center">Node Details</h1>

                            <div class="row mt-4">
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">Node Name:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">Operating System:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">IP Address:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">Compliance Status:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">Security Patches:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">Software Versions:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">Node Name:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <span class="lead me-3">Node Name:</span>
                                        <strong>Details</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 m-auto">
                                <div class="form-group">
                                    <label>&nbsp;</label>
                                    <button type="button" class="btn btn-primary btn-block" @click="openSecondModal">
                                        Remediate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- multiple scan modal -->
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter">
        <div class="modal-dialog modal-dialog-centered custom-modal-width" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="table-responsive position-relative card  border-0 pb-0">
                                <div class="card-header flex-wrap border-0 pb-0">
                                    <h3 class="fs-20 mb-0 text-primary">Nodes</h3>
                                </div>
                                <!-- Tables -->
                                <table id="example5" class="table table-striped patient-list mb-4 dataTablesCard fs-14">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Platform</th>
                                            <th>Last Modified</th>
                                            <th class="">Profile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Node 1
                                            </td>

                                            <td class="text-primary">SSH
                                            </td>
                                            <td data-bs-toggle="modal">22 Mar 2021</td>
                                            <td>Profile</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Node 2
                                            </td>
                                            <td class="text-primary">SSH
                                            </td>
                                            <td data-bs-toggle="modal">22 Mar 2021</td>
                                            <td>Profile</td>
                                        </tr>


                                    </tbody>
                                </table>
                                <div class="row m-auto w-50">
                                    <button type="button" class="col btn btn-primary btn-sm me-3"><i
                                            class="fa-solid fa-square me-2"></i>Remediate</button>
                                    <button type="button" class="col btn btn-danger btn-sm"><i
                                            class="fa-solid fa-table-cells-large me-2"></i>Cancel</button>
                                </div>
                            </div>
                        </div>

                        <!-- Log -->
                        <div class="col-6">
                            <div class="card border-0 pb-0">
                                <div class="card-header flex-wrap border-0 pb-0">
                                    <h3 class="fs-20 mb-0 text-primary">Active Logs</h3>
                                </div>
                                <div class="card-body recent-patient px-0">
                                    <div id="DZ_W_Todo2" class="widget-media px-4 dz-scroll height320">
                                        <ul class="timeline">
                                            <li>
                                                <div class="timeline-panel flex-wrap">

                                                    <div class="media-body">
                                                        Node 1
                                                    </div>
                                                    <a href="javascript:void(0);" class="text-warning mt-2">Pending</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="timeline-panel flex-wrap">

                                                    <div class="media-body">
                                                        Node 2
                                                    </div>
                                                    <a href="javascript:void(0);" class="text-warning mt-2">Pending</a>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
  <!-- row -->


</template>
<script>
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
    name: "NodeList",
    data() {
        return {
            status: "pass",
            checkbox1: false,
            checkbox2: false,
            selectedOption: "",
            checkedCheckboxes: [],
        };
    },
    computed: {
        showScanBtn() {
            return this.checkedCheckboxes.length > 0;
        }
    },
    methods: {
        openSecondModal() {
            const checkboxesHtml = `
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Existing profile
                    </label>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                    <label class="form-check-label" for="flexCheckChecked">
                        Select Profile
                    </label>
                </div>
            `;

            const selectExistingHtml = this.checkbox1 ? `
                <select id="Select_Existing" class="form-select form-select-lg mb-3" aria-label="Large select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            ` : '';

            const selectNewHtml = this.checkbox2 ? `
                <select id="Select_New" class="form-select form-select-lg mb-3" aria-label="Large select example">
                    <option value="2">Two</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            ` : '';

            this.$swal({
                title: "Set Profile",
                html: `<div>${checkboxesHtml}${selectExistingHtml}${selectNewHtml}</div>`,
                showCancelButton: true,
                confirmButtonText: "Remediate",
                preConfirm: () => {
                    const selectedOption = this.checkbox1 ? document.getElementById("Select_Existing").value : document.getElementById("Select_New").value;
                    console.log("Selected Option:", selectedOption);
                },
                didOpen: () => {
                    document.getElementById("flexCheckDefault").onchange = () => this.checkboxes('checkbox1');
                    document.getElementById("flexCheckChecked").onchange = () => this.checkboxes('checkbox2');
                }
            });
        },
        checkboxes(checkbox) {
            if (checkbox === 'checkbox1') {
                this.checkbox1 = !this.checkbox1;
                this.checkbox2 = false;
            } else if (checkbox === 'checkbox2') {
                this.checkbox1 = false;
                this.checkbox2 = !this.checkbox2;
            }
            this.openSecondModal(); // Re-open the modal to reflect changes
        },
        toggleChecks(id) {
            if (this.checkedCheckboxes.includes(id)) {
                // If checkbox is already checked, remove it from the array
                this.checkedCheckboxes.splice(this.checkedCheckboxes.indexOf(id), 1);
            } else {
                // If checkbox is checked, add it to the array
                this.checkedCheckboxes.push(id);
            }
        }
    },
};
</script>
