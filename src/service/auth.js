import axios from './axios'

const AuthServise = {
  register(user) {
    return axios.post('/users', user)
  },
  login(user){
    return axios.post('/Login/Login', 
        user,
        {
          Email: "hishimovanvar@gmail.com",
          Password: "AC2449746"
        },
            {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        
    )
  },
}

export default AuthServise
