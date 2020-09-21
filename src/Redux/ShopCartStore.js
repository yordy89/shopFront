const dataInitial = {
  shops: [],
};

const ADD_CART = "ADD_CART";
const UPDATE_CART = "UPDATE_CART";
const DELETE_CART = "DELETE_CART";

export default function shopReducer(state = dataInitial, action) {
  switch (action.type) {
    case ADD_CART:
      return { ...state, shops: [...state.shops, action.payload] };
      break;
    case UPDATE_CART:
      return { ...state, shops: action.payload };
      break;
    case DELETE_CART:
      return { ...state, shops: action.payload };
    default:
      return state;
      break;
  }
}

export const addProductCart = (prod) => (dispatch, getState) => {
  const shops = getState().shops;
  const product = shops.shops.filter((p) => p.name === prod.name);
  if (product.length > 0) {
    const products = shops.shops.map((p) => {
      if (p.name === prod.name) {
        p.cantidad++;
      }
      return p;
    });
    dispatch({
      type: UPDATE_CART,
      payload: products,
    });
  } else {
    prod.cantidad = 1;
    dispatch({
      type: ADD_CART,
      payload: prod,
    });
  }
};

export const deleteProductCart = (name) => (dispatch, getState) => {
  const shops = getState().shops;
  const producto = shops.shops.filter((p) => p.name !== name);
  dispatch({
    type: DELETE_CART,
    payload: producto,
  });
};
