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

function App() {
  return (
    <>
      <ScrollToTop />
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


