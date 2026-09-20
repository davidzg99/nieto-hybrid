import { Link, Navigate, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Seo from '../components/Seo'
import { specialties, getSpecialtyBySlug } from '../data/specialties'
import { serviceFormats, getFormatBySlug } from '../data/services'
import { formLink } from '../data/site'

function ServicePage() {
  const { format, specialty: specialtySlug } = useParams()
  const serviceFormat = getFormatBySlug(format)

  if (!serviceFormat) {
    return <Navigate to="/" replace />
  }

  if (!getSpecialtyBySlug(specialtySlug)) {
    return <Navigate to={`/servicios/${format}/${specialties[0].slug}`} replace />
  }

  const specialty = getSpecialtyBySlug(specialtySlug)
  const activeSection = specialty.sections[format]

  return (
    <div className="page-shell">
      <Seo
        title={`${specialty.title} | ${serviceFormat.title} | Nieto Hybrid Training Lab`}
        description={activeSection.intro}
        path={`/servicios/${format}/${specialtySlug}`}
      />
      <SiteHeader />

      <main>
        <section className="specialty-hero">
          <div className="container">
            <Link to="/#servicios" className="text-link specialty-back">
              ← Volver a servicios
            </Link>
            <p className="eyebrow">Formato</p>
            <h1>{serviceFormat.title}</h1>
            <p className="lead">{serviceFormat.tagline}</p>

            <div className="format-switch">
              {serviceFormats.map((item) => (
                <Link
                  key={item.slug}
                  to={`/servicios/${item.slug}/${specialtySlug}`}
                  className={`format-switch-item ${item.slug === format ? 'is-active' : ''}`}
                >
                  <span className="format-switch-full">{item.title}</span>
                  <span className="format-switch-short">{item.shortTitle}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container specialty-layout">
            <div className="specialty-content">
              <p className="eyebrow">{serviceFormat.eyebrow}</p>
              <h2>{serviceFormat.detailTitle}</h2>
              <p className="section-subtitle">{activeSection.intro}</p>
              <ul className="specialty-list">
                {activeSection.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a className="btn btn-primary specialty-cta" href={formLink} target="_blank" rel="noreferrer">
                Rellenar cuestionario
              </a>
              {format !== 'online' && (
                <Link className="material-service-link" to="/material">
                  Ver el material del centro
                </Link>
              )}
            </div>

            <div className="specialty-media">
              <img
                src={specialty.image}
                alt={specialty.imageAlt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ServicePage

