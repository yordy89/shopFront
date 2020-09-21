
const products = theme => ({
    contenedor:{
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap:'1rem',
        padding:'1rem',
        [theme.breakpoints.down('sm')]:{
            gridTemplateColumns: '1fr',
        }
    }
})

export default products