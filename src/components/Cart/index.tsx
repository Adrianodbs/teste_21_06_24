import { selectTotalPrice } from '../../redux/cart/cart.Selector';
import { RootState } from '../../redux/rootReducer';
import Button from '../Button';
import CartItem from '../CartItem';
import * as C from './style'

import {useSelector} from 'react-redux'

export default function Cart() {
  const { products } = useSelector((state: RootState) => state.cartReducer);
  const totalPrice = useSelector(selectTotalPrice)
  return (
    <C.Container>
      <h3>Carrinho</h3>
      <div>
        {products.map(product => (
          product ? <CartItem key={product.id} product={product} /> : null
        ))}
      </div>
      <C.CartTotal>
        <span>R${totalPrice}</span>
      </C.CartTotal>
      <Button>Checkout now</Button>
    </C.Container>
  )
}


