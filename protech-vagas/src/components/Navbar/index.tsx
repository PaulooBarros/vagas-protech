import { useEffect, useState } from 'react'
import protechLogo from '../../assets/protechlogo.png'
import './style.css'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header
      className={`navbar ${isScrolled || isOpen ? 'navbar--scrolled' : 'navbar--overlay'}`}
      role="banner"
    >
      <div className="navbar__container">
        <a className="navbar__brand" href="/" aria-label="Protech">
          <img src={protechLogo} alt="Logo Protech" className="navbar__logo" />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label="Abrir menu de navegacao"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <nav
          id="navbar-menu"
          className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}
          aria-label="Menu principal"
        >
          <a href="#" className="navbar__link navbar__link--active" onClick={closeMenu}>
            Inicio
          </a>
          <a href="#" className="navbar__link" onClick={closeMenu}>
            Vagas
          </a>
        </nav>
      </div>
    </header>
  )
}
