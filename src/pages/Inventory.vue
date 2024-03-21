<template>
    <div>
        <Sidebar />
        <NodeIndex />
    </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import NodeIndex from "@/components/Inventory/NodeIndex.vue";

export default {
    name: "Scanner",
    components: {
        Sidebar,
        NodeIndex,
    },
}
</script>

<style></style>