import React from 'react'
import '../assets/styles/section.css'

const Section = ({ titulo, descripcion, array, children }) => {
  return (
    <section className='section container' style={{ display: 'flex', flexDirection: 'column', marginTop: '6rem' }}>
      <h1>{titulo}</h1>
      <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>{descripcion}</p>
      {children}
    </section>
  )
}

export default Section
