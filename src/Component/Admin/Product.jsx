import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "Assets/jss/Component/Admin/Opciones";
import Tabla from "Component/General/Tabla";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "Redux/ProductStore";
import * as Yup from "yup";
import FormAdd from "Component/General/FormAdd";

const useStyles = makeStyles(styles);

const columns = [
  { id: "name", label: "Producto", minWidth: 50 },
  { id: "cost", label: "Costo", minWidth: 50 },
  { id: "department", label: "Departamento", minWidth: 50 },
  { id: "category", label: "Categoria", minWidth: 50 },
  { id: "acciones", label: "Acciones", minWidth: 50 },
];

const initialValues = {
  name: "",
  cost: "",
  department: "",
  category: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("La categoria es requerido"),
  cost: Yup.string().required("El valor es requerido"),
  department: Yup.string().required("El departamento es requerido"),
  category: Yup.string().required("La categoria es requerida"),
});

const Product = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rows = useSelector((store) => store.products.products);
  const departments = useSelector((store) => store.departments.departments);
  const categories = useSelector((store) => store.categories.categories);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [optionsD, setOptionsD] = useState([]);
  const [optionsC, setOptionsC] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    handleOptionsD();
  }, []);

  const transformSelect = (opciones) => {
    const options = [];
    opciones &&
      opciones.forEach((o) => {
        const item = {};
        item.key = o.name;
        item.value = o._id;
        options.push(item);
      });
    return options;
  };

  const handleOptionsD = () => {
    setOptionsD(transformSelect(departments));
  };

  const onSubmit = (values, onSubmitProps) => {
    edit ? dispatch(editProduct(values, id)) : dispatch(addProduct(values));
    initialValues.name = "";
    initialValues.cost = "";
    initialValues.department = "";
    initialValues.category = "";
    setEdit(false);
    onSubmitProps.resetForm();
  };

  const handleChange = (department) => {
    const category = categories.filter((c) => c.department === department);
    setOptionsC(transformSelect(category));
  };
  const opciones = [
    { control: "inputMaterial", name: "name", label: "Producto", type: "text" },
    { control: "inputMaterial", name: "cost", label: "Costo", type: "numbre" },
    {
      control: "selectMaterial",
      name: "department",
      label: "Departamento",
      options: optionsD,
      handleChange,
    },
    {
      control: "selectMaterial",
      name: "category",
      label: "Categoria",
      options: optionsC,
    },
  ];

  const handleEdit = (id) => {
    const product = rows.filter((r) => r._id === id);
    if (product) {
      handleChange(product[0].department);
      initialValues.name = product[0].name;
      initialValues.cost = product[0].cost;
      initialValues.department = product[0].department;
      initialValues.category = product[0].category;
      setId(id);
      setEdit(true);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
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
          title={edit ? "Editar Producto" : "Agregar Producto"}
          buton={edit ? "Editar" : "Agregar"}
        />
      </div>
    </div>
  );
};

export default Product;
