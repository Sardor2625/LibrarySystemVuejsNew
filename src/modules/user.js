// user.js (Vuex module for user-related data)

const state = {
    users: [], // Example array to hold user data
    selectedUser: null, // Example selected user data
    // Other user-related state if needed
  };
  
  const getters = {
    getUsers: state => state.users,
    getSelectedUser: state => state.selectedUser,
    // Other getters as needed
  };
  
  const actions = {
    fetchUsers({ commit }) {
      // Simulated asynchronous action (replace with actual API call)
      // Example: userService.fetchUsers().then(users => commit('SET_USERS', users));
      const users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        // ...other user data
      ];
      commit('SET_USERS', users);
    },
  
    selectUser({ commit }, user) {
      commit('SET_SELECTED_USER', user);
    },
    // Other actions as needed
  };
  
  const mutations = {
    SET_USERS(state, users) {
      state.users = users;
    },
  
    SET_SELECTED_USER(state, user) {
      state.selectedUser = user;
    },
    // Other mutations if needed
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  