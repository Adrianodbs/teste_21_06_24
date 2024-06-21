import styled from "styled-components";

interface MenuItemsProps {
  isOpen: boolean;
}

export const Menu = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Nav = styled.div<MenuItemsProps>`
@media (min-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  position: relative;
  background-color: var(--navBackgroundColour);

  p{
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
    color: #fff;
    text-transform: uppercase;
    display: ${props => (props.isOpen ? 'none' : 'block')};
  }
`;

export const MenuIcon = styled.div<MenuItemsProps>`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 24px;
    top: ${props => (props.isOpen ? '24px' : '8px')};
  }
`;

export const MenuItems = styled.div<MenuItemsProps>`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 12px;
    background-color: var(--navBackgroundColour);
    color: #fff;
    text-transform: uppercase;

    li {
      font-weight: 300;
      font-size: 20px;
      line-height: 23.44px;
      padding: 0 48px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    ul {
      display: ${props => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
    }

    li {
      padding: 12px 24px;
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  overflow: hidden;
  background: linear-gradient(90deg, #36231C 18.92%, #0b0b0b 50.56%, #36231C 80.88%);
  position: relative;

`

export const Burguer = styled.div`
  width: 700px;
  height: 600px; 
  background-image: var(--bannerImage);
  background-size: cover;
  background-position: center;
  opacity: 1;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
`;

export const Logo = styled.img`
  width: 188px;
  height: 125.33px;
  position: absolute;
  opacity: .8;

`