import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  align-items: center; 
  text-align: center;
`

export const RemoveButton = styled.button`
  right: 50px !important;
  position: absolute !important;
  transition: opacity 0.2s !important;
  display: flex !important;
  border: none !important;
  :hover {
    opacity: 0.6 !important;
  }
`