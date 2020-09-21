import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {Delete, Edit} from '@material-ui/icons'
import Paper from '@material-ui/core/Paper';
import {makeStyles, IconButton} from '@material-ui/core'
import styles from 'Assets/jss/Component/General/Tabla'

const useStyles = makeStyles(styles)

const Tabla = (props) => {

    const classes = useStyles()
    const {rows, columns,handleDelete,handleEdit} = props
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <Paper elevation={5}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.header}>
            <TableRow>
                
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.header}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id==='acciones' 
                        ? <>
                        <IconButton onClick={() => handleEdit(row._id)}><Edit/></IconButton> 
                        <IconButton onClick={() => handleDelete(row._id)}><Delete /></IconButton></> 
                        : value
                        }
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            }) : 'No hay Datos para mostrar'}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    )
}
export default Tabla
