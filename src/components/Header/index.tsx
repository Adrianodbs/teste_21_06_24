import LogoImg from '../../assets/img/logo.svg'
import * as C from './style'

export default function Header() {
  return (
    <C.Menu>
      <ul>
        <li>Menu</li>
        <li>Entrar</li>
        <li>Contato</li>
      </ul>
      <C.Banner>
        <C.Burguer />
        <C.Logo src={LogoImg}/>
      </C.Banner>
    </C.Menu>
  )
}
