<template>
    <main class="form-signin w-50 m-auto">
        <div class="d-flex login__form">
            <div class="login__left">
                <img :src="whitelogo" alt="whitelogo">
                <p class="logo__left__title">Kimyo International <br> University in Tashkent</p>
            </div>
            <div class="login__right">
                <form class="mt-1">
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <ValidationError v-if='validationErrors' :validationErrors='validationErrors' />

                    <Input :label="'Name'" type="'text'" v-model='username'/>
                    <Input :label="'Email address'" type="'email'" v-model='email'/>
                    <Input :label="'Password'" type="'password'" v-model='password'/>
                    <Button type="submit" :disabled="isLoading" @click="submitHandler">Sign in</Button>
                </form>
            </div>
        </div>
    </main>
</template>
<script>
import {mapState} from 'vuex'
import whitelogo from '../images/logo-white.png'
import ValidationError from '@/components/ValidationError.vue'
export default {
    data() {
        return {
            whitelogo,
            username: '',
            email: '',
            password: '',
        }
    },
 components: {
    ValidationError
 },
    computed: {
    ...mapState({
    isLoading: state => state.auth.isLoading,
    validationErrors: state => state.auth.errors
 }),
    },
    methods: {
        submitHandler(e) {
            e.preventDefault()
            const data = {
                username: this.username,
                email: this.email,
                password: this.password,
            }   
            this.$store
            .dispatch('register',data)
            .then(user => {
             console.log('USER', user)
             this.$router.push({name: 'home'})
            })
            .catch(err => console.log('ERROR', err))
        },
    },
}
</script>
<style>
.login__form {
    background: #FFFFFF;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.login__left {
    border-radius: 10px 0px 0px 10px;
    width: 300px;
    height: 350px;
    background-color: #4499D7;
    margin-right: 25px;
}

.login__left img {
    margin-top: 30px;
}

.logo__left__title {
    font-size: 20px;
    margin-top: 10px;
    color: #FFFFFF;
}

.login__right {
    width: 250px;
}
</style>