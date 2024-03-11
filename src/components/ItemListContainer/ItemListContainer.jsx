import classes from './ItemListContainer.module.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer =(props)=>{
    const [products, setProducts] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunction = categoriaId ? getProductsByCategory : getProducts
        
        asyncFunction(categoriaId)
            .then(result => {
                setProducts(result)
            })
    }, [categoriaId])


    return (
        <div>
            <h1 className={classes.greeting + " " +  "bg-secondary text-light"}>{props.greeting}</h1>
                <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer