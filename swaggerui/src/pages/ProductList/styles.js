import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 10px 40px;

  button {
    position: absolute;
    right: 40px;
    display: flex;
    padding: 5px 5px;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    background: #F7F7F7;
    border: 1;
    border-radius: 8px;
    border-color: #405a51;
    color: #405a51;
    transition: 0.4s;
    p{
      padding: 0 10px;
    }
    :hover{
      background-color: #405a51;
      text-shadow: 0.2px 0.2px #f3f3f3;
      color: #FFF
    }
  }
`

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  list-style: none;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 93vh;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`