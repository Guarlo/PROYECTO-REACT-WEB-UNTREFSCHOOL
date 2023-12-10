import React from 'react'
import '../assets/styles/cardProducts.css'

const CardProducts = ({ icono, titulo, precio }) => {
  const formatedPrice = () => {
    const importeTotalParcial = precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
    return importeTotalParcial;
  }

  return (
    <div className='cardProducts'>
      <img src={icono} />
      <h4>{titulo}</h4>
      <strong>{formatedPrice()}</strong>
    </div>
  )
}

export default CardProducts
