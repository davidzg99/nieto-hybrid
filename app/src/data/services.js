import imagePresencial from '../../../img/Image-6.jpeg'
import imageHibrido from '../../../img/image-17.jpeg'
import imageOnline from '../../../img/image-family.jpeg'

export const serviceFormats = [
  {
    slug: 'presencial',
    title: 'Entrenamiento personal en grupos reducidos',
    tagline: 'Entrenamiento en el centro con guía directa, técnica y ambiente motivador.',
    shortTitle: 'Grupos reducidos',
    eyebrow: 'Entrenamiento personal en grupos reducidos',
    detailTitle: 'Entrenamiento presencial',
    image: imagePresencial,
    imageAlt: 'Entrenamiento personal en grupos reducidos',
  },
  {
    slug: 'hibrido',
    title: 'Programa Híbrido',
    tagline: 'Sesiones presenciales en el centro combinadas con seguimiento online personalizado: desde planes de nutrición para pérdida de peso hasta preparación para carreras de running e híbridas.',
    shortTitle: 'Programa Híbrido',
    eyebrow: 'Programa Híbrido',
    detailTitle: 'Entrenamiento Presencial + Seguimiento Online',
    image: imageHibrido,
    imageAlt: 'Programa Híbrido de entrenamiento',
  },
  {
    slug: 'online',
    title: 'The Hybrid Method',
    tagline: 'Método 100% a distancia con entrenamiento y nutrición personalizados. Todo centralizado. Soporte y feedback semanal de tu progresión.',
    shortTitle: 'The Hybrid Method',
    eyebrow: 'Programa Online',
    detailTitle: 'The Hybrid Method',
    image: imageOnline,
    imageAlt: 'Seguimiento online de The Hybrid Method',
  },
]

export function getFormatBySlug(slug) {
  return serviceFormats.find((item) => item.slug === slug)
}
