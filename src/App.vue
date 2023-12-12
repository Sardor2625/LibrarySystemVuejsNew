<template >
  <div>
    <div class="main">
      <Navbar />
      <RouterView />
    </div>
    <div>

    </div>
  </div>
</template>

<!-- Avtorizatsiyadan keyin bu logikani ishlatamiz  -->
<!-- <template>
  <div class="main-content">
    <h1>Welcome to the Home Page!</h1>
    <div v-if="userRole === 'admin'">
      <h2>Admin Content</h2> -->
      <!-- Display admin-specific content here -->
    <!-- </div>
    <div v-else>
      <h2>User Content</h2> -->
      <!-- Display user-specific content here -->
    <!-- </div>
  </div>
</template>

<script>
export default {
  props: {
    userRole: {
      type: String,
      required: true,
    },
  },
};
</script> -->


<script>
import { Navbar } from '@/components'
import { RouterView } from "vue-router"

export default {
  components: { Navbar}
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