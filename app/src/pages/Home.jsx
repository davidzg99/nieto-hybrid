import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ContactSection from '../components/ContactSection'
import Seo from '../components/Seo'
import { IconBolt, IconTarget, IconUsers } from '../components/icons'
import { specialties as specialtyPages } from '../data/specialties'
import { mapsUrl, formLink } from '../data/site'
import frontGym from '../assets/photos/image-1-5.webp'
import galleryOne from '../assets/photos/image-1-5.webp'
import galleryTwo from '../assets/photos/image-6.webp'
import galleryThree from '../assets/photos/image-5.webp'
import galleryFour from '../assets/photos/image-2.webp'
import galleryFive from '../assets/photos/image-family.webp'
import gallerySix from '../assets/photos/image-girls.webp'
import gallerySeven from '../assets/photos/image-dog.webp'
import galleryEight from '../assets/photos/image-17.webp'
import galleryNine from '../assets/photos/image-15.webp'
import galleryTen from '../assets/photos/image-1-01.webp'
import galleryEleven from '../assets/photos/image-01.webp'
import galleryTwelve from '../assets/photos/image-12.webp'

const services = [
  {
    slug: 'presencial',
    title: 'Entrenamiento personal en grupos reducidos',
    text: 'Entrenamiento en el centro con guía directa, técnica y ambiente motivador.',
    badge: 'Fuerza + técnica',
    image: galleryTwo,
    imageAlt: 'Entrenamiento personal en grupos reducidos',
  },
  {
    slug: 'hibrido',
    title: 'Programa Híbrido',
    text: 'Sesiones presenciales combinadas con seguimiento online personalizado: nutrición para pérdida de peso, preparación de carreras de running e híbridas y más.',
    badge: 'Flexible',
    image: galleryEight,
    imageAlt: 'Programa Híbrido de entrenamiento',
  },
  {
    slug: 'online',
    title: 'The Hybrid Method',
    text: 'Entrenamiento y nutrición 100% a distancia. Todo centralizado. Soporte y feedback semanal de tu progresión.',
    badge: 'App + seguimiento',
    image: galleryFive,
    imageAlt: 'Seguimiento online de The Hybrid Method',
  },
]

const philosophyPoints = [
  {
    title: 'Planificación inteligente',
    text: 'Entrenamientos diseñados para ti y tus objetivos. Sin improvisaciones.',
  },
  {
    title: 'Resultados reales',
    text: 'Progresión constante, medible y sostenible en el tiempo.',
  },
  {
    title: 'Entrena mejor, vive mejor',
    text: 'Más rendimiento, menos lesiones y una relación sana con el entrenamiento.',
  },
]

const reviews = [
  { name: 'Josep Sr', text: 'Me exijo con el deporte y cada vez que he terminado una clase con Marc, simplemente siento que he trabajado bien. Me gusta la NO rutina en sus clases.' },
  { name: 'Fina Mas', text: 'En cada clase se trabajan distintos ejercicios de fuerza y los adapta a mis posibilidades, Marc está atento y se hace ameno gracias al grupo.' },
  { name: 'Pedro Bonacasa', text: 'Muy buen ambiente y entrenamientos súper completos. Marc está pendiente en todo momento y adapta los ejercicios al nivel de cada uno.' },
  { name: 'Paqui Villafuerte Marin', text: 'Pues a mí nunca me ha gustado hacer ejercicio pero desde que voy a Nieto Hybrid de cada vez me gusta más.' },
  { name: 'Ángela Maura Oliver', text: 'Gracias a Marc me voy acercando más a mis objetivos. Muchas gracias crack.' },
  { name: 'Guillem Torres Pons', text: 'Llevo tiempo entrenando con Marc y no puedo estar más contento, es un gran profesional. Ambiente familiar y buen rollo.' },
  { name: 'Macarena Gonme', text: 'Muy contenta. Entrenamientos funcionales en grupos reducidos hacen que el entrenador pueda estar pendiente de todos y adaptar los ejercicios.' },
  { name: 'David Zapata Gonzalez', text: 'Tengo la suerte de tenerlo al lado de casa y la verdad que me ha venido increíble. Marc es súper buen tío y un profesional.' },
  { name: 'Antonio Giralt', text: 'Me ha hecho saber que tengo músculos que no sabía que tenía.' },
  { name: 'Leo Fp', text: 'Estoy encantada con este gimnasio. Desde el primer día me he sentido muy cómoda y bien atendida. El ambiente es estupendo.' },
  { name: 'Raquel Fernández', text: 'Muy buena experiencia. Se nota desde el primer día que hay profesionalidad y ganas de hacer las cosas bien.' },
  { name: 'María Guasch', text: 'En Nieto Hybrid Training Lab nos sentimos todos a gusto. Marc sabe adaptar los ejercicios a nuestras posibilidades y hacernos sentir capaces.' },
  { name: 'Marian Caravaca', text: 'Se entrena bien, se suda lo suyo y, lo mejor, ¡hasta te lo pasas bien!' },
  { name: 'Patricia Gomila Perete', text: 'Un espacio donde hacer deporte increíble. Marc es súper atento, el local tiene mucha variedad de material y los horarios son muy cómodos.' },
  { name: 'Yolanda Roldan Borras', text: 'Encantada. Desde el primer día me he sentido muy bien acogida y sobre todo acompañada y motivada.' },
  { name: 'Carmen Sánchez', text: 'He empezado hace un mes y estoy encantadísima, gran profesional.' },
  { name: 'Antònia Vicens Mas', text: 'Valoro mucho este gimnasio. Desde el principio, el entrenador Marc me ha ayudado mucho a mejorar y conseguir mis objetivos.' },
  { name: 'María José Antich', text: 'Si te gusta el deporte y hacerlo con seriedad, este es el mejor lugar. Entrenos adaptados a cada persona, muy buen ambiente.' },
  { name: 'Yoaida Navarroperez', text: 'Encontré un espacio donde entrenar a mi medida. Aunque los entrenamientos son grupales, se adaptan de manera individual. Marc un 10.' },
  { name: 'Mari Carmen Lara Céspedes', text: 'Gimnasio muy completo. Ejercicios funcionales, clases enfocadas a hyrox y cardio. Entrenador preparado, atento y majo.' },
  { name: 'Miquel Ramis', text: 'Llevo un tiempo viniendo y la verdad que estoy muy contento. Hay muy buen ambiente, el gimnasio está muy bien equipado y siempre entreno a gusto.' },
]

const galleryImages = [
  { src: galleryOne, alt: 'Instalaciones del gimnasio Nieto Hybrid' },
  { src: galleryTwo, alt: 'Entrenamiento colectivo' },
  { src: galleryThree, alt: 'Zona de fuerza y acondicionamiento' },
  { src: galleryFour, alt: 'Gimnasio moderno en Marratxí, Pòrtol' },
  { src: galleryTen, alt: 'Entrenamiento en Nieto Hybrid Training Lab' },
  { src: galleryEleven, alt: 'Sesión de entrenamiento en el gimnasio' },
  { src: galleryFive, alt: 'Comunidad de entrenamiento' },
  { src: gallerySix, alt: 'Clases y entrenamiento' },
  { src: gallerySeven, alt: 'Ambiente motivador del centro' },
  { src: galleryEight, alt: 'Entrenamiento de alta intensidad' },
  { src: galleryNine, alt: 'Espacio del gimnasio' },
  { src: galleryTwelve, alt: 'Grupo de entrenamiento celebrando el entreno' },
]

const heroImages = [
  { src: galleryNine, alt: 'Grupo entrenando junto en Nieto Hybrid Training Lab', badgeTitle: 'Comunidad real', badgeText: 'Gente comprometida, mismo objetivo' },
  { src: frontGym, alt: 'Vista exterior del gimnasio Nieto Hybrid Training Lab', badgeTitle: 'Grupos reducidos', badgeText: 'Trato cercano y personalizado' },
  { src: galleryTwelve, alt: 'Grupo de entrenamiento celebrando el entreno', badgeTitle: 'Buen ambiente', badgeText: 'Comunidad cercana y motivadora' },
  { src: gallerySeven, alt: 'Ambiente motivador del centro', badgeTitle: 'Ambiente motivador', badgeText: 'Todo lo necesario para entrenar' },
]

function Home() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setReviewIndex((current) => (current + 5) % reviews.length)
          return 10
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(heroTimer)
  }, [])

  const visibleReviews = [...reviews.slice(reviewIndex, reviewIndex + 5), ...reviews.slice(0, Math.max(0, reviewIndex + 5 - reviews.length))]

  return (
    <div className="page-shell">
      <Seo
        title="Nieto Hybrid Training Lab | Gimnasio en Marratxí, Pòrtol"
        description="Gimnasio en Marratxí, Pòrtol con entrenamiento presencial en grupos reducidos, Programa Híbrido y The Hybrid Method 100% online. Fuerza, resistencia y acompañamiento real."
        path="/"
      />
      <SiteHeader />

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-pill">
                <span className="eyebrow-dot" />
                Gimnasio en Marratxí, Pòrtol
              </p>
              <h1>
                Forja fuerza.
                <span>Vive mejor.</span>
              </h1>
              <p className="lead">
                Nieto Hybrid Training Lab combina fuerza, resistencia y acompañamiento real para ayudarte a mejorar tu cuerpo, tu salud y tu confianza.
              </p>

              <ul className="hero-points" aria-label="Atributos del gimnasio">
                <li>Fuerza</li>
                <li>Resistencia</li>
                <li>Hybrid Training</li>
              </ul>

              <p className="hero-tagline">Entrena. Evoluciona. Conquista.</p>
            </div>

            <div className="hero-visual">
              <div className="image-frame">
                <img
                  key={heroImages[heroIndex].src}
                  src={heroImages[heroIndex].src}
                  alt={heroImages[heroIndex].alt}
                  className="hero-fade"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="image-badge">
                  <strong>{heroImages[heroIndex].badgeTitle}</strong>
                  <span>{heroImages[heroIndex].badgeText}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            <div>
              <span className="stats-icon"><IconBolt /></span>
              <p>
                <strong>Rendimiento</strong>
                <span>Entrenamiento orientado a resultados</span>
              </p>
            </div>
            <div>
              <span className="stats-icon"><IconTarget /></span>
              <p>
                <strong>Personalizado</strong>
                <span>Plan adaptado a ti</span>
              </p>
            </div>
            <div>
              <span className="stats-icon"><IconUsers /></span>
              <p>
                <strong>Cercanía</strong>
                <span>Atención real y cercana</span>
              </p>
            </div>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Servicios</p>
              <h2>El formato que mejor encaja con tu vida.</h2>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  to={`/servicios/${service.slug}/${specialtyPages[0].slug}`}
                  className="service-card service-link"
                >
                  <img
                    className="service-card-image"
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="service-index">0{index + 1}</span>
                  <span className="service-badge">{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-link-label">Ver detalles <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section material-preview-section">
          <div className="container material-preview">
            <img src={galleryTwo} alt="Zona de entrenamiento y material del centro" loading="lazy" decoding="async" />
            <div>
              <p className="eyebrow">Material del centro</p>
              <h2>Un espacio preparado para cada sesión.</h2>
              <p className="section-subtitle">
                Descubre las máquinas, pesos libres y material funcional disponibles en Nieto Hybrid Training Lab.
              </p>
              <Link className="btn btn-secondary" to="/material">
                Ver máquinas y material
              </Link>
            </div>
          </div>
        </section>

        <section id="especialidades" className="section dark-panel">
          <div className="container">
            <div className="section-header section-header-light">
              <p className="eyebrow">Especialidades</p>
              <h2>Entrenos con propósito.</h2>
              <p className="section-subtitle">Fuerza. Resistencia. Movimiento. Todo en un mismo lugar.</p>
            </div>

            <div className="quad-grid">
              {specialtyPages.map((item, index) => (
                <article key={item.slug} className="process-card">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="filosofia" className="section dark-panel">
          <div className="container specialty-layout">
            <div className="specialty-content">
              <p className="eyebrow">Entrena con sentido. Avanza de verdad.</p>
              <h2>No hace falta matarse en el gym.</h2>
              <p className="section-subtitle">Una planificación con cabeza te lleva más lejos.</p>

              <ul className="specialty-list">
                {philosophyPoints.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="specialty-media">
              <img
                src={gallerySix}
                alt="Grupo entrenando en Nieto Hybrid Training Lab"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section id="reseñas" className="section">
          <div className="container">
            <div className="section-header split-header">
              <div>
                <p className="eyebrow">Reseñas</p>
                <h2>La confianza se construye con resultados reales.</h2>
              </div>
              <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">
                Ver opiniones en Google Maps
              </a>
            </div>

            <div className="review-header-row">
              <span className="review-timer">Próxima actualización en {timeLeft}s</span>
            </div>

            <div className="review-carousel" aria-live="polite">
              {visibleReviews.map((review, index) => (
                <article key={`${review.name}-${index}`} className="review-card">
                  <div className="stars" aria-label="5 estrellas">★★★★★</div>
                  <p>“{review.text}”</p>
                  <strong>{review.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="section dark-panel">
          <div className="container">
            <div className="section-header section-header-light">
              <p className="eyebrow">Galería</p>
              <h2>Más que un gimnasio: un espacio para entrenar y crecer.</h2>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image.alt}-${index}`}
                  type="button"
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Ver imagen: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
            <button
              type="button"
              className="lightbox-close"
              aria-label="Cerrar imagen"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        )}

        <section className="motivation-banner">
          <div className="container">
            <p className="motivation-eyebrow">No dejes que la pereza te gane.</p>
            <h2>Disciplina hoy, resultados mañana.</h2>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />

      <a
        className="contact-float"
        href={formLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Rellenar cuestionario de contacto"
      >
        <span aria-hidden="true">📝</span> Quiero información
      </a>
    </div>
  )
}

export default Home
