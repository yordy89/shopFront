import {blanco,sombra} from 'Assets/jss/generales'
const productItem = {
    contenedor:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.50)',
        height:150
    },
    title:{
     color:blanco,
     textShadow:sombra
    },
    subtitle:{
        fontSize: 16,
        color:blanco,
        textAlign:'left',
        fontWeight:'bold'
    },
    datos:{
        fontSize: 14,
        color:blanco,
        textAlign:'left',
        fontWeight:'bold'
    },
    buton:{
        fontSize:16,
        fontWeight:'bold'
    },
    icono:{
        marginLeft:10
    }
}

export default productItem