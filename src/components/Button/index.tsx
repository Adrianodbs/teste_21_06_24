import styled from "styled-components"

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({children, onClick}:ButtonProps) {
  return (
    <ButtonStyle onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  border: none;
  background-color: #4F372F;
  border-radius: 24px;
  height: 48px;
  width: 90%;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  align-self: center;
`
