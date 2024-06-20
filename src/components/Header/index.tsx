import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoImg from '../../assets/img/logo.svg'
import * as C from './style'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <C.Menu>
      <C.Nav isOpen={isOpen}>
        <p>Menu</p>
        <C.MenuIcon onClick={toggleMenu} isOpen={isOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </C.MenuIcon>
      </C.Nav>
      <C.MenuItems isOpen={isOpen}>
        <ul>
          <li>Menu</li>
          <li>Entrar</li>
          <li>Contato</li>
        </ul>
      </C.MenuItems>
      <C.Banner>
        <C.Burguer />
        <C.Logo src={LogoImg}/>
      </C.Banner>
    </C.Menu>
  )
}
