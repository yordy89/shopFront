import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import {
  getDepartments,
  addDepartment,
  editDepartment,
  deleteDepartment,
} from "Redux/DepartmentStore";
import Tabla from "Component/General/Tabla";
import styles from "Assets/jss/Component/Admin/Opciones";
import * as Yup from "yup";
import FormAdd from "Component/General/FormAdd";

const useStyles = makeStyles(styles);

const columns = [
  { id: "name", label: "Departamento", minWidth: 50 },
  { id: "acciones", label: "Acciones", minWidth: 50 },
];

const initialValues = {
  name: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("El departamento es requerido"),
});

const opciones = [
  {
    control: "inputMaterial",
    name: "name",
    label: "Departamento",
    type: "text",
  },
];
const Department = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rows = useSelector((store) => store.departments.departments);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  const onSubmit = (values, onSubmitProps) => {
    edit
      ? dispatch(editDepartment(values, id))
      : dispatch(addDepartment(values));
    initialValues.name = "";
    setEdit(false);
    onSubmitProps.resetForm();
  };

  const handleEdit = (id) => {
    const department = rows.filter((r) => r._id === id);
    if (department) {
      initialValues.name = department[0].name;
      setId(id);
      setEdit(true);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteDepartment(id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.tableContainer}>
        <Tabla
          columns={columns}
          rows={rows}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <div className={classes.formContainer}>
        <FormAdd
          opciones={opciones}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          title={edit ? "Editar Departamento" : "Agregar Departamento"}
          buton={edit ? "Editar" : "Agregar"}
        />
      </div>
    </div>
  );
};

export default Department;
