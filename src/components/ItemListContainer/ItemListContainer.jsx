import classes from './ItemListContainer.module.css'

const ItemListContainer =(props)=>{
    return (
        <div>
            <h1 className={classes.greeting + " " +  "bg-secondary text-light"}>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer