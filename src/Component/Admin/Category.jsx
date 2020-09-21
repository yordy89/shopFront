import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import {
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
} from "Redux/CategoryStore";
import Tabla from "Component/General/Tabla";
import styles from "Assets/jss/Component/Admin/Opciones";
import * as Yup from "yup";
import FormAdd from "Component/General/FormAdd";

const useStyles = makeStyles(styles);

const columns = [
  { id: "name", label: "Categorias", minWidth: 50 },
  { id: "department", label: "Departamento", minWidth: 50 },
  { id: "acciones", label: "Acciones", minWidth: 50 },
];

const initialValues = {
  name: "",
  department: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("La categoria es requerido"),
  department: Yup.string().required("El departamento es requerido"),
});

const Category = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rows = useSelector((store) => store.categories.categories);
  const departments = useSelector((store) => store.departments.departments);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [options, setOptions] = useState([]);

  const handleOptions = () => {
    const opciones = [];
    departments.forEach((o) => {
      const item = {};
      item.key = o.name;
      item.value = o._id;
      opciones.push(item);
    });
    setOptions(opciones);
  };
  const opciones = [
    {
      control: "inputMaterial",
      name: "name",
      label: "Categoria",
      type: "text",
    },
    {
      control: "selectMaterial",
      name: "department",
      label: "Departamento",
      options: options,
    },
  ];

  useEffect(() => {
    dispatch(getCategories());
    handleOptions();
  }, []);

  const onSubmit = (values, onSubmitProps) => {
    edit ? dispatch(editCategory(values, id)) : dispatch(addCategory(values));
    initialValues.name = "";
    initialValues.department = "";
    setEdit(false);
    onSubmitProps.resetForm();
  };

  const handleEdit = (id) => {
    const category = rows.filter((r) => r._id === id);
    if (category) {
      initialValues.name = category[0].name;
      initialValues.department = category[0].department;
      setId(id);
      setEdit(true);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
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
          title={edit ? "Editar Categoria" : "Agregar Categoria"}
          buton={edit ? "Editar" : "Agregar"}
        />
      </div>
    </div>
  );
};

export default Category;
