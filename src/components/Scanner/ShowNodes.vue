<template>
    <div class="me-auto  d-lg-block">
        <div class="mb-4">
            <a href="javascript:void();" class="btn btn-danger btn-sm btn-rounded add-staff" @click="reduceStep"
                v-if="step > 1">Back</a>
            <a href="javascript:void();" class="btn btn-primary btn-sm btn-rounded add-staff ms-2 " @click="changeTab"
                v-if="step < 3">Next</a>
            <a href="javascript:void();" class="btn btn-primary btn-sm btn-rounded add-staff ms-2 "
                v-if="step === 3">Add 1 Nodes</a>
        </div>
        <div class="bg-white p-2 rounded-2 col-xl-4 p-5 h-25 align-self-center" v-if="step > 1">
            <div class="alert alert-primary alert-dismissible fade show">

                <strong>{{ data1 }}</strong>-{{ data2 }}.

            </div>
        </div>
    </div>

    <!-- details -->

    <div class="container-fluid">
        <div class="row justify-content-between">
            <div class="bg-white p-4 rounded-2 col-xl-12">

                <!-- Step 1 -->
                <Job1 v-show="step === 1" @increase-step="changeTab" />
                <Job2 v-show="step === 2" @data1-updated="handleData1" @data2-updated="handleData2"/>
                <Job3 v-show="step === 3" />
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-danger light">Cancel</button>
                    <button type="button" class="btn btn-primary ms-3">
                        Save Credentials
                    </button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import Job1 from "./Job1.vue";
import Job2 from "./Job2.vue";
import Job3 from "./Job3.vue";
export default {
    name: "ShowNodes",
    components: {
        Job1,
        Job2,
        Job3,
    },
    data() {
        return {
            step: 1,
            data1: '',
            data2: '',
        }
    },
    methods: {
        changeTab() {
            if (this.step < 3) {
                this.step++;
            }
        },
        reduceStep() {
            if (this.step > 1) {
                this.step--;
            }
        },
        handleData1(data1){
            this.data1 = data1;
        },
        handleData2(data2){
            this.data2 = data2;
        }
    },
}   
</script>