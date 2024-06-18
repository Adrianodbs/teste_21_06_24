import * as C from './style'
import Burguer from '../../assets/img/burguericon.svg'
import Drink from '../../assets/img/drink.svg'
import Dessert from '../../assets/img/dessert.svg'

export default function Content() {
  return (
    <C.Container>
      <C.Items>
        <C.Menu>
          <C.MenuItem>
            <img src={Burguer} alt="burguer" />
            <p>Burguers</p>
          </C.MenuItem>
          <C.MenuItem>
            <img src={Drink} alt="Drink" />
            <p>Drinks</p>
          </C.MenuItem>
          <C.MenuItem>
            <img src={Dessert} alt="Dessert" />
            <p>Desserts</p>
          </C.MenuItem>
        </C.Menu>
      </C.Items>
    </C.Container>
  )
}
