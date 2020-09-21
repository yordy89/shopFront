import React, { useEffect } from "react";
import {
  makeStyles,
  Drawer,
  Divider,
  IconButton,
  Avatar,
} from "@material-ui/core";
import styles from "Assets/jss/Component/General/Drawer";
import { Person, ExitToApp } from "@material-ui/icons";
import { setDrawer } from "Redux/General";
import { useDispatch, useSelector } from "react-redux";
import exit from "Services/exit";

const useStyles = makeStyles(styles);

const MenuLateral = (props) => {
  const classes = useStyles();
  const { opciones = [], history } = props;
  const dispatch = useDispatch();
  const drawer = useSelector((store) => store.general.drawer);

  const handleClick = (link) => {
    dispatch(setDrawer(!drawer));
    history.push(link);
  };

  const handleExit = (drawer, history) => {
    dispatch(setDrawer(!drawer));
    exit(history);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={drawer}
      onClose={() => dispatch(setDrawer(!drawer))}
    >
      <div className={classes.contenedorTitle}>
        <Avatar sizes="large">
          <Person />
        </Avatar>
        <h1 className={classes.title}>Shop</h1>
      </div>

      {opciones.length > 0 &&
        opciones.map((opcion) => {
          return (
            <div
              key={opcion.name}
              className={classes.items}
              onClick={() => handleClick(opcion.link)}
            >
              <IconButton className={classes.icon}>{opcion.icon}</IconButton>
              {opcion.name}
            </div>
          );
        })}
      {localStorage.getItem("rol") && (
        <div
          className={classes.items}
          onClick={() => handleExit(drawer, history)}
        >
          <IconButton>
            <ExitToApp className={classes.icon} />
          </IconButton>
          Exit
        </div>
      )}
    </Drawer>
  );
};

export default MenuLateral;
