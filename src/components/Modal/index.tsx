import { MenuItemProps } from "../../interfaces/MenuData";
import * as C from './style'

interface ModalProps {
  item: MenuItemProps | null;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  if (!item) return null;
  return (
    <C.Container>
      <C.ModalContent>
        <button onClick={onClose}>Close</button>

        {item.images && item.images.length > 0 && (
          <img src={item.images[0].image} alt={item.name} />
        )}
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>choose your size</p>
        <span>Price: ${item.price}</span>
        <button>Add to order</button>
      </C.ModalContent>
    </C.Container>
  )
}
