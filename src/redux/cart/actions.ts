import CartActionTypes from "./actionTypes"

export const addProductToCart = (payload) => {
  return{
    type: CartActionTypes.ADD_PRODUCT,
    payload
  }
}