import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  padding: 0 10px;
  background: #405a51;
  color: #FFF;
  min-width: 1095px;
  display: flex;
  align-items: center;

  a {
    position: absolute;
    right: 0;
    display: flex;
    color: #f7f7f7;
    padding: 30px 15px;
    text-decoration: none; 
    font-size: 18px;
    font-weight: 700;

    p{
      padding: 0 5px;
    }
    
    transition: 0.4s;
    :hover {
      background-color: #ecf1f8;
      text-shadow: 0.2px 0.2px #f3f3f3;
      color: #405a51;
    }
  }
`;

