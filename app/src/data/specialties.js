import imgFuncional from '../assets/photos/image-1-7.webp'
import imgCarreras from '../assets/photos/image-10.webp'
import imgNutricion from '../assets/photos/image-14.webp'
import imgGrupo from '../assets/photos/image-1.webp'

export const specialties = [
  {
    slug: 'entrenamiento-funcional',
    title: 'Entrenamiento funcional',
    tagline: 'Movilidad, fuerza, resistencia y coordinación en un mismo entrenamiento.',
    summary:
      'Entrenamientos completos y variados pensados para mejorar tu cuerpo de forma global: fuerza, movilidad, resistencia y coordinación trabajadas de manera conjunta y con propósito.',
    image: imgFuncional,
    imageAlt: 'Entrenamiento funcional en Nieto Hybrid Training Lab',
    sections: {
      presencial: {
        heading: 'Entrenamiento funcional en grupos reducidos',
        intro:
          'Sesiones en el centro con el entrenador presente, corrigiendo tu técnica en directo y adaptando cada ejercicio a tu nivel.',
        bullets: [
          'Grupos reducidos con corrección técnica en tiempo real.',
          'Trabajo de fuerza, movilidad y acondicionamiento en cada sesión.',
          'Instalaciones y material totalmente acondicionados con todo lo necesario para las clases.',
          'Ambiente motivador y cercano en cada clase.',
        ],
      },
      hibrido: {
        heading: 'Programa Híbrido',
        intro:
          'Combina sesiones presenciales en el centro con programación online complementaria para no perder continuidad entre semana.',
        bullets: [
          'Sesiones presenciales para técnica y trabajo en grupo.',
          'Programación online para completar volumen desde casa.',
          'Seguimiento de tu progresión en ambos formatos.',
          'Flexibilidad para combinar según tu disponibilidad.',
        ],
      },
      online: {
        heading: 'The Hybrid Method',
        intro:
          'Plan 100% a distancia con sobrecarga progresiva durante 12 semanas, vídeos explicativos y todo centralizado. Soporte y feedback semanal de tu progresión.',
        bullets: [
          'Plan de entrenamiento adaptado a tu material y espacio disponible.',
          'Sobrecarga progresiva y ebooks exclusivos de entrenamiento y hábitos saludables.',
          'Todo centralizado. Soporte y feedback semanal de tu progresión.',
          'Progresión estructurada sin necesidad de venir al centro.',
        ],
      },
    },
  },
  {
    slug: 'carreras-hibridas',
    title: 'Carreras híbridas',
    tagline: 'Endurance y preparación de carreras con propósito competitivo.',
    summary:
      'Sesiones de Hybrid WOD diseñadas para desarrollar tu capacidad aeróbica, resistencia y rendimiento de cara a carreras y pruebas híbridas.',
    image: imgCarreras,
    imageAlt: 'Preparación de carreras híbridas en Nieto Hybrid Training Lab',
    sections: {
      presencial: {
        heading: 'Carreras híbridas en grupos reducidos',
        intro:
          'Entrenamientos de Hybrid WOD en el centro, combinando carrera, fuerza y acondicionamiento bajo la supervisión del entrenador.',
        bullets: [
          'Sesiones combinando carrera, fuerza y acondicionamiento.',
          'Trabajo específico de resistencia aeróbica y anaeróbica.',
          'Corrección técnica en directo durante cada sesión.',
          'Preparación orientada a carreras y pruebas híbridas.',
        ],
      },
      hibrido: {
        heading: 'Programa Híbrido',
        intro:
          'Sesiones presenciales de calidad en el centro combinadas con rodajes y series programadas para hacer por tu cuenta.',
        bullets: [
          'Sesiones presenciales de fuerza y trabajo de series.',
          'Rodajes y sesiones de carrera programadas para completar por libre.',
          'Ajuste de volumen e intensidad según tu progresión.',
          'Seguimiento cercano de tus sensaciones y avances.',
        ],
      },
      online: {
        heading: 'The Hybrid Method',
        intro:
          'Preparación de carrera 100% a distancia, con bloques de entrenamiento planificados según tu fecha objetivo. Todo centralizado. Soporte y feedback semanal de tu progresión.',
        bullets: [
          'Bloques de entrenamiento orientados a tu fecha objetivo.',
          'Plan de carrera y fuerza complementaria con sobrecarga progresiva.',
          'Todo centralizado. Soporte y feedback semanal de tu progresión.',
          'Ebooks exclusivos sobre entrenamiento, nutrición y hábitos saludables.',
        ],
      },
    },
  },
  {
    slug: 'nutricion-dietetica',
    title: 'Nutrición y dietética',
    tagline: 'Consigue un cuerpo más fuerte y definido con un plan adaptado a ti.',
    summary:
      'Plan nutricional 100% adaptado a tus necesidades, objetivos, horarios y gustos, con acompañamiento y seguimiento constante.',
    image: imgNutricion,
    imageAlt: 'Plan de nutrición y dietética de Nieto Hybrid Training Lab',
    sections: {
      presencial: {
        heading: 'Nutrición y dietética en grupos reducidos',
        intro: 'Revisiones y seguimiento en el propio centro, con explicación en persona de tu plan y tus avances.',
        bullets: [
          'Valoración inicial y revisiones periódicas en el centro.',
          'Plan nutricional 100% adaptado a tus necesidades, objetivos, horarios y gustos.',
          'Explicación en persona de comidas equilibradas, rápidas y fáciles de preparar.',
          'Seguimiento del progreso: peso, perímetros (opcionales) y fotos en 3 posiciones.',
        ],
      },
      hibrido: {
        heading: 'Programa Híbrido',
        intro: 'Plan nutricional personalizado con revisiones presenciales puntuales y seguimiento diario online.',
        bullets: [
          'Plan nutricional 100% adaptado a tus necesidades, objetivos, horarios y gustos.',
          'Revisiones presenciales puntuales para ajustar el plan.',
          'Soporte diario por WhatsApp para resolver dudas entre revisiones.',
          'Entrega en PDF profesional, con opción de mantener o renovar el plan cada mes.',
        ],
      },
      online: {
        heading: 'The Hybrid Method',
        intro: 'Consigue un cuerpo más fuerte y definido en 12 semanas con un plan 100% a distancia. Todo centralizado. Soporte y feedback semanal de tu progresión.',
        bullets: [
          'Plan nutricional 100% adaptado a tus necesidades, objetivos, horarios y gustos.',
          'Comidas equilibradas, rápidas y fáciles de preparar. Entrega en PDF profesional.',
          'Soporte diario por WhatsApp de lunes a viernes (11:00-13:00h y 20:00-22:00h).',
          'Todo centralizado. Soporte y feedback semanal de tu progresión.',
          'Seguimiento de peso, perímetros (opcionales) y fotos en 3 posiciones para valorar resultados reales.',
        ],
      },
    },
  },
  {
    slug: 'grupo-reducido',
    title: 'Grupo Reducido',
    tagline: 'Más que entrenar juntos, progresar juntos.',
    summary:
      'Entrena en un entorno cercano, con grupos reducidos donde el entrenador puede estar más encima de ti y adaptar cada ejercicio a tus posibilidades.',
    image: imgGrupo,
    imageAlt: 'Entrenamiento en grupo reducido en Nieto Hybrid Training Lab',
    sections: {
      presencial: {
        heading: 'Grupo Reducido en grupos reducidos',
        intro:
          'Entrena en el centro dentro de un grupo reducido, con el entrenador presente y pendiente de cada persona.',
        bullets: [
          'Grupos reducidos para una atención real y cercana.',
          'Ejercicios adaptados al nivel y las posibilidades de cada persona.',
          'Ambiente cercano y motivador en cada sesión.',
          'Gente comprometida, con el mismo objetivo y buen ambiente.',
        ],
      },
      hibrido: {
        heading: 'Programa Híbrido',
        intro:
          'Entrenamiento en grupo presencial combinado con seguimiento individual online entre sesiones.',
        bullets: [
          'Sesiones presenciales en grupo reducido.',
          'Seguimiento individual online para reforzar tu progresión.',
          'Entrenamientos planificados con progresión semanal.',
          'Comunidad real que te acompaña dentro y fuera del centro.',
        ],
      },
      online: {
        heading: 'The Hybrid Method',
        intro:
          'Grupos reducidos coordinados a distancia, con programación conjunta y encuentros virtuales para mantener la motivación.',
        bullets: [
          'Grupo reducido coordinado a distancia con objetivos comunes.',
          'Programación conjunta con progresión semanal.',
          'Encuentros virtuales para mantener el contacto y la motivación.',
          'Seguimiento cercano de la evolución de cada persona.',
        ],
      },
    },
  },
]

export function getSpecialtyBySlug(slug) {
  return specialties.find((item) => item.slug === slug)
}
