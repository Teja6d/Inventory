import axios from "axios";
export default class DisplayOfProductListApi {

    
  static getListOfAllProducts() {
      const port = process.env.PORT || 4000;
    return  axios
      .get(`http://localhost:${port}/products`)
      .then((response) => response.data )
      .catch((error) => console.log(error));
  }

  static postProductDetails(data) {
    const port = process.env.PORT || 4000;
   return  axios
      .post(`http://localhost:${port}/products`, data)
      .then((response) => {return response.data})
      .catch((error) => console.log(error));
  }

  static deleteProduct(id){
    const port = process.env.PORT || 4000;
    return axios.delete(`http://localhost:${port}/products/${id}`).then(response=>response.data);
  }
}



