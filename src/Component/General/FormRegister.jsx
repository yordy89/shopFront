import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FormikControl from "Component/Formik/FormikControl";
import * as Yup from "yup";
import styles from "Assets/jss/Component/General/FormLogin";
import registerService from "Services/register";

const useStyles = makeStyles(styles);

const initialVaues = {
  usuario: "",
  password: "",
  nombre: "",
  apellido: "",
};

const validationSchema = Yup.object({
  usuario: Yup.string().required("El Usuario es Requerido"),
  password: Yup.string().required("La contraseña es requerida"),
  nombre: Yup.string().required("El nombre es requerdio"),
  apellido: Yup.string().required("Los apellidos son requeridos"),
});
const FormRegister = (props) => {
  const { history } = props;
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const onSubmitt = (values, onSubmitProps) => {
    registerService(values, history);
    onSubmitProps.resetForm();
  };

  return (
    <div>
      <div className={classes.contenedorFormulario}>
        <h1 className={classes.tituloFormulario}>Register</h1>

        <Formik
          initialValues={initialVaues}
          validationSchema={validationSchema}
          onSubmit={onSubmitt}
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
                />
                <FormikControl
                  control="inputMaterial"
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={classes.inputs}
                  fullWidth
                />
                <FormikControl
                  control="inputMaterial"
                  label="Nombre"
                  name="nombre"
                  type="text"
                  className={classes.inputs}
                  fullWidth
                />
                <FormikControl
                  control="inputMaterial"
                  label="Apellidos"
                  name="apellido"
                  type="text"
                  className={classes.inputs}
                  fullWidth
                />
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="primary"
                >
                  Register
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default FormRegister;
