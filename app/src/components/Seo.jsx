import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://nietohybrid.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: 'Nieto Hybrid Training Lab',
  image: DEFAULT_IMAGE,
  url: SITE_URL,
  telephone: '+34601533539',
  email: 'infonietohybrid@nietohybrid.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pòrtol, Marratxí',
    addressRegion: 'Illes Balears',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.6160793,
    longitude: 2.7632758,
  },
  sameAs: ['https://www.instagram.com/nh.traininglab', 'https://www.instagram.com/nietohybrid'],
}

function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, jsonLd }) {
  const canonical = `${SITE_URL}${path}`
  const structuredData = jsonLd ?? LOCAL_BUSINESS_JSON_LD

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}

export default Seo
