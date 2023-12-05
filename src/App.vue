<template >
  <div>
    <div class="">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>
<script>
import { Navbar } from '@/components'
import { RouterView } from "vue-router"

export default {
  components: { Navbar},
//   components: { Sidebar},
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

</style>