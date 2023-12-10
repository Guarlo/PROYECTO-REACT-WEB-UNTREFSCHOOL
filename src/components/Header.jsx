import '../assets/styles/Header.css'
import logo from '../assets/img/logo.jpg'
import menu from '../assets/img/menu.png'
import { Link } from '../components/Link'

export function Header () {
  return (
    <header className='header'>
      <div className='menu container'>
        <img className='logo' src={logo} alt='logo' />
        <label for='menu'><img className='menu-icono' src={menu} alt='menu' /></label>
        <input type='checkbox' id='menu' />
        <nav className='navbar'>
          <ul className='links'>
            <Link to='/'>Seguro</Link>
            <Link to='/services'>Beneficios</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/contact'>Contacto</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
