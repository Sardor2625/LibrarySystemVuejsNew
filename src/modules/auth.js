// auth.js (Vuex module for authentication)

const state = {
  user: null,
  isLoggedIn: false,
};

const getters = {
  getUser: state => state.user,
  isLoggedIn: state => state.isLoggedIn,
};

const actions = {
  async loginUser({ commit }, userData) {
    try {
      // Simulating asynchronous API call for login
      // Replace this with an actual API call using authService.login(userData)
      const loggedInUser = await authService.login(userData);
      
      // On successful login, update state with user data
      commit('SET_USER', loggedInUser);
      commit('SET_LOGGED_IN', true);
      
      return loggedInUser;
    } catch (error) {
      // Handle login error (e.g., display error message)
      throw new Error('Login failed. Please check your credentials.');
    }
  },

  logoutUser({ commit }) {
    // Clear user data from state upon logout
    commit('SET_USER', null);
    commit('SET_LOGGED_IN', false);
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },

  SET_LOGGED_IN(state, value) {
    state.isLoggedIn = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
