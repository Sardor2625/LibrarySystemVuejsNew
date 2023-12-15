<template >
    <div>
        <SidebarStudent />
        <RouterView />
    </div>
</template>
<script>
import SidebarStudent from '../SidebarStudent.vue';
import { RouterView } from "vue-router"

export default {
    components: { SidebarStudent }
}
</script>
<style ></style>