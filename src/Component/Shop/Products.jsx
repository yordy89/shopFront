import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import styles from "Assets/jss/Component/Shop/Products";
import ProductItem from "Component/General/ProductItem";

const useStyles = makeStyles(styles);

const Products = () => {
  const products = useSelector((store) => store.products.products);
  const classes = useStyles();

  return (
    <div className={classes.contenedor}>
      {products.length > 0 &&
        products.map((producto) => <ProductItem producto={producto} />)}
    </div>
  );
};

export default Products;
