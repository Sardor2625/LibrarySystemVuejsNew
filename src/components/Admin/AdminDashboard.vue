<template >
    <div>
        <!-- <h1>Admin dashboard</h1> -->
	  <Sidebar/>
      <RouterView />

    </div>
</template>
<script>
import { Sidebar } from '@/components'
import { RouterView } from "vue-router"


export default {
  components: {Sidebar}
}
</script>
<style>
    
</style>