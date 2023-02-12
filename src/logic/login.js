import axios from "axios";

async function signinUser(user) {
  const data = await axios.post('http://127.0.0.1:8000/api/get-token/', user)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      return res.data
    }).catch(err => {
      return 'Login failed. Check fields'
    })
  return data
}

export { signinUser }  