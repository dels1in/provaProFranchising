import React from 'react'

import { Link } from 'react-router-dom'

import { FiLogOut } from 'react-icons/fi';

import { Container } from './styles'

export default function Header(){
  return(
    <>
      <Container>
        <Link to="/"><FiLogOut size={20} /><p>Sair</p></Link>
      </Container>
    </>
  )
}