export const serviceFormats = [
  {
    slug: 'presencial',
    title: 'Presencial',
    tagline: 'Entrenamiento en el centro con guía directa, técnica y ambiente motivador.',
  },
  {
    slug: 'hibrido',
    title: 'Híbrido',
    tagline: 'Combinación de sesiones presenciales y seguimiento online para avanzar sin perder continuidad.',
  },
  {
    slug: 'online',
    title: 'Online',
    tagline: 'Programación a distancia para quienes necesitan entrenar desde casa con estructura y control.',
  },
]

export function getFormatBySlug(slug) {
  return serviceFormats.find((item) => item.slug === slug)
}
