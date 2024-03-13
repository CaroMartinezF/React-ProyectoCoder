import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() =>{
        getProductById (Number(itemId))
            .then(result =>{
                setProduct(result)
            }) 
    }, [itemId])
    return(
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer