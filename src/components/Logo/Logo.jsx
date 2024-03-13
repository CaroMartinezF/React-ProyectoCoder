import logoEleva from './assets/logoEleva.jpg'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return(
        <Link to='/'> 
            <a><img className= {classes.logo} src={logoEleva}/></a>
        </Link>
    )
}

export default Logo