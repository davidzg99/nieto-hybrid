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
import galleryTen from '../../img/Image-1 (1).jpeg'
import galleryEleven from '../../img/Image (1).jpeg'
import galleryTwelve from '../../img/image-12.jpeg'

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true" {...props}>
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10.5 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  )
}

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18" aria-hidden="true" {...props}>
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.902 6.484L4 29l7.72-1.876A11.94 11.94 0 0016.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.964 0-3.79-.55-5.35-1.5l-.383-.228-4.583 1.114 1.226-4.463-.25-.394A9.71 9.71 0 016.25 15c0-5.385 4.38-9.75 9.754-9.75 5.375 0 9.746 4.365 9.746 9.75s-4.371 9.75-9.746 9.75zm5.36-7.312c-.293-.147-1.734-.856-2.003-.955-.269-.099-.465-.147-.66.147-.196.293-.758.955-.93 1.15-.171.196-.343.22-.636.073-.293-.146-1.238-.456-2.358-1.454-.872-.777-1.461-1.737-1.632-2.03-.171-.293-.018-.452.129-.598.132-.132.293-.343.44-.514.146-.171.195-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.588-.904-2.176-.238-.573-.48-.495-.66-.504l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.444 0 1.44 1.05 2.834 1.196 3.03.147.196 2.067 3.157 5.008 4.427.7.302 1.246.483 1.673.618.703.224 1.343.192 1.849.117.564-.084 1.734-.708 1.98-1.392.245-.685.245-1.271.171-1.393-.073-.122-.269-.196-.562-.343z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Especialidades', href: '#especialidades' },
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

const specialties = [
  {
    title: 'Entrenamientos funcionales',
    text: 'Movilidad, fuerza, resistencia y coordinación en entrenamientos completos y variados.',
  },
  {
    title: 'Hyrox programado',
    text: 'Entrenamientos de Hyrox en el gimnasio. Técnica y preparación específica para mejorar tu rendimiento.',
  },
  {
    title: 'Hybrid WOD',
    text: 'Endurance y preparación de carreras. Sesiones diseñadas para desarrollar tu capacidad aeróbica, resistencia y rendimiento en competición.',
  },
  {
    title: 'Todos los niveles',
    text: 'Tanto si estás empezando como si quieres competir, aquí tienes tu sitio.',
  },
]

const groupBenefits = [
  {
    title: 'Grupos reducidos y atención personalizada',
    text: 'Entrena en un entorno cercano donde el entrenador puede estar más encima de ti.',
  },
  {
    title: 'Progresión real semana a semana',
    text: 'Entrenamientos planificados con una progresión estructurada para que sigas mejorando de forma constante.',
  },
  {
    title: 'Entrenamientos variados y efectivos',
    text: 'Fuerza, acondicionamiento, movilidad y más, siempre con un propósito.',
  },
  {
    title: 'Comunidad real',
    text: 'Gente comprometida, mismo objetivo y buen ambiente en cada sesión.',
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

const steps = [
  'Rellenas el cuestionario con tus objetivos y disponibilidad.',
  'Revisamos tus respuestas y te contactamos para valorar tu caso.',
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
  { src: galleryTen, alt: 'Entrenamiento en Nieto Hybrid Training Lab' },
  { src: galleryEleven, alt: 'Sesión de entrenamiento en el gimnasio' },
  { src: galleryFive, alt: 'Comunidad de entrenamiento' },
  { src: gallerySix, alt: 'Clases y entrenamiento' },
  { src: gallerySeven, alt: 'Ambiente motivador del centro' },
  { src: galleryEight, alt: 'Entrenamiento de alta intensidad' },
  { src: galleryNine, alt: 'Espacio del gimnasio' },
  { src: galleryTwelve, alt: 'Grupo de entrenamiento celebrando el entreno' },
]

const mapsUrl = 'https://www.google.com/maps/place/Nieto+Hybrid+Training+Lab/@39.6160793,2.7632758,17z/data=!3m1!4b1!4m6!3m5!1s0x129795b3d18ff7bb:0xcddefd36e0171933!8m2!3d39.6160752!4d2.7658507!16s%2Fg%2F11nv9p9_98?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D'
const formLink = 'https://succulent-nebula-1e0.notion.site/317c2dd65fbc81c18c0df788dd3ffeee?pvs=105'
const whatsappLink = 'https://wa.me/34601533539'
const instagramCenterLink = 'https://www.instagram.com/nh.traininglab'
const instagramProLink = 'https://www.instagram.com/nietohybrid'
const contactEmail = 'infonietohybrid@nietohybrid.com'

const heroImages = [
  { src: frontGym, alt: 'Vista exterior del gimnasio Nieto Hybrid Training Lab', badgeTitle: 'Grupos reducidos', badgeText: 'Trato cercano y personalizado' },
  { src: galleryFour, alt: 'Gimnasio moderno en Marratxí, Pòrtol', badgeTitle: 'Instalaciones modernas', badgeText: 'Equipamiento completo y cuidado' },
  { src: gallerySeven, alt: 'Ambiente motivador del centro', badgeTitle: 'Buen ambiente', badgeText: 'Comunidad cercana y motivadora' },
  { src: galleryNine, alt: 'Espacio del gimnasio', badgeTitle: 'Espacio amplio', badgeText: 'Todo lo necesario para entrenar' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
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
            <a className="btn btn-primary desktop-only" href={formLink} target="_blank" rel="noreferrer">
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
                <a className="btn btn-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">📍</span> Ver ubicación
                </a>
              </div>

              <ul className="hero-points" aria-label="Atributos del gimnasio">
                <li>Fuerza</li>
                <li>Resistencia</li>
                <li>Hybrid Training</li>
                <li>Comunidad</li>
              </ul>

              <p className="hero-tagline">Entrena. Evoluciona. Conquista.</p>
            </div>

            <div className="hero-visual">
              <div className="image-frame">
                <img key={heroImages[heroIndex].src} src={heroImages[heroIndex].src} alt={heroImages[heroIndex].alt} className="hero-fade" />
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

        <section id="especialidades" className="section dark-panel">
          <div className="container">
            <div className="section-header section-header-light">
              <p className="eyebrow">Especialidades</p>
              <h2>Entrenos con propósito.</h2>
              <p className="section-subtitle">Fuerza. Resistencia. Movimiento. Todo en un mismo lugar.</p>
            </div>

            <div className="quad-grid">
              {specialties.map((item, index) => (
                <div key={item.title} className="process-card">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="grupo" className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Entrenamiento en grupo</p>
              <h2>Más que entrenar juntos, progresar juntos.</h2>
            </div>

            <div className="quad-grid">
              {groupBenefits.map((item) => (
                <div key={item.title} className="process-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
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

        <section id="filosofia" className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Nuestra filosofía</p>
              <h2>No hace falta matarse en el gym.</h2>
              <p className="section-subtitle">Una planificación con cabeza te lleva más lejos.</p>
            </div>

            <div className="process-grid">
              {philosophyPoints.map((item, index) => (
                <div key={item.title} className="process-card">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <p className="philosophy-tagline">Entrena con sentido. Avanza de verdad.</p>
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

        <section className="motivation-banner">
          <div className="container">
            <p className="motivation-eyebrow">No dejes que la pereza te gane.</p>
            <h2>Disciplina hoy, resultados mañana.</h2>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-box">
            <div>
              <p className="eyebrow">¿Listo para empezar?</p>
              <h2>Te ayudamos a encontrar el mejor plan para ti.</h2>
            </div>

            <div className="cta-actions">
              <a className="btn btn-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
                <span aria-hidden="true">📍</span> Ver ubicación
              </a>
              <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                <IconWhatsApp /> Háblame
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
            <a href={mapsUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">📍</span> Marratxí, Pòrtol</a>
            <a href={instagramCenterLink} target="_blank" rel="noreferrer"><IconInstagram /> @nh.traininglab</a>
            <a href={instagramProLink} target="_blank" rel="noreferrer"><IconInstagram /> @nietohybrid</a>
            <a href={`mailto:${contactEmail}`}><span aria-hidden="true">✉️</span> {contactEmail}</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer"><IconWhatsApp /> WhatsApp: +34 601 53 35 39</a>
          </div>

          <div className="footer-column">
            <h3>Especialidades</h3>
            <p>Entrenamiento funcional</p>
            <p>Fuerza y acondicionamiento</p>
            <p>Hyrox y resistencia</p>
            <p>Clases de grupo</p>
          </div>
        </div>

        <div className="container footer-credit">
          <a href="https://ainnovar-systems.com/" target="_blank" rel="noreferrer">
            Hecho por
            <span>Ainnovar Systems</span>
            <img src="https://ainnovar-systems.com/ainnorvar_logo_sin_fondo.png" alt="Ainnovar Systems" />
          </a>
        </div>
      </footer>

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

export default App
