import classes from './Navbar.module.css'
/* import Button from '../Button/Button.jsx' */
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={classes.header + " " + "bg-dark"}>
            <Logo/>
            <nav>
                <Link to='/' className={classes.button}>Todos</Link>
                <Link to='/Categoria/Remeras' className={classes.button}>Remeras</Link>
                <Link to='/Categoria/Bikers'className={classes.button}>Bikers</Link>
                <Link to='/Categoria/Tops'className={classes.button}>Tops</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}
export default Navbar