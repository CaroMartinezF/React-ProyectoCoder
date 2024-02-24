import logoEleva from './assets/logoEleva.jpg'
import classes from './Logo.module.css'

const Logo = () => {
    return(
        <div>
            <a><img className= {classes.logo} src={logoEleva}/></a>
        </div>
    )
}

export default Logo