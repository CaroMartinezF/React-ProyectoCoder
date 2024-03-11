import classes from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, categoria, img, precio}) => {
    return(
        <article className={classes.contenedorProductos}>
            <h4>Categoria: {categoria}</h4>
            <h2>{nombre}</h2>
            <img src={img} className={classes.img}/>
            <h3>${precio}</h3>
            <Link to={`/item/${id}`} className={classes.button}>Ver detalle</Link>
        </article>
    )
}

export default Item