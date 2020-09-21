import React, { useEffect, useState } from "react";
import auth from "Services/auth";
import NavBar from "Component/General/NavBar";
import { Route } from "react-router-dom";
import Product from "Component/Admin/Product";
import Categori from "Component/Admin/Category";
import Department from "Component/Admin/Department";
import MenuLateral from "Component/General/MenuLateral";
import { useDispatch } from "react-redux";
import { getDepartments } from "Redux/DepartmentStore";
import { getCategories } from "Redux/CategoryStore";
import { Category, AddShoppingCart, Shop, sh } from "@material-ui/icons";

const actions = [
  { icon: <AddShoppingCart />, name: "Productos", link: "/admin/products" },
  { icon: <Category />, name: "Categorías", link: "/admin/categories" },
  { icon: <Shop />, name: "Departamentos", link: "/admin/department" },
];
const Admin = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    auth(history);
    dispatch(getDepartments());
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <NavBar
        color="primary"
        title="Shop Admin"
        actions={actions}
        history={history}
      />
      <MenuLateral opciones={actions} history={history} />
      <div>
        <Route path="/admin/products" component={Product} />
        <Route path="/admin/categories" component={Categori} />
        <Route path="/admin/department" component={Department} />
      </div>
    </div>
  );
};

export default Admin;
