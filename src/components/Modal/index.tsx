import { MenuItemProps } from "../../interfaces/MenuData";
import * as C from './style'
import CloseIcon from '../../assets/img/close.svg'
import Minus from '../../assets/img/Minus_btn.svg'
import Plus from '../../assets/img/plus_btn.svg'

import {useDispatch} from 'react-redux'
import { addProductToCart} from "../../redux/cart/actions";
import Button from "../Button";
import { useEffect, useState } from "react";


interface ModalProps {
  item: MenuItemProps | null;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  useEffect(() => {
    if (item) {
      setSelectedModifierPrice(item.price);
    }
  }, [item]);
  const [quantity, setQuantity] = useState(1);
  const [selectedModifierPrice, setSelectedModifierPrice] = useState(item ? item.price : 0);
  const dispatch = useDispatch()
  if (!item) return null;

  const hasMultipleOptions = item.modifiers && item.modifiers.some(modifier => modifier.items.length > 1) || false;
  const hasImage = item.images && item.images.length > 0;

  const handleModifierChange = (price: number) => {
    setSelectedModifierPrice(price);
  };

  
  const handleAddProduct = () => {
    const itemWithQuantity = { ...item, quantity, price: selectedModifierPrice }; 
    dispatch(addProductToCart(itemWithQuantity));
    onClose(); 
  };

  const incrementCount = () => {
    setQuantity(quantity + 1);
  }

  const decrementCount = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

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
                      <input type="radio" id={`option-${option.id}`} name={`modifier-${modifier.id}`} onChange={() => handleModifierChange(option.price)} />             
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          
          <C.Count>
            <button onClick={decrementCount}>
              <img src={Minus} alt="minus"/>
            </button>         
            <span>{quantity}</span> 
            <button onClick={incrementCount}>
              <img src={Plus} alt="plus"/>  
            </button>
          </C.Count>
          <Button onClick={handleAddProduct}>Add to order • R$ {selectedModifierPrice.toFixed(2)}</Button>
        </C.Info>
        
       
        
      </C.ModalContent>
    </C.Container>
  )
}
