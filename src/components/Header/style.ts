import styled from "styled-components";

export const Menu = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 12px;
    background-color: var(--navBackgroundColour);
    color: #fff;
    text-transform: uppercase;

    li{
      font-weight: 300;
      font-size: 20px;
      line-height: 23.44px;
      padding: 0 48px;
    }
  }
`

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