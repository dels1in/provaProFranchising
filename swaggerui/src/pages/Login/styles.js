import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 85vh;
  width: 100%;
  form {
    width: 300px;
    margin: 30px 180px;
    align-items: center;
    justify-content: center;
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
`