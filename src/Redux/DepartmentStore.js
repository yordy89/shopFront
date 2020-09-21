import axios from "axios";
import { baseUrl } from "config";
const dataInitial = {
  departments: [],
};

const ADD_DEPARTMENT = "ADD_DEPARTMENT";
const GET_DEPARTMENTS = "GET_DEPARTMENTS";
const EDIT_DEPARTMENT = "EDIT_DEPARTMENT";
const DELETE_DEPARTMENT = "DELETE_DEPARTMENT";

export default function departmentReducer(state = dataInitial, action) {
  switch (action.type) {
    case ADD_DEPARTMENT:
      return { ...state, departments: [...state.departments, action.payload] };
      break;
    case GET_DEPARTMENTS:
      return { ...state, departments: action.payload };
      break;
    case EDIT_DEPARTMENT:
      console.log(action.payload);
      return { ...state, departments: action.payload };
      //return null
      break;
    case DELETE_DEPARTMENT:
      return { ...state, departments: action.payload };
    default:
      return state;
      break;
  }
}

export const addDepartment = (values) => async (dispatch) => {
  try {
    const department = await axios.post(`${baseUrl}/department`, values);
    if (department) {
      dispatch({
        type: ADD_DEPARTMENT,
        payload: department.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDepartments = () => async (dispatch) => {
  try {
    const departments = await axios.get(`${baseUrl}/departments`);
    if (departments) {
      dispatch({
        type: GET_DEPARTMENTS,
        payload: departments.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editDepartment = (values, id) => async (dispatch, getState) => {
  try {
    const result = await axios.put(`${baseUrl}/department/${id}`, values);
    if (result) {
      const { departments } = getState().departments;
      const department = departments.map((d) => {
        if (d._id === id) {
          d.name = result.data.name;
        }
        return d;
      });
      dispatch({
        type: EDIT_DEPARTMENT,
        payload: department,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteDepartment = (id) => async (dispatch, getState) => {
  try {
    const department = await axios.delete(`${baseUrl}/department/${id}`);
    if (department) {
      const { departments } = getState().departments;
      const department = departments.filter((d) => d._id !== id);
      dispatch({
        type: DELETE_DEPARTMENT,
        payload: department,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
