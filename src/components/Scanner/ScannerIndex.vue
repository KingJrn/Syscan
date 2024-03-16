<template>
    <div>
        <div class="content-body">
            <!-- row -->
            <div class="container-fluid">
                <div class="page-titles bg-white p-3" v-if="showNodes === 'nodes' || showJobs === 'jobs'">
                    <a class="hover_scan mb-3 d-block" @click="goBack">Scan Jobs</a>
                    <h3 v-if="showJobs === 'jobs'">Scan Jobs Creation</h3>
                </div>
                <div class="form-head d-flex mb-3 mb-md-4 align-items-start" v-if="add">
                    <div class="me-auto d-none d-lg-block">
                        <a href="javascript:void();" class="btn btn-primary btn-sm btn-rounded add-staff"
                            @click="AddNodes">+ Add Nodes</a>
                        <a href="javascript:void();" class="btn btn-primary btn-sm btn-rounded add-staff ms-2"
                            @click="AddJobs">+ Add New Jobs</a>
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
                <JobNodes v-if="add" />
                <ShowNodes v-if="showNodes === 'nodes'" />
                <NewJobs v-if="showJobs === 'jobs'" />
            </div>

        </div>
    </div>
</template>

<script>
import JobNodes from "./JobNodes.vue"
import ShowNodes from "./ShowNodes.vue"
import NewJobs from "./NewJobs.vue";

export default {
    name: "Scanner",
    components: {
        JobNodes,
        ShowNodes,
        NewJobs

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
