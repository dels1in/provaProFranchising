import React from 'react'

import { Container, RemoveButton } from './styles'

import { FiXSquare } from 'react-icons/fi'

export default function IngredientItem({ id, name, cost, qtd, rmItem  }){
  return(
    <>
      <Container>
        <p>{name}</p>
        <p>{cost}</p>
        <p>{qtd}</p>
        <RemoveButton onClick={() => rmItem(id)}>
          <FiXSquare size={25} color="#d60000"/>
        </RemoveButton>
      </Container>
    </>
  )
}