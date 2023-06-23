import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./Constant";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const updateProduct = (id, quantity) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { id, quantity },
  };
};
