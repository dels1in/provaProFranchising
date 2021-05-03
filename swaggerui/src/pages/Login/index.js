import React, { useState } from 'react'

import { useHistory } from 'react-router'

import { Container } from './styles'

import api from '../../services/api'

import * as yup from 'yup'
import formValidations from '../../utils/FormValidations'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();

  yup.setLocale({
    mixed:{
      default: 'Não é Valido',
      required: '${path}',
    },
  })

  const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  })

  async function handleLogin (event){
    event.preventDefault();

    const loginFormData = { username, password }

    loginSchema.validate(loginFormData, { abortEarly: false })
      .then( async valid => {
        const login = { username, password }

        try{
          await api.post('/auth/login', login)
            .then(res => {
              if(!res.headers.authorization){
                return alert('Acesso Invalido');
              }
              localStorage.setItem('auth-token', res.headers.authorization)
              localStorage.setItem('user', JSON.stringify(res.data))
              history.push('/productList')
            })
        }catch(error){
          alert('Usuário ou senha incorretos')
        }
      }).catch((err) => {
        formValidations(err.errors)
        alert("Campos obrigatórios não preenchidos")
      })
  }

  return (
    <>
      <Container>
        <form onSubmit={handleLogin}>
          <input id="username" placeholder="Usuário" onChange={e => {setUsername(e.target.value); ; e.target.style.borderColor = ''}} />
          <input id="password" type="password" placeholder="Senha" onChange={e => {setPassword(e.target.value); e.target.style.borderColor = ''}} />

          <button type="submit">
            Login
          </button>
        </form>
      </Container>
    </>
  )
}