import {sombra,blanco} from 'Assets/jss/generales'
const navBar = theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        color:blanco,
        fontWeight:'bold',
       
      },
      title: {
        flexGrow:1,
        color:blanco,
        fontWeight:'bold',
        textShadow:sombra,
      },
      button:{
        color:blanco,
        fontWeight:'bold'
      }
})

export default navBar