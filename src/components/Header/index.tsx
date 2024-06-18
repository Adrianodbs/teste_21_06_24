import Burguer from '../../assets/img/burguer.jpg'
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
        <img src={Burguer} alt="burguer" />
      </C.Banner>
    </C.Menu>
  )
}
