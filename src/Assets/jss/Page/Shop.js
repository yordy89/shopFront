import shoop from 'Assets/img/shop.jpg'

const shop = theme => ({
  contenedor:{
      width:window.innerWidth,
      height:window.innerHeight,
      backgroundImage:`url(${shoop})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgorundPosition:'left',
      display:'flex',
      flexDirection:'column',
     
  },
  contenido:{
      width:'100%',
      height:'100%',
      display:'flex',
      paddiing:'1rem',
      [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    }
  },
  productosContenedor:{
      flex:2,
     
  },
  carritoContenedor:{
      flex:1,
      padding:'1rem'
     
  }
})

export default shop