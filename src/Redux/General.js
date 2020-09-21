const dataInitial = {
  drawer: false,
};

const SET_DRAWER = "SET_DRAWER";

export default function generalReducer(state = dataInitial, action) {
  switch (action.type) {
    case SET_DRAWER:
      return { ...state, drawer: action.payload };
      break;

    default:
      return state;
      break;
  }
}

export const setDrawer = (drawer) => (dispatch, getState) => {
  try {
    console.log(drawer);
    dispatch({
      type: SET_DRAWER,
      payload: drawer,
    });
  } catch (error) {
    console.log(error);
  }
};
