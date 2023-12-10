import React from 'react'
import '../assets/styles/cardServices.css'

const CardServices = ({ icono, titulo, descripcion }) => {
  return (
    <div className='cardServices'>
      <img src={icono} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default CardServices
