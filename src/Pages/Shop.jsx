import React, { useEffect } from "react";
import auth from "Services/auth";
import { makeStyles } from "@material-ui/core";
import styles from "Assets/jss/Page/Shop";
import NavBar from "Component/General/NavBar";
import { useDispatch } from "react-redux";
import { getProducts } from "Redux/ProductStore";
import Products from "Component/Shop/Products";
import ShopCart from "Component/Shop/ShopCart";
import MenuLateral from "Component/General/MenuLateral";

const useStyles = makeStyles(styles);

const Shop = (props) => {
  const { history } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    auth(history);
    dispatch(getProducts());
  }, []);

  return (
    <div className={classes.contenedor}>
      <NavBar color="primary" history={history} title="Shop" />
      <MenuLateral history={history} />
      <div className={classes.contenido}>
        <div className={classes.productosContenedor}>
          <Products />
        </div>
        <div className={classes.carritoContenedor}>
          <ShopCart />
        </div>
      </div>
    </div>
  );
};

export default Shop;
