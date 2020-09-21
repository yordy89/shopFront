import React from "react";
import { makeStyles, Button, Paper } from "@material-ui/core"
import {ShoppingCart} from '@material-ui/icons'
import styles from "Assets/jss/Component/General/ProductItem"
import {useDispatch} from 'react-redux'
import {addProductCart} from 'Redux/ShopCartStore'

const useStyles = makeStyles(styles);

const ProductItem = (props) => {
  const { producto } = props;
  const classes = useStyles();
  const dispatch = useDispatch()

  return (
    <Paper elevation={5} className={classes.contenedor}>
      <h1 className={classes.title}>{producto.name}</h1>
      <div>
        <span className={classes.subtitle}>Departamento: </span>
        <span className={classes.datos}>{producto.department}</span>
      </div>
      <div>
        <span className={classes.subtitle}>Categoria: </span>
        <span className={classes.datos}>{producto.category}</span>
      </div>

      <Button onClick={ () => dispatch(addProductCart(producto))} className={classes.buton} variant="contained" color="primary" fullWidth endIcon={<ShoppingCart className={classes.icono}/>}>
        {producto.cost} 
      </Button>
    </Paper>
  );
};

export default ProductItem;
