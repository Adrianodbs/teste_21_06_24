import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #fff;
  box-shadow: 0px 2px 14px 0px #00000024;
  padding: 12px;

  @media (max-width: 768px){
    width: 100%;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  img{
    border-radius: 50%;
    width: 82px;
    height: 82px;
    object-fit: cover;
    padding: 4px;
  }
`

export const ContentItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;

  h3{
    font-weight: 500;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin-top: 36px;
  }

  img{
    width: 128px;
    height: 85px;
    border-radius: 6px;

    @media (max-width: 768px){
      width: 112px;
      height: 64px;
    }
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  h4{
    font-weight: 500;
    font-size: 16px;
    color: #121212;
  }

  p{
    font-weight: 300;
    color: #464646;
    font-size: 16px;
    width: 100%;
    white-space: nowrap; 
    overflow: hidden;    
    text-overflow: ellipsis;
  }

  span{
    font-weight: 500;
    font-size: 16px;
    color: #464646;
  }
`


