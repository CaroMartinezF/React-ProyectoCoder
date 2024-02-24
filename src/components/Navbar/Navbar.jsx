import classes from './Navbar.module.css'
import Button from '../Button/Button.jsx'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget.jsx'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <Logo/>
            <nav>
                <Button texto= "Remeras"/>
                <Button texto= "Bickers"/>
                <Button texto= "Tops"/>
            </nav>
            <CartWidget/>
        </header>
    )
}
export default Navbar