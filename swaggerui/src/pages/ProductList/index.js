import React, { useEffect, useState } from 'react'

import { CardList, Background, Container } from './styles'
import { FiPlus } from 'react-icons/fi'

import ItemCard from '../../components/ItemCard'

import api from '../../services/api'
import ModalProduct from '../../components/Modals/ModalProduct'

import Header from '../../components/Header';

export default function ProductList(){
  const [modalProduct, setModalProduct] = useState(false) ;
  const [isUpdate, setIsUpdate] = useState(false)
  
  const[productList, setProductList] = useState([])

  const[product, setProduct] = useState()

  const[id, setId] = useState('')

  const token = localStorage.getItem('auth-token')
  //const user = JSON.parse(localStorage.getItem('user'))

  function handleUpdateItem(product) {
    setProduct(product)
    setModalProduct(true) 
    setIsUpdate(true)
  }

  async function handleDeleteItem(id) {
    if(window.confirm("Excluir Produto?")){
      try {
        await api.delete(`/product/delete/${id}`, {
          headers:{
            authorization: token
          }
        })
        setId(id)
        alert('Produto excluido!')
      } catch (err) {
        if(err.message.includes("500")) alert("Ocorreu um erro de gravação, Verifique os dados")
        if(err.message.includes("401")) alert("Você não tem permissão para executar está ação")
      }
    }
  }

  useEffect(() => {
    async function fillProductList(){
      try{
        await api.get('/product/list', {
          headers:{
            authorization: token
          }
        })
        .then(res => {
          setProductList(res.data.content)
        })
      }catch(err){
        if(err.message.includes("401")) alert("Você não tem permissão para executar está ação")
      }
    }
    fillProductList()
  }, [id, modalProduct])

  return(
    <>
    <Header />
      <Container>
        <h1>Lista de Produtos</h1>
        <button type='button' onClick={() => {setModalProduct(true); setIsUpdate(false)}}>
          <FiPlus className="icon" size={22} />
          <p>Adicionar Produto</p>
        </button>
      </Container>
      <div>
        <CardList>
          {productList.map(product => (
            <ItemCard 
              up={() => handleUpdateItem(product)}
              down={handleDeleteItem}
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              ingredients={product.ingredients}
            />
          ))}
        </CardList>
      </div>
      {modalProduct ? (
        <Background>
          <ModalProduct onClose={() => setModalProduct(false)} isUpdate={isUpdate} product={product} />
        </Background>
      ) : null}
    </>
  )
}