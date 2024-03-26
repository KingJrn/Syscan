<template>
    <div>
        <div class="content-body">
            <!-- row -->
            <div class="container-fluid">

                <!-- Nav tabs -->
                <div class="default-tab">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#home">
                                Nodes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#profile">
                                Credential</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#contact"><i class="la la-phone me-2"></i>
                                Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#message"><i class="la la-envelope me-2"></i>
                                Security Profile</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="home" role="tabpanel">
                            <div class="pt-4">
                                <div class="page-titles bg-white p-3"
                                    v-if="showNodes === 'nodes' || showJobs === 'jobs'">
                                    <!-- Back button -->
                                    <div class="mb-4" @click="goBack">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                        </svg>
                                        <a href="javascript: void(0)" class="text-primary"> Back</a>
                                    </div>
                                    <h3 v-if="showJobs === 'jobs'">Add New Group</h3>
                                </div>
                                <div class="form-head d-flex mb-3 mb-md-4 align-items-start" v-if="add">
                                    <div class="me-auto d-none d-lg-block">
                                        <a href="javascript:void();"
                                            class="btn btn-primary btn-sm btn-rounded add-staff" @click="AddNodes">+ Add
                                            Nodes</a>
                                        <a href="javascript:void();"
                                            class="btn btn-primary btn-sm btn-rounded add-staff ms-2" @click="AddJobs">+
                                            Add Node Groups</a>
                                    </div>

                                    <div class="input-group search-area ms-auto d-inline-flex me-3">
                                        <input type="text" class="form-control" placeholder="Search here" />
                                        <div class="input-group-append">
                                            <button type="button" class="input-group-text">
                                                <i class="flaticon-381-search-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Job and Nodes -->
                                <NodeGroupIndex v-if="add" />
                                <AddNodeForm v-if="showNodes === 'nodes'" />
                                <NewJobs v-if="showJobs === 'jobs'" />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile">
                            <div class="pt-4">
                                <!-- Credentials -->
                                <Credentials />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact">
                            <div class="pt-4">
                                <div class=" mt-4">
                                    <h2>Project Management</h2>

                                    <!-- Add New Project Form -->
                                    <div class="card mt-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Add New Project</h5>
                                            <form>
                                                <div class="mb-3">
                                                    <label for="projectName" class="form-label">Project Name</label>
                                                    <input type="text" class="form-control" id="projectName"
                                                        placeholder="Enter project name">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="projectDescription" class="form-label">Project
                                                        Description</label>
                                                    <textarea class="form-control" id="projectDescription" rows="3"
                                                        placeholder="Enter project description"></textarea>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Add Project</button>
                                            </form>
                                        </div>
                                    </div>

                                    <!-- List of Projects -->
                                    <div class="mt-4">
                                        <h5>List of Projects</h5>
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <h6>Project 1</h6>
                                                        <p>Description of Project 1</p>
                                                    </div>
                                                    <div>
                                                        <button type="button"
                                                            class="btn btn-sm btn-info me-2">Edit</button>
                                                        <button type="button"
                                                            class="btn btn-sm btn-danger">Delete</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <!-- Add more projects as list items -->
                                        </ul>
                                    </div>

                                    <!-- Invite Someone to a Project -->
                                    <div class="card mt-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Invite Someone to a Project</h5>
                                            <form>
                                                <div class="mb-3">
                                                    <label for="inputEmail" class="form-label">Email address</label>
                                                    <input type="email" class="form-control" id="inputEmail"
                                                        placeholder="Enter email">
                                                </div>
                                                <button type="submit" class="btn btn-primary">Invite</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="message">
                            <div class="pt-4">
                                <div class="mt-4">
                                    <h2 class="mb-4">System Security Profiles</h2>
                                    <div class="row justify-content-between">
                                        <h3 class="col-md-6">Profiles List</h3>

                                        <div class="col-md-4">
                                            <!-- Search form -->
                                            <form class="mb-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control"
                                                        placeholder="Search profiles...">
                                                    <button class="btn btn-primary" type="submit">Search</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <!-- Profile list -->
                                    <div class="row col-xl-12 justify-content-between">
                                        <!-- Profile cards -->
                                        <div class="card mb-3 col-xl-5">
                                            <div class="card-body">
                                                <h5 class="card-title">Profile 1</h5>
                                                <p class="card-text">Description of Profile 1.</p>
                                            </div>
                                        </div>
                                        <div class="card mb-3 col-xl-5">
                                            <div class="card-body">
                                                <h5 class="card-title">Profile 2</h5>
                                                <p class="card-text">Description of Profile 2.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Profile list -->
                                    <div class="row col-xl-12 justify-content-between">
                                        <!-- Profile cards -->
                                        <div class="card mb-3 col-xl-5">
                                            <div class="card-body">
                                                <h5 class="card-title">Profile 1</h5>
                                                <p class="card-text">Description of Profile 1.</p>
                                            </div>
                                        </div>
                                        <div class="card mb-3 col-xl-5">
                                            <div class="card-body">
                                                <h5 class="card-title">Profile 2</h5>
                                                <p class="card-text">Description of Profile 2.</p>
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
    </div>
</template>

<script>
import NodeGroupIndex from "./NodeGroupIndex.vue"
import AddNodeForm from "./AddNodeForm.vue"
import NewJobs from "./NewJobs.vue";
import Credentials from "./Credentials.vue";
export default {
    name: "Scanner",
    components: {
        NodeGroupIndex,
        AddNodeForm,
        NewJobs,
        Credentials

    },
    data() {
        return {
            showNodes: '',
            showJobs: '',
            add: true,
        }
    },
    methods: {
        AddNodes() {
            this.add = false;
            this.showNodes = 'nodes'
        },
        goBack() {
            this.add = true;
            this.showNodes = ''
            this.showJobs = ''
        },
        AddJobs() {
            this.add = false;
            this.showNodes = ''
            this.showJobs = 'jobs'

        }
    },
}
</script>

<style></style>
