import {blanco,sombra} from 'Assets/jss/generales'

const shopCart = theme => ({
  contenedor:{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0.50)',
      borderRadius:5
  },
  title:{
      width:'100%',
      textAlign:'center',
      padding:'1rem 0rem',
     color:blanco,
     tetxShadow:sombra,
    backgroundColor:'rgba(0,0,0,0.80)',
  },
  cabecera:{
      width:'100%',
      display:'flex',
      justifyContent:'space-around',
      color:blanco,
      marginTop:5,
      padding:'1rem 0rem',
      borderBottom:'solid 1px white',
      [theme.breakpoints.down('sm')]:{
        fontSize:14
      }
  },
  contenedorProductos:{
    width:'100%',
    maxHeight:250,
    overflowY:'scroll'
  },
  icono:{
      color:'red',
      cursor:'pointer'
  },
  total:{
      color:blanco
  }
})

export default shopCart