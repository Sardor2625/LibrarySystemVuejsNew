import {removeItem, setItem} from '../helpers/persistaneStorage'
import AuthServise from '../service/auth'
import {gettersTypes} from './types'
import router from "@/router";

const state = {
  isLoading: false,
  user: null,
  errors: null,
  isLoggedIn: null,
}

const getters = {
  [gettersTypes.currentUser]: state => {
    return state.user
  },
  [gettersTypes.isLoggedIn]: state => {
    return Boolean(state.isLoggedIn)
  },
  [gettersTypes.isAnonymous]: state => {
    return state.isLoggedIn === false
  },
}

const mutations = {
  registerStart(state) {
    state.isLoading = true
    state.user = null
    state.errors = null
    state.isLoggedIn = null
  },
  registerSuccess(state, payload) {
    state.isLoading = false
    state.user = payload.user
    state.token = payload.token
    state.isLoggedIn = true
  },
  registerFailure(state, payload) {
    state.isLoading = false
    state.errors = payload.errors
    state.isLoggedIn = false
  },
  loginStart(state) {
    state.isLoading = true
    state.user = null
    state.errors = null
    state.isLoggedIn = null
  },
  loginSuccess(state, payload) {
    state.isLoading = false
    state.user = payload
    state.isLoggedIn = true
  },
  loginFailure(state, payload) {
    state.isLoading = false
    state.errors = payload.errors
    state.isLoggedIn = false
  },
  currentUserStart(state) {
    state.isLoading = true
  },
  currentUserSuccess(state, payload) {
    state.isLoading = false
    state.user = payload
    state.isLoggedIn = true
  },
  currentUserFailure(state) {
    console.log("Fail")
    state.isLoading = false
    state.user = null
    state.isLoggedIn = false
  },
  logout(state) {
    console.log('logout')
    state.user = null
    state.isLoggedIn = false
  },
}

const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit('registerStart')
      AuthServise.register(user)
          .then(response => {
            context.commit('registerSuccess', response.data.user)
            setItem('token', response.data.user.token)
            resolve(response.data.user)
          })
          .catch(error => {
            context.commit('registerFailure', error.response.data)
            reject(error.response.data)
          })
    })
  },
  login(context, user) {
    return new Promise((resolve, reject) => {
      context.commit('loginStart')
      AuthServise.login(user)
          .then(response => {
            console.log(response.data)
            context.commit('registerSuccess', {user: response.data.user, token:response.data.token})
            localStorage.setItem("user", response.data.user)
            setItem('token', response.data.token)
            resolve(response.data.user)
          })
          .catch(error => {
            context.commit('registerFailure', error.response.data)
            reject(error.response.data)
          })
    })
  },
  getUser(context) {
    return new Promise(resolve => {
      context.commit('currentUserStart')
      AuthServise.getUser()
          .then(response => {
            console.log('current')
            console.log(response)
            context.commit('currentUserSuccess', response)
            resolve(response)
          })
          .catch(() => {
            context.commit('currentUserFailure');
             router.push({name:"login"})
            // this.$router.push({name:"login"})
          })
    })
  },
  logout(context) {
    context.commit('logout')
    removeItem('user')
    router.push({name:"login"})
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}