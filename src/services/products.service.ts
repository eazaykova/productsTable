import axios from "axios";

export default class ProductsService {
  static async getAll(limit: number, page: number) {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${
        (page - 1) * limit
      }&select=id,title,description,price,rating,stock,brand,category,images`
    );
    return response;
  }
}
