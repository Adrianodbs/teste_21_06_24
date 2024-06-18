import styled from "styled-components"
import IconSearch from '../../assets/img/search.svg'

export default function Input() {
  return (
    <InputStyle>
      <img src={IconSearch} alt="Search" />
      <input type="text" placeholder="Search menu items" />
    </InputStyle>
  )
}

const InputStyle = styled.label`
  max-width: 1024px;
  width: 90%;
  margin: 12px 0;
  background-color: #fff;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 6px;
  border-radius: 8px;
  color: #2C2C2C;
  border: 1px solid #c1c1c1;

  input{
    outline: none;
    width: 100%;
    border: none;
  }

  img{
    cursor: pointer;
  }
`
