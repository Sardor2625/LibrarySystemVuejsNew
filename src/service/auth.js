import axios from './axios'

const AuthServise = {
  register(user) {
    return axios.post('/users', user)
  },
  login(user){
    return axios.post('/Login/Login', 
        user,
            {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        
    )
  },
    getUser(){
      let user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      return new Promise((resolve, reject) => {
          if (user != null)
              resolve(user) ;
          reject(new Error("Not Found"))
      })
      //return axios.get('/user')
    }
}

export default AuthServise