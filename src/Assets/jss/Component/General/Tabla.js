
const tabla = theme => ({
    container: {
        maxHeight: 440,
        [theme.breakpoints.down('sm')]:{
        maxHeight:200
      }
      },
      header:{
        backgroundColor:'blue',
        color:'white',
        fontWeight:'bold'
      }
})

export default tabla