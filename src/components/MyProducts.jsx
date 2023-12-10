import React from 'react'
import Section from '../components/Section'
import CardProducts from '../components/CardProducts'

const myProducts = [
  {
    id: 1,
    icono: 'src/assets/img/products/1.jpg',
    titulo: 'Celular Samsung Galaxy A30',
    precio: 80000
  },
  {
    id: 2,
    icono: 'src/assets/img/products/10.jpg',
    titulo: 'Notebook HP Core i3',
    precio: 1012719
  },
  {
    id: 3,
    icono: 'src/assets/img/products/6.jpg',
    titulo: 'Celular Apple iPhone 15 Pro Max',
    precio: 1690000
  },
  {
    id: 4,
    icono: 'src/assets/img/products/8.jpg',
    titulo: 'Notebook ASUS Vivobook Go 14',
    precio: 389999
  },
  {
    id: 5,
    icono: 'src/assets/img/products/2.jpg',
    titulo: 'Celular Xiaomi Redmi 12C',
    precio: 122000
  },
  {
    id: 6,
    icono: 'src/assets/img/products/12.jpg',
    titulo: 'Notebook Mac Air M2',
    precio: 2549999
  },
  {
    id: 7,
    icono: 'src/assets/img/products/3.jpg',
    titulo: 'Celular Samsung Galaxy S10',
    precio: 325000
  },
  {
    id: 8,
    icono: 'src/assets/img/products/4.jpg',
    titulo: 'Celular Xiaomi Redmi Note 11 Pro',
    precio: 507350
  },
  {
    id: 9,
    icono: 'src/assets/img/products/11.jpg',
    titulo: 'Notebook Dell AMD Ryzen 7',
    precio: 1349999
  },
  {
    id: 10,
    icono: 'src/assets/img/products/7.jpg',
    titulo: 'Notebook Positivo Bgh At525ln',
    precio: 299999
  },
  {
    id: 11,
    icono: 'src/assets/img/products/5.jpg',
    titulo: 'Celular Xiaomi Redmi Note 12 Pro',
    precio: 1100000
  },
  {
    id: 12,
    icono: 'src/assets/img/products/9.jpg',
    titulo: 'Notebook Dell Inspiron',
    precio: 799999
  }
]

const MyProducts = () => {
  return (
    <Section titulo='Productos destacados' descripcion='Conocé los nuevos modelos y disfrutá de beneficios exclusivos' array={myProducts}>
      <div className='containerCard'>
        {
        myProducts.map(item => <CardProducts key={item.id} {...item} />)
        }
      </div>
    </Section>
  )
}

export default MyProducts
