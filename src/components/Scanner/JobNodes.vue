<template>
    <div class="custom-tab-1">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#home1"><i class="la la-home me-2"></i>Jobs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#profile1"><i class="la la-user me-2"></i>
                    Nodes</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="home1" role="tabpanel">
                <div class="pt-4">
                    <div class="col-xl-10 col-lg-6 col-md-6 col-sm-6">
                        <div class="card">
                            <div class="card-body">

                                <!-- Display once an item is available -->
                                <div class="table-responsive">
                                    <table id="example5"
                                        class="table shadow-hover doctor-list table-bordered mb-4 dataTablesCard fs-14">
                                        <thead>
                                            <tr>
                                                <th>Nodes</th>

                                                <th>Platform</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-end">
                                                        <input type="checkbox" class="form-check-input me-2"
                                                            id="customCheckBox2" required />
                                                        <p class="mb-0">agentless-54.208.221.24</p>
                                                    </div>
                                                </td>

                                                <td></td>
                                                <td>unknown</td>
                                                <td>
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-pencil-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                        </svg></span>
                                                    <span class="ms-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-trash-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                        </svg>
                                                    </span>
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
            <div class="tab-pane fade" id="profile1">
                <div class="pt-4">
                    <h4>This is profile title</h4>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                        stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                    </p>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                        stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

</script>