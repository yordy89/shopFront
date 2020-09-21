import axios from "axios";
import { baseUrl } from "config";

const dataInitial = {
  products: [],
};

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export default function productoReducer(state = dataInitial, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
      break;
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
      break;
    case EDIT_PRODUCT:
      return { ...state, products: action.payload };
      break;
    case DELETE_PRODUCT:
      return { ...state, products: action.payload };
    default:
      return state;
      break;
  }
}

export const addProduct = (values) => async (dispatch, getState) => {
  try {
    const product = await axios.post(`${baseUrl}/product`, values);

    if (product) {
      dispatch({
        type: ADD_PRODUCT,
        payload: product.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const products = await axios.get(`${baseUrl}/products`);
    if (products) {
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = (values, id) => async (dispatch, getState) => {
  try {
    const product = await axios.put(`${baseUrl}/product/${id}`, values);
    if (product) {
      const { products } = getState().products;
      const producto = products.map((d) => {
        if (d._id === id) {
          d.name = product.data.name;
          d.cost = product.data.cost;
          d.department = product.data.department;
          d.category = product.data.category;
        }
        return d;
      });
      dispatch({
        type: EDIT_PRODUCT,
        payload: producto,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    const product = await axios.delete(`${baseUrl}/product/${id}`);
    if (product) {
      const { products } = getState().products;
      const product = products.filter((d) => d._id !== id);
      dispatch({
        type: DELETE_PRODUCT,
        payload: product,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
