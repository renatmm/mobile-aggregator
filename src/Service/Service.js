import axios from "axios";

const API = 'https://dummyjson.com/products/'

const config = { 
    headers: {
      'Content-Type': 'application/json',
    }
  }

export const getData = async () => {
    const response = await axios.get('https://dummyjson.com/products/', config)
    return response
}
  
export const postData = (obj) => {
    const response = axios.post('https://jsonplaceholder.typicode.com/posts', obj, config);
    return response
}