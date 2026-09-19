export const serviceFormats = [
  {
    slug: 'presencial',
    title: 'Entrenamiento personal en grupos reducidos',
    tagline: 'Entrenamiento en el centro con guía directa, técnica y ambiente motivador.',
  },
  {
    slug: 'hibrido',
    title: 'Programa Híbrido',
    tagline: 'Sesiones presenciales en el centro combinadas con seguimiento online personalizado: desde planes de nutrición para pérdida de peso hasta preparación para carreras de running e híbridas.',
  },
  {
    slug: 'online',
    title: 'The Hybrid Method',
    tagline: 'Método 100% a distancia con entrenamiento y nutrición personalizados, seguimiento semanal por WhatsApp y app HARBIZ.',
  },
]

export function getFormatBySlug(slug) {
  return serviceFormats.find((item) => item.slug === slug)
}
