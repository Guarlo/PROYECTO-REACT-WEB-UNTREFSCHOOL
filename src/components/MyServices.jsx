import React from 'react'
import Section from '../components/Section'
import CardServices from '../components/CardServices'

const myServices = [
  {
    id: 1,
    icono: 'src/assets/icon/visita.png',
    titulo: 'Visita técnica a domicilio',
    descripcion: 'Coordinación de visita en caso que vivas en la Provincia de Buenos Aires.'
  },
  {
    id: 2,
    icono: 'src/assets/icon/especialista.png',
    titulo: 'Equipo técnico especializado',
    descripcion: 'Ante cualquier consulta sobre tu computadora o celular las 24 hs del día.'
  },
  {
    id: 3,
    icono: 'src/assets/icon/asesoramiento.png',
    titulo: 'Asesoramiento en tu compra de accesorios',
    descripcion: 'Para que puedas elegir el producto y proveedor que más te convenga.'
  },
  {
    id: 4,
    icono: 'src/assets/icon/cobertura.png',
    titulo: 'Cobertura mundial',
    descripcion: 'Para que tu computadora y celular estén protegidos en cualquier lugar donde estés.'
  },
  {
    id: 5,
    icono: 'src/assets/icon/garantia.png',
    titulo: 'Garantía',
    descripcion: 'Te damos la tranquilidad que sólo una garantía oficial puede ofrecer.'
  },
  {
    id: 6,
    icono: 'src/assets/icon/tarjeta.png',
    titulo: 'Múltiples medios de pago',
    descripcion: 'Aceptando transferencias, depósitos, cheques y dándote financiación 12 cuotas.'
  }

]

const MyServices = () => {
  return (
    <Section titulo='Beneficios de nuestro Seguro de Computadora o Celular' descripcion='Protegé tu computadora o celular estés donde estés, con precio fijo por un año.' array={myServices}>
      <div className='containerCard'>
        {
          myServices.map(item => <CardServices key={item.id} {...item} />)
        }
      </div>
    </Section>
  )
}

export default MyServices
