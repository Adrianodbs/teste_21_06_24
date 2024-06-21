import { MenuItemProps } from "../../interfaces/MenuData";
import CartActionTypes from "./actionTypes"

interface ActionProps {
  type: string;
  payload?: MenuItemProps ;
}

interface CartStateProps {
  products: MenuItemProps[];
}

const initialState:CartStateProps = {
  products: [],
}

const cartReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT: {
      if (!action.payload) {
        return state; 
      }

      const isInCart = state.products.some(product => product.id === action.payload!.id);
      if (isInCart) {
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload!.id
              ? { ...product, quantity: (product.quantity || 0) + 1 }
              : product
          )
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload!, quantity: 1 }]
      };
    }

    case CartActionTypes.INCREASE_QUANTITY: {
      if (!action.payload || typeof action.payload.id !== 'number') {
        return state;
      }

      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload!.id
            ? { ...product, quantity: (product.quantity || 0) + 1 }
            : product
        )
      };
    }
    
    case CartActionTypes.DECREASE_QUANTITY: {
      if (!action.payload || typeof action.payload.id !== 'number') {
        return state;
      }

      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload!.id
            ? { ...product, quantity: (product.quantity || 0) - 1 }
            : product
        ).filter(product => (product.quantity ?? 0) > 0)
      };
    }
    
    default:
      return state;
  }
};

export default cartReducer