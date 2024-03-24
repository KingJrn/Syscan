<template>
    <div class="me-auto d-lg-block">
        <div class="mb-4">
            <a href="javascript:void();" class="btn btn-danger btn-sm btn-rounded add-staff" @click="reduceStep"
                v-if="step > 1">Back</a>
            <a href="javascript:void();" class="btn btn-primary btn-sm btn-rounded add-staff ms-2" @click="changeTab"
                v-if="step < 2">Next</a>
        
        </div>
        
    </div>

    <!-- details -->

    <div class="container-fluid">
        <div class="row justify-content-between">
            <div class="bg-white p-4 rounded-2 col-xl-12">
                <!-- Step 1 -->
                <Node1 v-show="step === 1"  @increaseStep ='changeTab'/>
                <Node2 v-show="step === 2"  />
            </div>
        </div>
    </div>
</template>

<script>
import Node1 from "./Node1.vue";
import Node2 from "./Node2.vue";
export default {
    name: "ShowNodes",
    components: {
        Node1,
        Node2,
    },
    data() {
        return {
            step: 1,
    
        };
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
    },
};
</script>
