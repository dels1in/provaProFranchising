import React from 'react'

import { Container } from './styles'

import { FiX, FiEdit2 } from 'react-icons/fi'

export default function ItemCards ({  up, down, name, image, price, id, ingredients }) {
  return(
    <>
      <Container>
        <img src={image} alt="product image"/>
        <div>
          <h1>{name}</h1>
          <p>R$ {price}</p>
        </div>
        <>
          <button type="button" onClick={() => down(id)}>
            <FiX size={20} color="#d60000"/>
          </button>
          <button type="button" onClick={() => up()}>
            <FiEdit2 size={20} color="#3fa8e7"/>
          </button>
        </>
      </Container>
    </>
  )
}