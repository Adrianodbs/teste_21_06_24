import { RootState } from '../../redux/rootReducer';
import Button from '../Button';
import CartItem from '../CartItem';
import * as C from './style'

import {useSelector} from 'react-redux'

export default function Cart() {
  const { products } = useSelector((state: RootState) => state.cartReducer);
  return (
    <C.Container>
      <h3>Carrinho</h3>
      <div>
        {products.map(product => (
          product ? <CartItem key={product.id} product={product} /> : null
        ))}
      </div>
      <Button>Checkout now</Button>
    </C.Container>
  )
}


