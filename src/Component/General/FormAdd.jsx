import React from "react";
import FormikControl from "Component/Formik/FormikControl";
import { Formik, Form } from "formik";
import { Button, Paper, makeStyles } from "@material-ui/core";
import styles from "Assets/jss/Component/General/Form";

const useStyles = makeStyles(styles);

const FormAdd = (props) => {
  const classes = useStyles();
  const {
    initialValues,
    validationSchema,
    onSubmit,
    opciones,
    title,
    buton,
  } = props;

  return (
    <Paper className={classes.contenedorFormulario} elevation={5}>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className={classes.formulario}>
              {opciones.map((opcion) => {
                return (
                  <>
                    <FormikControl
                      key={opcion.name}
                      control={opcion.control}
                      name={opcion.name}
                      label={opcion.label}
                      type={opcion.type}
                      options={opcion.options}
                      handleChange={opcion.handleChange}
                      fullWidth
                    />
                  </>
                );
              })}
              <Button
                variant="contained"
                fullWidth
                type="submit"
                color="primary"
              >
                {buton}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

export default FormAdd;
