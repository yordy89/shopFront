import fondo from 'Assets/img/fondo.jpg'

const home = {
  contenedor:{
      width:window.innerWidth,
      height:window.innerHeight,
      backgroundImage:`url(${fondo})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'left',
      display:'flex',
      flexDirection:'column'
  },
  navBar:{
      flex:1
  },
  formulario:{
      flex:3,
      padding:'0rem 1rem'
  }
}

export default home