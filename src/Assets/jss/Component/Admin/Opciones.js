import {sombra,blanco} from 'Assets/jss/generales'
const opciones = theme => ({
   container:{
       width:window.innerWidth,
       height:window.innerHeight,
       backgorundColor:'red',
       display:'flex',
       [theme.breakpoints.down('sm')]:{
           flexDirection:'column'
       }
   },
   tableContainer:{
       flex:2,
       padding:'1rem'
   },
   formContainer:{
       flex:1,
       padding:'1rem'
   },
  
})

export default opciones