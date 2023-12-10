import { Link } from '../components/Link'
import Section from '../components/Section'

export default function Page404 () {
  return (
    <Section>
      <h1 style={{ marginTop: '5rem', fontSize: '10rem' }}>404</h1>
      <h4>Vaya. La página que estás buscando no existe!</h4>
      <Link to='/' style={{ marginBottom: '7rem' }}>Volver al Home</Link>
    </Section>
  )
}
