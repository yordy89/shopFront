import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import styles from "Assets/jss/Component/Shop/ShopCart";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductCart } from "Redux/ShopCartStore";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const ShopCart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.shops.shops);

  return (
    <Paper elevation={5} className={classes.contenedor}>
      <h1 className={classes.title}>Carrito Compra</h1>

      <div className={classes.cabecera}>
        <h3>Cantidad</h3>
        <h3>Producto</h3>
        <h3>Precio</h3>
        <h3>Total</h3>
        <h3>Eliminar</h3>
      </div>
      <div className={classes.contenedorProductos}>
        {products.length > 0 ? (
          products.map((p) => {
            return (
              <>
                <div className={classes.cabecera}>
                  <h3>{p.name}</h3>
                  <h3>{p.cantidad}</h3>
                  <h3>{p.cost}</h3>
                  <h3>{p.cantidad * p.cost}</h3>
                  <h3 onClick={() => dispatch(deleteProductCart(p.name))}>
                    <Delete className={classes.icono} />
                  </h3>
                </div>
              </>
            );
          })
        ) : (
          <h2 className={classes.total}>No hay Productos</h2>
        )}
      </div>
      <h1 className={classes.total}>
        Total: $
        {products.reduce(
          (sum, produc) => sum + produc.cost * produc.cantidad,
          0
        )}
      </h1>
    </Paper>
  );
};

export default ShopCart;
