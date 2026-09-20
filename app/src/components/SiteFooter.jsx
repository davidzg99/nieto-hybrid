import logo from '../assets/photos/logo.jpg'
import { IconInstagram, IconWhatsApp } from './icons'
import { mapsUrl, instagramCenterLink, instagramProLink, contactEmail, whatsappLink } from '../data/site'
import { specialties } from '../data/specialties'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <img src={logo} alt="Nieto Hybrid Training Lab" className="footer-logo" loading="lazy" decoding="async" />
          <p>Gimnasio y entrenamiento funcional en Marratxí, Pòrtol, para quienes quieren mejorar su fuerza, su salud y su energía.</p>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>
          <a href={mapsUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">📍</span> Marratxí, Pòrtol</a>
          <a href={instagramCenterLink} target="_blank" rel="noreferrer"><IconInstagram /> @nh.traininglab</a>
          <a href={instagramProLink} target="_blank" rel="noreferrer"><IconInstagram /> @nietohybrid</a>
          <a href={`mailto:${contactEmail}`}><span aria-hidden="true">✉️</span> {contactEmail}</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer"><IconWhatsApp /> WhatsApp: +34 601 53 35 39</a>
        </div>

        <div className="footer-column">
          <h3>Especialidades</h3>
          {specialties.map((specialty) => (
            <p key={specialty.slug}>{specialty.title}</p>
          ))}
        </div>
      </div>

      <div className="container footer-credit">
        <a href="https://ainnovar-systems.com/" target="_blank" rel="noreferrer">
          Hecho por
          <span>Ainnovar Systems</span>
          <img src="https://ainnovar-systems.com/ainnorvar_logo_sin_fondo.png" alt="Ainnovar Systems" />
        </a>
        <a className="footer-promo" href="https://ainnovar-systems.com/" target="_blank" rel="noreferrer">
          ¿Quieres tu página web? Pídela aquí →
        </a>
      </div>
    </footer>
  )
}

export default SiteFooter
