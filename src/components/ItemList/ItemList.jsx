//Componente para mostrar los datos de productos
import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return(
        <section style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>  
            {products.map (product =>{
                return <Item key={product.id} {...product}/>
            })
            }
        </section>
    )
}

export default ItemList