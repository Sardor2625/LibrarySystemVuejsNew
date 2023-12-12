// admin.js (Vuex module for admin-related data)

const state = {
    admins: [], // Example array to hold admin data
    selectedAdmin: null, // Example selected admin data
    // Other admin-related state if needed
  };
  
  const getters = {
    getAdmins: state => state.admins,
    getSelectedAdmin: state => state.selectedAdmin,
    // Other getters as needed
  };
  
  const actions = {
    fetchAdmins({ commit }) {
      // Simulated asynchronous action (replace with actual API call)
      // Example: adminService.fetchAdmins().then(admins => commit('SET_ADMINS', admins));
      const admins = [
        { id: 1, name: 'Admin 1' },
        { id: 2, name: 'Admin 2' },
        // ...other admin data
      ];
      commit('SET_ADMINS', admins);
    },
  
    selectAdmin({ commit }, admin) {
      commit('SET_SELECTED_ADMIN', admin);
    },
    // Other actions as needed
  };
  
  const mutations = {
    SET_ADMINS(state, admins) {
      state.admins = admins;
    },
  
    SET_SELECTED_ADMIN(state, admin) {
      state.selectedAdmin = admin;
    },
    // Other mutations if needed
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  