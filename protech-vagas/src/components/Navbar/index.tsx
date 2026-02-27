import './style.css'
import protechLogo from '../../assets/protechlogo.png'

export function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar__container">
        <a className="navbar__brand" href="/" aria-label="Protech">
          <img src={protechLogo} alt="Logo Protech" className="navbar__logo" />
        </a>

        <nav className="navbar__menu" aria-label="Menu principal">
          <a href="#" className="navbar__link navbar__link--active">
            Início
          </a>
          <a href="#" className="navbar__link">
            Vagas
          </a>
        </nav>
      </div>
    </header>
  )
}
