import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  width: 90%;
  background-color: #F8F9FA;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  gap: 12px;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

