import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MonedaReducer from "Redux/MonedaDuck";
import generalReducer from "Redux/General";
import productReducer from "Redux/ProductStore";
import departmentReducer from "Redux/DepartmentStore";
import categoryReducer from "Redux/CategoryStore";
import shopReducer from "Redux/ShopCartStore";

const rootReducer = combineReducers({
  monedas: MonedaReducer,
  general: generalReducer,
  products: productReducer,
  departments: departmentReducer,
  categories: categoryReducer,
  shops: shopReducer,
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
