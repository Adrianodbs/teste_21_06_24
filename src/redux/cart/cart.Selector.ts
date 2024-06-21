import { RootState } from "../rootReducer";

export const selectProductsCount = (rootReducer: RootState) => {
  return rootReducer.cartReducer.products.reduce((acc, curr) => {
  
    if (curr.quantity !== undefined) {
      return acc + curr.quantity;
    }
    return acc;
  }, 0);
}

export const selectTotalPrice = (rootReducer: RootState) => {
  return rootReducer.cartReducer.products.reduce((acc, curr) => {

    if (curr.quantity !== undefined) {
      return acc + curr.price * curr.quantity;
    }
    return acc;
  }, 0);
}