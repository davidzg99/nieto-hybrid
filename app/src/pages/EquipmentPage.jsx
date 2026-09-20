import { useEffect, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Seo from '../components/Seo'
import imageRoom from '../assets/photos/image-6.webp'
import imageRig from '../assets/photos/image-5.webp'
import imageCable from '../assets/photos/image-2.webp'
import imageDumbbells from '../assets/photos/image-1-7.webp'
import imageRowers from '../assets/photos/image-1.webp'
import imageBars from '../assets/photos/image.webp'
import imageTreadmillAndKettlebells from '../assets/photos/image-1-01.webp'

const equipment = [
  {
    category: 'Cardio y resistencia',
    title: 'Ergómetros',
    text: 'Zona de ergómetros con SkiErg, remo y Airbike para trabajar resistencia, potencia e intervalos de acondicionamiento.',
    image: imageRowers,
    alt: 'Ergómetros del centro Nieto Hybrid Training Lab',
  },
  {
    category: 'Material funcional',
    title: 'Trineo, wallballs y cajones',
    text: 'Material para empujes y arrastres, lanzamientos y trabajo pliométrico dentro de sesiones funcionales e híbridas.',
    image: imageRoom,
    alt: 'Trineo, wallballs y cajones del centro',
  },
  {
    category: 'Cardio y resistencia',
    title: 'Cinta de correr',
    text: 'Cinta de correr para trabajo de resistencia, ritmo y preparación cardiovascular.',
    image: imageTreadmillAndKettlebells,
    imagePosition: 'left center',
    alt: 'Cinta de correr del centro',
  },
  {
    category: 'Material funcional',
    title: 'Kettlebells',
    text: 'Kettlebells de diferentes pesos para balanceos, cargas, trabajo unilateral y circuitos funcionales.',
    image: imageTreadmillAndKettlebells,
    imagePosition: 'right bottom',
    alt: 'Kettlebells de diferentes pesos',
  },
  {
    category: 'Fuerza',
    title: 'Jaula y estructura multifunción',
    text: 'Estructuras con barras, soportes y anclajes para TRX y anillas, pensadas para fuerza y movimientos gimnásticos.',
    image: imageRig,
    alt: 'Estructura multifunción con barra y anillas',
  },
  {
    category: 'Fuerza',
    title: 'Poleas y banco',
    text: 'Estación de poleas y banco para realizar trabajo de fuerza con diferentes recorridos y accesorios.',
    image: imageCable,
    alt: 'Estación de poleas y banco de fuerza',
  },
  {
    category: 'Peso libre',
    title: 'Mancuernas',
    text: 'Mancuernas de diferentes cargas para ejercicios unilaterales, fuerza general y acondicionamiento.',
    image: imageDumbbells,
    alt: 'Rack de mancuernas del centro',
  },
  {
    category: 'Peso libre',
    title: 'Barras y discos',
    text: 'Barras, discos y diferentes agarres para levantamientos, trabajo de fuerza y preparación híbrida.',
    image: imageBars,
    alt: 'Barras y discos almacenados en el centro',
  },
]

function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState(null)

  useEffect(() => {
    if (!selectedEquipment) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedEquipment(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedEquipment])

  return (
    <div className="page-shell">
      <Seo
        title="Material y equipamiento del centro | Nieto Hybrid Training Lab"
        description="Ergómetros (SkiErg, remo, Airbike), cinta de correr, kettlebells, jaula con TRX y anillas, trineo de empuje, wallballs y cajones pliométricos en Nieto Hybrid Training Lab, Marratxí."
        path="/material"
      />
      <SiteHeader />

      <main>
        <section className="equipment-hero">
          <div className="container">
            <p className="eyebrow">Material del centro</p>
            <h1>Todo lo necesario para entrenar con sentido.</h1>
            <p className="lead">
              Un espacio equipado para trabajar fuerza, resistencia y rendimiento con material cuidado y bien organizado.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Equipamiento</p>
              <h2>Máquinas y material que encontrarás en Nieto Hybrid.</h2>
              <p className="section-subtitle">
                Estas son algunas de las zonas y piezas de equipamiento que aparecen en las fotos del centro.
              </p>
            </div>

            <div className="equipment-grid">
              {equipment.map((item, index) => (
                <article className="equipment-card" key={item.title}>
                  <button
                    type="button"
                    className="equipment-image-button"
                    onClick={() => setSelectedEquipment(item)}
                    aria-label={`Ampliar imagen: ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      style={{ objectPosition: item.imagePosition }}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </button>
                  <div className="equipment-card-body">
                    <p className="eyebrow">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedEquipment && (
        <div className="lightbox" onClick={() => setSelectedEquipment(null)} role="dialog" aria-modal="true" aria-label={selectedEquipment.title}>
          <button
            type="button"
            className="lightbox-close"
            aria-label="Cerrar imagen ampliada"
            onClick={() => setSelectedEquipment(null)}
          >
            ×
          </button>
          <img
            src={selectedEquipment.image}
            alt={selectedEquipment.alt}
            style={{ objectPosition: selectedEquipment.imagePosition }}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <SiteFooter />
    </div>
  )
}

export default EquipmentPage
