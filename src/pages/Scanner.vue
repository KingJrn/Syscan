<template>
    <div>
        <Sidebar />
        <ScannerIndex />
    </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import ScannerIndex from "@/components/Scanner/ScannerIndex.vue";

export default {
    name: "Scanner",
    components: {
        Sidebar,
        ScannerIndex,
    },
}
</script>

<style></style>