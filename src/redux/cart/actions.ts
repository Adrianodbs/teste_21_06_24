import { MenuItemProps } from "../../interfaces/MenuData"
import CartActionTypes from "./actionTypes"

export const addProductToCart = (payload:MenuItemProps) => {
  return{
    type: CartActionTypes.ADD_PRODUCT,
    payload
  }
}

export const increaseQuantity = (id: number) => ({
  type: CartActionTypes.INCREASE_QUANTITY,
  payload: { id }
});

export const decreaseQuantity = (id: number) => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload: { id }
});