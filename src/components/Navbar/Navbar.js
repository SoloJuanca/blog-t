import { useLocation } from 'react-router-dom'
import css from './Navbar.module.css'

const Navbar = props => {

    const location = useLocation()

    const { pathname } = location

    return (
        <nav className={css.Navbar}>
            <img src='/logo192.png' alt='logo' className={css.Navbar__logo}/>

            <div className={css.Navbar__links}>
                <a className={`${css.Navbar__links__link} ${pathname === '/' && css.Navbar__links__linkActive}`} href='/'>
                    <span>Inicio</span>
                </a>
                <a className={`${css.Navbar__links__link} ${pathname === '/catalog' && css.Navbar__links__linkActive}`} href='/catalog'>
                    <span>Servicios</span>
                </a>
                <a className={`${css.Navbar__links__link} ${pathname === '/about' && css.Navbar__links__linkActive}`} href='/about'>
                    <span>Acerca de</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar