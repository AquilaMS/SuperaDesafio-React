import axios from "axios";

async function registerUser(user) {
  const data = await axios.post('http://127.0.0.1:8000/api/signup/', user)
    .then(res => {
      console.log(user)
      return res.data
    }).catch(err => {
      return err.response.data
    })
  return data
}


export { registerUser } 