import axios from 'axios';

const getConfig = () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      'Authorization': `Token ${token}`,
      'accept': 'application/json'
    }
  };
  return { config }
}


const getAllProducts = async () => {
  const config = getConfig().config
  const data = await axios.get('http://127.0.0.1:8000/api/cart/filter/name/', {}, config)
    .then(res => {
      console.log(res.data)
      return res.data
    })
  return data
}


const putToCart = async (id_product) => {
  const config = getConfig().config
  const data = await axios.post('http://127.0.0.1:8000/api/cart/', id_product, config)
    .then(res => {
      console.log(res.data)
      return res.data
    })
  return data
}


export { getAllProducts, putToCart }