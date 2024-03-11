import ItemCount from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css'

const ItemDetail = ({nombre, categoria, img, precio, descripcion, stock}) => {
    return(
        <article>
            <h4>Categoria: {categoria}</h4>
            <h2>{nombre}</h2>
            <img src={img} style={{width: 100}}/>
            <h4>Descripcion: {descripcion}</h4>
            <h3>${precio}</h3>
            <ItemCount stock= {stock}/>
        </article>
    )
}

export default ItemDetail