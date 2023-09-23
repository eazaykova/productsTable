import axios from "axios";
import { IData } from "../models/IData";

export default class ProductsService {
  static async getAll(limit: number, page: number) {
    const response = await axios<IData>({
      url: "https://dummyjson.com/products",
      method: "GET",
      params: {
        limit: limit,
        skip: (page - 1) * limit,
        select: "id,title,description,price,rating,stock,brand,category,images",
      },
    });

    return response;
  }
}
