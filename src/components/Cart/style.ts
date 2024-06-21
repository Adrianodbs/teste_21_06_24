import styled from "styled-components";

export const Container = styled.div`
  background-color: #F8F9FA;
  width: 35%;
  box-shadow: 0px 2px 14px 0px #00000026;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px){
    width: 100%;
  }

  
  h3{
    font-weight: 500;
    font-size: 24px;
    color: #464646;
    width: 100%;
    padding: 16px;
  }
`

export const Items = styled.div`
  background-color: #fff;
`

export const CartTotal = styled.div``

export const SubTotal = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #cacaca;
  font-weight: 500;
  font-size: 18px;
  color: #121212;

  p{
    font-weight: 400;
    font-size: 16px;
  }
`

export const Total = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  color: #121212;
  font-weight: 500;
  font-size: 24px;

  p{
    font-weight: 300;
    font-size: 24px;
  }
`

export const ButtonContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px){
    display: flex;
    margin-bottom: 12px;
  }
`