import { useEffect, useState } from 'react'
import './App.css'
import logo from '../../img/logo.jpg'
import frontGym from '../../img/Image-1-5.jpeg'
import galleryOne from '../../img/Image-1-5.jpeg'
import galleryTwo from '../../img/Image-6.jpeg'
import galleryThree from '../../img/Image-5.jpeg'
import galleryFour from '../../img/Image-2.jpeg'
import galleryFive from '../../img/image-family.jpeg'
import gallerySix from '../../img/image-girls.jpeg'
import gallerySeven from '../../img/image-dog.jpeg'
import galleryEight from '../../img/image-17.jpeg'
import galleryNine from '../../img/image-15.jpeg'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Reseñas', href: '#reseñas' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

const services = [
  {
    title: 'Presencial',
    text: 'Entrenamiento en el centro con guía directa, técnica y ambiente motivador.',
    badge: 'Fuerza + técnica',
  },
  {
    title: 'Híbrido',
    text: 'Combinación de sesiones presenciales y seguimiento online para avanzar sin perder continuidad.',
    badge: 'Flexible',
  },
  {
    title: 'Online',
    text: 'Programación a distancia para quienes necesitan entrenar desde casa con estructura y control.',
    badge: 'Desde casa',
  },
]

const steps = [
  'Nos comentas tus objetivos y disponibilidad.',
  'Te contactamos por WhatsApp o llamada para valorar tu caso.',
  'Diseñamos el plan perfecto para que empieces con claridad.',
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
  { src: galleryFive, alt: 'Comunidad de entrenamiento' },
  { src: gallerySix, alt: 'Clases y entrenamiento' },
  { src: gallerySeven, alt: 'Ambiente motivador del centro' },
  { src: galleryEight, alt: 'Entrenamiento de alta intensidad' },
  { src: galleryNine, alt: 'Espacio del gimnasio' },
]

const mapsUrl = 'https://www.google.com/maps/place/Nieto+Hybrid+Training+Lab/@39.6160793,2.7632758,17z/data=!3m1!4b1!4m6!3m5!1s0x129795b3d18ff7bb:0xcddefd36e0171933!8m2!3d39.6160752!4d2.7658507!16s%2Fg%2F11nv9p9_98?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D'
const whatsappLink = 'https://wa.me/34601533539'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)

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

  const visibleReviews = [...reviews.slice(reviewIndex, reviewIndex + 5), ...reviews.slice(0, Math.max(0, reviewIndex + 5 - reviews.length))]

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Nieto Hybrid Training Lab home">
            <img src={logo} alt="Nieto Hybrid Training Lab" />
            <span className="brand-text">
              <strong>Nieto Hybrid</strong>
              <em>Training Lab</em>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Menú principal">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary desktop-only" href={whatsappLink} target="_blank" rel="noreferrer">
              Pedir cita
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

              <div className="hero-actions">
                <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
                <a className="btn btn-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
                  Ver ubicación
                </a>
              </div>

              <ul className="hero-points" aria-label="Atributos del gimnasio">
                <li>Fuerza</li>
                <li>Rendimiento</li>
                <li>Resultado</li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="image-frame">
                <img src={frontGym} alt="Vista exterior del gimnasio Nieto Hybrid Training Lab" />
                <div className="image-badge">
                  <strong>Grupos reducidos</strong>
                  <span>Trato cercano y personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            <div>
              <strong>Rendimiento</strong>
              <span>Entrenamiento orientado a resultados</span>
            </div>
            <div>
              <strong>Personalizado</strong>
              <span>Plan adaptado a ti</span>
            </div>
            <div>
              <strong>Cercanía</strong>
              <span>Atención real y cercana</span>
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
                <article key={service.title} className="service-card">
                  <span className="service-index">0{index + 1}</span>
                  <span className="service-badge">{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="section dark-panel">
          <div className="container">
            <div className="section-header section-header-light">
              <p className="eyebrow">Cómo funciona</p>
              <h2>Simple, humano y eficaz.</h2>
            </div>

            <div className="process-grid">
              {steps.map((step, index) => (
                <div key={step} className="process-card">
                  <span className="step-number">0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
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

        <section id="galeria" className="section">
          <div className="container">
            <div className="section-header">
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
                  <img src={image.src} alt={image.alt} />
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

        <section className="section cta-section">
          <div className="container cta-box">
            <div>
              <p className="eyebrow">¿Listo para empezar?</p>
              <h2>Te ayudamos a encontrar el mejor plan para ti.</h2>
            </div>

            <div className="cta-actions">
              <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
              <a className="btn btn-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
                Ver ubicación
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto" className="site-footer">
        <div className="container footer-shell">
          <div className="footer-brand">
            <img src={logo} alt="Nieto Hybrid Training Lab" className="footer-logo" />
            <p>Gimnasio y entrenamiento funcional en Marratxí, Pòrtol, para quienes quieren mejorar su fuerza, su salud y su energía.</p>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp: +34 601 53 35 39</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer">Marratxí, Pòrtol</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="footer-cta">Pedir cita</a>
          </div>

          <div className="footer-column">
            <h3>Especialidades</h3>
            <p>Entrenamiento funcional</p>
            <p>Fuerza y acondicionamiento</p>
            <p>Hyrox y resistencia</p>
            <p>Clases de grupo</p>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
