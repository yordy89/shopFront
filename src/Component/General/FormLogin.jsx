import React, { useState } from "react";
import {
  makeStyles,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { People, Visibility, VisibilityOff } from "@material-ui/icons";
import { Formik, Form } from "formik";
import FormikControl from "Component/Formik/FormikControl";
import * as Yup from "yup";
import styles from "Assets/jss/Component/General/FormLogin";
import loginService from "Services/login";

const useStyles = makeStyles(styles);

const initialVaues = {
  usuario: "",
  password: "",
};

const validationSchema = Yup.object({
  usuario: Yup.string().required("El Usuario es Requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});
const FormLogin = (props) => {
  const { history } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [userBad, setUserBad] = useState(false);
  const classes = useStyles();

  const onSubmit = (values, onSubmitProps) => {
    loginService(values, history, setUserBad);
    onSubmitProps.resetForm();
  };
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className={classes.contenedorFormulario}>
        <h1 className={classes.tituloFormulario}>Login</h1>
        {userBad && (
          <span className={classes.userBad}>
            El usuario o la contraseña estan mal
          </span>
        )}
        <Formik
          initialValues={initialVaues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className={classes.formulario}>
                <FormikControl
                  control="inputMaterial"
                  label="Usuario"
                  name="usuario"
                  type="text"
                  className={classes.inputs}
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className={classes.inputs}>
                        <People />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormikControl
                  control="inputMaterial"
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={classes.inputs}
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className={classes.inputs}
                        onClick={handlePassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="primary"
                >
                  Login
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default FormLogin;
