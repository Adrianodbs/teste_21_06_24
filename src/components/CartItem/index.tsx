import { MenuItemProps } from "../../interfaces/MenuData";
import * as C from './style'
import { FaCirclePlus} from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import { decreaseQuantity, increaseQuantity } from "../../redux/cart/actions";



export default function CartItem({ product }: { product: MenuItemProps }) {

  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };
  
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };
  
  return (
    <C.Container>
      <C.Info>
        <div>
          <C.Title>{product.name}</C.Title>
          <C.Quantity>
            <button onClick={handleDecrease}>
              <FaMinusCircle size={20} color="var(--primaryColour)" />
            </button>
            
            <span>{product.quantity}</span>

            <button onClick={handleIncrease}>
              <FaCirclePlus size={20} color="var(--primaryColour)" />
            </button>
            
          </C.Quantity>       
        </div>
   
          <C.Price>R${product.price}</C.Price>
          
        
      </C.Info>
     
      
    </C.Container>
  )
}
