import { IProduct } from "./IProduct";

export interface IData {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}
