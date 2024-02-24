import imgcarrito from "./assets/carrito.png"
import classes from './CartWidget.module.css'

const CartWidget = () =>{
    return (
        <div className= {classes.divCarrito}>
            <img className= {classes.carrito} src={imgcarrito} alt="imagen carrito" />
            <p className={classes.contadorCarrito}>0</p>
        </div>
    )
}

export default CartWidget