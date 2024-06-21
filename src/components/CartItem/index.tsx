import { MenuItemProps } from "../../interfaces/MenuData";
import * as C from './style'
import { FaCirclePlus} from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";


export default function CartItem({ product }: { product: MenuItemProps }) {
  return (
    <C.Container>
      <C.Info>
        <div>
          <C.Title>{product.name}</C.Title>
          <C.Quantity>
            <button>
              <FaMinusCircle size={20} color="var(--primaryColour)" />
            </button>
            
            <span>{product.quantity}</span>

            <button>
              <FaCirclePlus size={20} color="var(--primaryColour)" />
            </button>
            
          </C.Quantity>       
        </div>
      
        <C.Price>R${product.price}</C.Price>
      </C.Info>
     
      
    </C.Container>
  )
}
