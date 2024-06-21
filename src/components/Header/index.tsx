import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoImg from '../../assets/img/logo.svg'
import * as C from './style'

import {  useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { login, logout } from '../../redux/user/actions';




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  console.log(currentUser)
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () =>{
    dispatch(login({name: "User"}))
  }
  
  const handleLogout = () =>{
    dispatch(logout())
  }

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
          {currentUser ? (
            <li onClick={handleLogout}>Sair</li>
          ): (
            <li onClick={handleLogin}>Entrar</li>
          )}         
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
