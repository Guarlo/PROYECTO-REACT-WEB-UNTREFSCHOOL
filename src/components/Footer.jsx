import '../assets/styles/Footer.css'
import logo from '../assets/img/logo.jpg'

export function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-links container'>
        <div className='link'>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className='link'>
          <h3>Atención al cliente</h3>
          <li><p>0800 122 0338</p></li>
          <li><p>0810 999 3728</p></li>
          <li><p>LU-VI de 09:00 a 18:00SA de 9:00 a 13:00</p></li>
        </div>
        <div className='link'>
          <h3>Venta telefónica</h3>
          <li><p>0810 333 8700</p></li>
          <li><p>LU-VI de 8:00 a 20:00SA-DO-Feriados 9:00 a 21:00</p></li>
        </div>
      </div>
    </footer>
  )
}
