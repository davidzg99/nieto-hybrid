import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import EquipmentPage from './pages/EquipmentPage'
import { specialties } from './data/specialties'

function FormatIndexRedirect() {
  const { format } = useParams()
  return <Navigate to={`/servicios/${format}/${specialties[0].slug}`} replace />
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const elements = document.querySelectorAll(
      '.section-header, .service-card, .process-card, .review-card, .gallery-item, .equipment-card, .material-preview, .contact-grid, .specialty-content, .specialty-media',
    )

    document.documentElement.classList.add('motion-ready')
    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min((index % 4) * 70, 210)}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
      elements.forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/material" element={<EquipmentPage />} />
        <Route path="/servicios/:format" element={<FormatIndexRedirect />} />
        <Route path="/servicios/:format/:specialty" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App


