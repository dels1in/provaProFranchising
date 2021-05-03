import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  margin: 15px auto;
  min-width: 250px;
  background: #FBFBFB;
  border-radius: 8px;
  position: relative;
  padding: 15px 15px 15px 15px;
  box-shadow: 1px 1px #ddd;

  strong {
    font-size: 14px;
  }
  button {
    position: absolute;
    right: 14px;
    top: 20px;
    border: 0;
    background: #FFF;
    transition: opacity 0.2s;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    h1 {


    }
    p { 
      text-align: right;
      

    }

  }
  button + button {
    right: 40px;
  }
  button:hover {
    opacity: 0.6;
  }
`