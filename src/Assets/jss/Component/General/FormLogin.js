import {blanco,sombra} from 'Assets/jss/generales'

const formLogin = theme => ({
    contenedorFormulario:{
        flex:2,
        width:'100%',
        height:350,
        backgroundColor:'rgba(0,0,0,0.25)',
        marginBottom:'1rem',
        border:'solid 1px black',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        [theme.breakpoints.up('md')]:{
            width:'40%',
            height:400,
            marginLeft:'auto',
            marginRight:'1rem'
        }
    },
    tituloFormulario:{
        fontSize:'2.5rem',
        color:blanco,
        textShadow:sombra,
    },
    formulario:{
        width:'90%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        
        
    },
    inputs:{
      color:blanco,
      fontSize:'1.5rem'
    },
    userBad:{
        color:'red',
        fontStyle:'italic'
    }
})

export default formLogin