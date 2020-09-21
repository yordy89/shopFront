import axios from "axios";
import { baseUrl } from "config";
const dataInitial = {
  categories: [],
};

const ADD_CATEGORY = "ADD_CATEGORY";
const GET_CATEGORIES = "GET_CATEGORIES";
const EDIT_CATEGORY = "EDIT_CATEGORY";
const DELETE_CATEGORY = "DELETE_DEPARTMENT";

export default function categoryReducer(state = dataInitial, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
      break;
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
      break;
    case EDIT_CATEGORY:
      return { ...state, categories: action.payload };
      break;
    case DELETE_CATEGORY:
      return { ...state, categories: action.payload };
    default:
      return state;
      break;
  }
}

export const addCategory = (values) => async (dispatch, getState) => {
  try {
    const category = await axios.post(`${baseUrl}/category`, values);

    if (category) {
      /*const department = await axios.post(`${baseUrl}/department/${category.data.department}`)
        const department = await transform(category.data.department,'department',false)
        category.data.department = department.name*/
      dispatch({
        type: ADD_CATEGORY,
        payload: category.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(`${baseUrl}/categories`);
    /*const categories = result.data.map(async (c) => {
             const dep = await transform(c.department,'department',false)
             c.department = dep.name
             return c
         })*/
    if (categories) {
      dispatch({
        type: GET_CATEGORIES,
        payload: categories.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = (values, id) => async (dispatch, getState) => {
  try {
    const result = await axios.put(`${baseUrl}/category/${id}`, values);
    if (result) {
      const { categories } = getState().categories;
      const category = categories.map((d) => {
        if (d._id === id) {
          d.name = result.data.name;
          d.department = result.data.department;
        }
        return d;
      });
      dispatch({
        type: EDIT_CATEGORY,
        payload: category,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = (id) => async (dispatch, getState) => {
  try {
    const category = await axios.delete(`${baseUrl}/category/${id}`);
    if (category) {
      const { categories } = getState().categories;
      const category = categories.filter((d) => d._id !== id);
      dispatch({
        type: DELETE_CATEGORY,
        payload: category,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
