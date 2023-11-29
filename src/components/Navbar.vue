<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
    <a class="d-flex align-items-center text-dark text-decoration-none">
      <img :src="logoURL" alt="Vue" style="width: 200px; cursor:pointer;" @click="toHomeHandler" />
    </a>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <template v-if='isLoggedIn'>
        <RouterLink :to="{name: 'home'}" class="me-3 py-2 text-dark text-decoration-none"></RouterLink>
        
      </template>
      <template v-if='!isLoggedIn'>
        <a>
        <RouterLink :to="{name: 'login'}" class="me-3 py-2 text-dark text-decoration-none">Login</RouterLink>
      </a>
      <a>
        <RouterLink :to="{name: 'register'}" class="me-3 py-2 text-dark text-decoration-none">Register</RouterLink>
      </a>
      </template>
    </nav>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import logoURL from '../images/kiut_logo.png'


export default {
  data: function () {
    return {
      logoURL: logoURL
    }
  },
  computed: {
  ...mapState({
    user: state => state.auth.user,
    isLoggedIn: state => state.auth.isLoggedIn,
  }),
  },
  methods: {
    toHomeHandler() {
      return this.$router.push({name: 'home'})
    },
  },
}
</script>


<style>

</style>