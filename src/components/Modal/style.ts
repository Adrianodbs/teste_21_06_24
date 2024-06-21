import styled from "styled-components";

interface ImageProps {
  hasModifiers: boolean;
}

interface InfoProps {
  hasImage: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.5);
  z-index: 99;
`

export const ModalContent = styled.div<InfoProps>`
  position: fixed;
  width: 480px;
  height: 540px;
  top: 6%  ;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0,0,0, 0.8);

  display: flex;
  flex-direction: column;
  justify-content: ${({ hasImage }) => (hasImage ? 'space-between' : 'center')};
`

export const Close = styled.button`
  border: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  cursor: pointer;

  img{
    width: 24px;
  }
`

export const Image = styled.img<ImageProps>`
  height: ${({ hasModifiers }) => (hasModifiers ? '200px' : '280px')};
  object-fit: cover;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;

  h4{
    font-weight: 700;
    font-size: 24px;
    color: #121212;
  }

  p{
    font-weight: 400;
    font-size: 16px;
    color: #464646;
  }

  button{
    border: none;
    background-color: #4F372F;
    border-radius: 24px;
    height: 48px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  .size{
    p{
      font-weight: 700;
      font-size: 16px;
      color: #464646;
    }

    span{
      font-weight: 400;
      font-size: 16px;
      color: #5F5F5F;
    }
  }

  .options{
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80px;
    -ms-overflow-style: none;  
    scrollbar-width: none;
  }

  .options::-webkit-scrollbar {
    display: none; 
  }

  .input-items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;

    label{
      font-weight: 500;
      font-size: 16px;
      color: #121212;
      display: flex;
      flex-direction: column;

      span{
        font-weight: 400;
        font-size: 16px;
        color: #464646;
      }
    }

    input{
      width: 20px;
      color: #5F5F5F;
    }
  }
`

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;

  span{
    font-weight: 600;
    font-size: 24px;
    color: #121212;
  }

  img{
    cursor: pointer;
  }
`

