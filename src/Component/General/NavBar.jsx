import React from "react";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "Assets/jss/Component/General/NavBar";
import { Link } from "react-router-dom";
import BotonFlotante from "./BotonFlotante";
import { setDrawer } from "Redux/General";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(styles);

const NavBar = (props) => {
  const classes = useStyles();
  const { color, title, actions, history = null } = props;
  const dispatch = useDispatch();
  const drawer = useSelector((store) => store.general.drawer);

  return (
    <div className={classes.root}>
      {!drawer && (
        <AppBar position="static" color={color}>
          <Toolbar>
            <Hidden smUp>
              <IconButton
                onClick={() => dispatch(setDrawer(!drawer))}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Hidden smDown>
              {localStorage.getItem("rol") ? (
                <BotonFlotante actions={actions} history={history} />
              ) : (
                <>
                  <Link to="/login">
                    <Button color="inherit" className={classes.button}>
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button color="inherit" className={classes.button}>
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </Hidden>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default NavBar;
