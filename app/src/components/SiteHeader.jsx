import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/photos/logo.jpg'
import { navLinks, formLink } from '../data/site'

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Nieto Hybrid Training Lab home">
          <img src={logo} alt="Nieto Hybrid Training Lab" />
          <span className="brand-text">
            <strong>Nieto Hybrid</strong>
            <em>Training Lab</em>
          </span>
        </Link>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Menú principal">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary desktop-only" href={formLink} target="_blank" rel="noreferrer">
            Reserva tu plaza
          </a>

          <button
            type="button"
            className={`mobile-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
