import ItemCount from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css'
import { Link } from "react-router-dom"


const ItemDetail = ({nombre, categoria, img, precio, descripcion, stock}) => {
    return(
        <article className={classes.itemDetail}>
            <Link to={`/`} className={classes.retorno}>{"Volver atrás"}</Link>
            <div>
                <img className={classes.imagen} src={img}/>
            </div>
            <div>
                <h4>{categoria}</h4>
                <h2>{nombre}</h2>
                <h4>Descripcion: {descripcion}</h4>
                <h3>${precio}</h3>
                <ItemCount stock= {stock}/>
            </div>
        </article>
    )
}

export default ItemDetail