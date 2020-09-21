import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "Assets/jss/Page/Home";
import NavBar from "Component/General/NavBar";
import MenuLateral from "Component/General/MenuLateral";
import { PersonAdd, Person } from "@material-ui/icons";
import { Route } from "react-router-dom";
import FormLogin from "Component/General/FormLogin";
import FormRegister from "Component/General/FormRegister";
import auth from "Services/auth";

const useStyles = makeStyles(styles);

const opciones = [
  { name: "Login", icon: <Person />, link: "/login" },
  { name: "Register", icon: <PersonAdd />, link: "/register" },
];

const Home = (props) => {
  const classes = useStyles();
  const { history } = props;

  useEffect(() => {
    auth(history);
  }, []);
  return (
    <div className={classes.contenedor}>
      <div className={classes.navBar}>
        <NavBar color="transparent" title="Shop" />
        <MenuLateral history={history} opciones={opciones} />
      </div>
      <div className={classes.formulario}>
        <Route path="/login" component={FormLogin} />
        <Route path="/register" component={FormRegister} />
      </div>
    </div>
  );
};

export default Home;
