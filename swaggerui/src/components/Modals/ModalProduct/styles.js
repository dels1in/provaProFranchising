import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 1000px;
  div {
    position: relative;
    padding: 40px;
    background: #f0f0f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 40px auto;
    width: 100%;
    max-width: 500px;
    h2 {
      text-align: center;
      margin-bottom: 20px;
      font-weight: 200;
      font-size: 25px;
    }
    form {   
      width: 100%;
      max-width: 450px;
      label {
        font-size: 18px;
        font-weight: 700;
      }
      input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      button[type=submit] {
        width: 100%;
        height: 40px;
        background: #f7f7f7;
        border: 1;
        border-color: #405a51;
        border-radius: 8px;
        color: #405a51;
        font-weight: 600;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 20px;
        transition: 0.4s;
        :hover{
          background-color: #405a51;
          text-shadow: 0.2px 0.2px #f3f3f3;
          color: #FFF
        }
      }
    }
  }
`
export const CloseButton = styled.button`
  right: 10px !important;
  top: 10px !important;
  position: absolute !important;
  transition: opacity 0.2s !important;
  display: flex !important;
  border: none !important;
  :hover {
    opacity: 0.6 !important;
  }
`

export const IngredientList = styled.ul`
  display: row;
  width: 100%;
  max-width: 500px;
  div{
    padding: 10px;
    margin: 20px auto;
  }

`
export const IngredientForm = styled.div`
  display: flex;
  box-shadow: none !important;
  border: none;
  padding: 0 !important;
  max-width: 600px !important;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0;
  button {
        margin-top: 0 !important;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        height: 40px;
      }
`