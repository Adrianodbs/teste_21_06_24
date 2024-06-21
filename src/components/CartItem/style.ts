import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span{
    font-weight: 700;
    font-size: 16px;
    color: #121212;
  }

  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #121212;
  margin-bottom: 6px;
`

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #121212;
`

