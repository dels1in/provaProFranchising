import React, { useState, useEffect } from 'react'

import { Container, CloseButton, IngredientList, IngredientForm } from './styles'

import IngredientItem from '../../IngredientItem'

import { FiX, FiPlusCircle } from 'react-icons/fi'

import api from '../../../services/api'

import * as yup from 'yup'
import formValidations from '../../../utils/FormValidations'

export default function ModalProduct({ onClose, isUpdate, product }){

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0.00);

  const [ingredients, setIngredients] = useState([])

  const [ingredientName, setIngredientName] = useState('');
  const [ingredientCost, setIngredientCost] = useState(0.00);
  const [ingredientQtd, setIngredientQtd] = useState(0);

  const token = localStorage.getItem('auth-token')

  const image = "https://mais1cafe.com.br/wp-content/uploads/2020/08/Sensacao.png"

  yup.setLocale({
    mixed:{
      default: 'Não é Valido',
      required: '${path}',
    },
    number:{
      min: '${path}',
      
    },
  })

  const productSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().min(1),
  })
  
  useEffect(()=>{
    function fillProductForm(){
      if(isUpdate){
        setName(product.name)
        setPrice(product.price)
        setIngredients(product.ingredients)
      }
    }
    fillProductForm() 
  }, [])

  async function handleNewProduct(event){
    event.preventDefault()

    if(ingredients.length == 0){
      alert("Produto deve ter ao menos um ingrediente")
      return
    }

    const productFormData = { name, price }
    
    productSchema.validate(productFormData, { abortEarly: false })
      .then( async valid => {

        const newProduct = {
          name, 
          price, 
          ingredients, 
          image 
        }
    
        try{
          await api.post('/product/save', newProduct, {
            headers:{
              authorization: token
            }
          })
          alert("Produto Cadastrado")
          onClose()
        }catch(err){
          if(err.message.includes("500")) alert("Ocorreu um erro de gravação, Verifique os dados")
          if(err.message.includes("400")) alert("Há dados faltando, preencha os requisitos")
          if(err.message.includes("401")) alert("Você não tem permissão para executar está ação")
        }

    }).catch((err) => {
      formValidations(err.errors)
      alert("Campos obrigatórios não preenchidos")
    })
}
    
  async function handleUpdateProduct(event){
    event.preventDefault()

    const productFormData = { name, price }
    
    productSchema.validate(productFormData, { abortEarly: false })
      .then( async valid => {
        const uptProduct = { 
          id: product.id,
          name, 
          price, 
          ingredients, 
          image 
        }
    
        try{
          await api.post('/product/save', uptProduct, {
            headers:{
              authorization: token
            }
          })
          alert("Produto Atualizado")
          onClose()
        }catch(err){
          if(err.message.includes("500")) alert("Ocorreu um erro de gravação, Verifique os dados")
          if(err.message.includes("400")) alert("Há dados faltando, preencha os requisitos")
          if(err.message.includes("401")) alert("Você não tem permissão para executar está ação")
        }
      }).catch((err) => {
        formValidations(err.errors)
        alert("Campos obrigatórios não preenchidos")
      })
  }
    
  
  function handleNewIngredient(){
    const newIngredient = {
      name: ingredientName,
      cost: ingredientCost,
      quantity: ingredientQtd
    }
    
    setIngredients([...ingredients, newIngredient])
  }

  function removeItem(item){
    var bkpIngredients = [...ingredients]
    var i = ingredients.indexOf(item)
    if(i !== -1){
      bkpIngredients.splice(i,1)
      setIngredients(bkpIngredients)
    }     
  }


  return(
    <>
      <Container>
        <div>
          <CloseButton onClick={() => onClose()}>
            <FiX size={20} color="000"/>
          </CloseButton>
          <form onSubmit={isUpdate ? handleUpdateProduct : handleNewProduct}>

            <input 
              id="name"
              value={name}
              placeholder="Nome do Produto"
              onChange={e => {setName(e.target.value); e.target.style.borderColor = ''}}
            />

            <input 
              id="price"
              value={price}
              placeholder="Preço do Produto"
              type="number"
              onChange={e => {setPrice(e.target.value); e.target.style.borderColor = ''}}
            />

            <IngredientList>
              { ingredients.map(item => (
                <IngredientItem 
                  rmItem={() => removeItem(item)}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  cost={item.cost}
                  qtd={item.quantity}
                />
              ))}
            </IngredientList>

            <IngredientForm>
              <input
                id="ingredientName"
                value={ingredientName}
                placeholder="Nome Ingrediente"
                onChange={e => {setIngredientName(e.target.value); e.target.style.borderColor = ''}}
              />

              <input 
                id="ingredientPrice"
                value={ingredientCost}
                type="number"
                placeholder="Preço Ingrediente"
                onChange={e => {setIngredientCost(e.target.value); e.target.style.borderColor = ''}}
              />

              <input 
                id="ingredientQtd"
                value={ingredientQtd}
                type="number"
                placeholder="Quantidade Ingrediente"
                onChange={e => {setIngredientQtd(e.target.value); e.target.style.borderColor = ''}}
              />

              <button type="button" onClick={() => handleNewIngredient()}>
                <FiPlusCircle size={20} color="#a4a4a4"/>
              </button>
            </IngredientForm>

            <button type="submit">
              Criar
            </button>

          </form>
          
        </div>
      </Container>
    </>
  )
}