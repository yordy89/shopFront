import {blanco,sombra} from 'Assets/jss/generales'
const drawer = {
  drawer:{
      width:240,
      flexShrink:0,
  },
  drawerPaper:{
      width:240,
      backgroundColor:'rgba(0,0,0,0.50)'
  },
  contenedorTitle:{
      width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderBottom:'solid 1px white',
    padding:'1rem 0rem',
  },
  avatar:{
fontSize:'4rem'
  },
  title:{
      color:blanco,
      textShadow:sombra, 
  },
  items:{
      width:'100%',
      //backgroundColor:'red',
      color:blanco,
      fontSize:'1.5rem',
      margin:'5px 0px',
      height:'2rem',
      cursor:'pointer',
      "&:hover": {
         
      }
  },
  icon:{
      color:blanco
  }
}

export default drawer