import axios from "axios";
import { baseUrl } from "config";

const dataInicial = {
  monedas: [],
};

const GET_MONEDAS = "GET_MONEDAS";
const ADD_MONEDA = "ADD_MONEDA";
const DELETE_MONEDA = "DELETE_MONEDA";

export default function monedaReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_MONEDAS:
      return { ...state, monedas: action.payload };
      break;
    case ADD_MONEDA:
      return { ...state, monedas: [...state.monedas, action.payload] };
      break;
    case DELETE_MONEDA:
      return { ...state, monedas: action.payload };
      break;
    default:
      return state;
      break;
  }
}

export const getMonedas = () => async (dispatch, getState) => {
  try {
    const monedas = await axios.get(`${baseUrl}/monedas`);
    dispatch({
      type: GET_MONEDAS,
      payload: monedas.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const agregarMoneda = (values) => async (dispatch) => {
  try {
    const moneda = await axios.post(`${baseUrl}/moneda`, values);
    dispatch({
      type: ADD_MONEDA,
      payload: moneda.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const eliminarMoneda = (id) => async (dispatch, getState) => {
  try {
    const moneda = await axios.delete(`${baseUrl}/moneda/${id}`);
    if (moneda) {
      const monedas = getState().monedas;
      const moneda = monedas.monedas.filter((m) => m._id !== id);
      dispatch({
        type: DELETE_MONEDA,
        payload: moneda,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
