import * as C from './style'
import MenuItem from '../MenuItem'
import Cart from '../Cart'

export default function Content() {
  return (
    <C.Container>
      <C.Items>
          <MenuItem />
          <Cart />
      </C.Items>
    </C.Container>
  )
}
