import { IProduct } from './../../models/product.type';
import { Storage } from "./Storage"

enum Locals {
  PRODUCTS = 'products',

}

export default class Products extends Storage<Locals,IProduct> {
  private static instance?: Products;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Products();
    }

    return this.instance;
  }

  public getProducts() {
    return this.get(Locals.PRODUCTS);
  }

  public setProducts(products: IProduct[]) {
    this.set(Locals.PRODUCTS, products);
  }


  public clear() {
    this.clearItems([Locals.PRODUCTS]);
  }

  public productsHasValue() {
    return this.hasValue(Locals.PRODUCTS);
  }
}