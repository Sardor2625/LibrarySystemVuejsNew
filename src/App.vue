<template >
  <div>
    <div class="">
      <Navbar />
	  <Sidebar/>
      <RouterView />
    </div>
  </div>
</template>
<script>
import { Navbar } from '@/components'
import { Sidebar } from '@/components'
import { RouterView } from "vue-router"

export default {
  components: { Navbar,Sidebar}
}
</script>

<style lang="scss">

:root {
	--primary: #FFFFFF;
	--primary-alt: #FFFFFF;
	--grey: #FFFFFF;
	--dark: #4499D7;
	--dark-alt: #2970a3;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
.app {
  display: flex;
  height: 100vh; /* Ensure the app takes the full viewport height */
}

.sidebar {
  width: var(--sidebar-width);
  background-color: var(--dark);
  /* Other sidebar styles */
}

.main-content {
  flex: 1; /* Allow the content area to grow within the flex container */
  padding: 20px;
  /* Other styles for the main content area */
}

</style>