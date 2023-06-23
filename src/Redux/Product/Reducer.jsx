import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./Constant";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case UPDATE_PRODUCT:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
