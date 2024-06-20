import styled from "styled-components"

export default function Cart() {
  return (
    <Container>
      <h3>Carrinho</h3>
      <div>
        <p>Seu carrinho está vazio</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  width: 35%;
  height: 130px;
  box-shadow: 0px 2px 14px 0px #00000026;
  
  h3{
    background-color: #F8F9FA;
    font-weight: 500;
    font-size: 24px;
    color: #464646;
    width: 100%;
    padding: 16px;
  }
`
