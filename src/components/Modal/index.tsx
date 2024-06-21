import { MenuItemProps } from "../../interfaces/MenuData";
import * as C from './style'
import CloseIcon from '../../assets/img/close.svg'
import Minus from '../../assets/img/Minus_btn.svg'
import Plus from '../../assets/img/plus_btn.svg'


interface ModalProps {
  item: MenuItemProps | null;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  if (!item) return null;

  const hasMultipleOptions = item.modifiers && item.modifiers.some(modifier => modifier.items.length > 1) || false;
  const hasImage = item.images && item.images.length > 0;
  return (
    <C.Container>
      <C.ModalContent hasImage={hasImage}>
        <C.Close onClick={onClose}>
          <img src={CloseIcon} alt="close" />
        </C.Close>
        
        {hasImage && (
          <C.Image src={item.images[0].image} alt={item.name} hasModifiers={hasMultipleOptions} />
        )}
        <C.Info>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          {hasMultipleOptions && (
            <div className="size">
              <p>Choose your size</p>
              <span>Select 1 option</span>
            </div>
          )}

          {hasMultipleOptions && (
            <div className="options">
              {item.modifiers?.map(modifier => (
                <div key={modifier.id}>
                  {modifier.items.map(option => (
                    <div key={option.id} className="input-items">
                      <label htmlFor={`option-${option.id}`}>
                        {option.name} <span>R$ {option.price.toFixed(2)}</span> 
                      </label>
                      <input type="radio" id={`option-${option.id}`} name={`modifier-${modifier.id}`} />             
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          
          <C.Count>
            <img src={Minus} alt="minus"/>
              <span>1</span>
            <img src={Plus} alt="plus"/>
          </C.Count>
          <button>Add to order • ${item.price}</button> 
        </C.Info>
        
       
        
      </C.ModalContent>
    </C.Container>
  )
}
