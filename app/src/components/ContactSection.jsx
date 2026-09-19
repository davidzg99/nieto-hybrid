import { IconInstagram, IconWhatsApp, IconMapPin } from './icons'
import { mapsUrl, mapsEmbedUrl, instagramCenterLink, instagramProLink, contactEmail, whatsappLink, formLink } from '../data/site'

function ContactSection() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Contacto</p>
          <h2>Ven a conocernos o escríbenos.</h2>
          <p className="section-subtitle">Estamos en Marratxí, Pòrtol. Encuéntranos en el mapa o contacta directamente.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <a className="contact-line" href={mapsUrl} target="_blank" rel="noreferrer">
              <IconMapPin /> Marratxí, Pòrtol
            </a>
            <a className="contact-line" href={`mailto:${contactEmail}`}>
              <span aria-hidden="true">✉️</span> {contactEmail}
            </a>
            <a className="contact-line" href={whatsappLink} target="_blank" rel="noreferrer">
              <IconWhatsApp /> WhatsApp: +34 601 53 35 39
            </a>
            <a className="contact-line" href={instagramCenterLink} target="_blank" rel="noreferrer">
              <IconInstagram /> @nh.traininglab
            </a>
            <a className="contact-line" href={instagramProLink} target="_blank" rel="noreferrer">
              <IconInstagram /> @nietohybrid
            </a>

            <div className="contact-actions">
              <a className="btn btn-primary" href={formLink} target="_blank" rel="noreferrer">
                Rellenar cuestionario
              </a>
              <a className="btn btn-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
                <span aria-hidden="true">📍</span> Ver ubicación
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Ubicación de Nieto Hybrid Training Lab"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
