import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <h2>Eleva Fit</h2>
            <nav>
                <a className='btn btn-primary'>Bikers</a>
                <a>Remeras</a>
                <a>Tops</a>
            </nav>
        </header>
    )
}
export default Navbar