import {useEffect, useState, useRef} from 'react'
import * as C from './style'
import apiData from '../../services/api'
import { MenuDataProps, MenuItemProps, MenuSectionProps } from '../../interfaces/MenuData';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Modal from '../Modal';
import Button from '../Button';

import BurguerImage from '../../assets/img/burguer.jpg'
import DrinkImage from '../../assets/img/drink.svg';
import DessertImage from '../../assets/img/dessert.svg';

import { useSelector } from 'react-redux';
import { selectProductsCount } from '../../redux/cart/cart.Selector';


export default function MenuItem() {
  const [menuData, setMenuData] = useState<MenuDataProps | null>(null);
  const [burgerItems, setBurgerItems] = useState<MenuItemProps[]>([]);
  const [drinkItems, setDrinkItems] = useState<MenuItemProps[]>([]);
  const [dessertItems, setDessertItems] = useState<MenuItemProps[]>([]);
  const [isBurgerVisible, setIsBurgerVisible] = useState(true);
  const [isDrinkVisible, setIsDrinkVisible] = useState(true);
  const [isDessertVisible, setIsDessertVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState<MenuItemProps | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productsCount = useSelector(selectProductsCount)

  const burgerSectionRef = useRef<HTMLDivElement>(null);
  const drinkSectionRef = useRef<HTMLDivElement>(null);
  const dessertSectionRef = useRef<HTMLDivElement>(null);


  useEffect(()=>{
    async function fetchMenu (){
      try {
        const response = await apiData.get('/challenge/menu')
        setMenuData(response.data)

      } catch (error) {
        console.log(error)
      }
    }

    fetchMenu()
  }, [])

  useEffect(() => {
    if (menuData) {
      const burgersSection = menuData.sections.find(
        (section: MenuSectionProps) => section.name === "Burgers"
      );
      if (burgersSection) {
        setBurgerItems(burgersSection.items);
      }

      const drinksSection = menuData.sections.find(
        (section: MenuSectionProps) => section.name === "Drinks"
      );
      if (drinksSection) {
        setDrinkItems(drinksSection.items);
      }

      const dessertsSection = menuData.sections.find(
        (section: MenuSectionProps) => section.name === "Desserts"
      );
      if (dessertsSection) {
        setDessertItems(dessertsSection.items);
      }
    }
  }, [menuData]);

  const handleItemClick = (item: MenuItemProps) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSectionClick = (sectionName: string) => {
    if (sectionName === "Burgers" && burgerSectionRef.current) {
      burgerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === "Drinks" && drinkSectionRef.current) {
      drinkSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === "Desserts" && dessertSectionRef.current) {
      dessertSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <C.Container>
      <C.Menu>
        {menuData ? (
        menuData.sections.map(section => (
          <C.MenuItens key={section.id} onClick={() => handleSectionClick(section.name)}>
            {section.name === 'Burgers' && <img src={BurguerImage} alt="Burger" />}
            {section.name === 'Drinks' && <img src={DrinkImage} alt="Drink" />}
            {section.name === 'Desserts' && <img src={DessertImage} alt="Dessert" />}
            <p>{section.name}</p>
          </C.MenuItens>
        ))
      ) : (
        <p>Loading...</p> 
      )}
      </C.Menu>
      <C.ContentItems>
        <C.SectionItem ref={burgerSectionRef}>
        <h3 onClick={() => setIsBurgerVisible(!isBurgerVisible)}>
          Burgers {isBurgerVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h3>
          {isBurgerVisible && (
            burgerItems.length > 0 ? (
              burgerItems.map((item) => (
                <C.Item key={item.id} onClick={() => handleItemClick(item)}>
                  <C.ItemInfo>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span>Price: ${item.price}</span>
                  </C.ItemInfo>
                  {item.images && item.images.length > 0 && (
                    <img src={item.images[0].image} alt={item.name} />
                  )}
                </C.Item>
              ))
            ) : (
              <p>Loading...</p>
            )
          )}
        </C.SectionItem>

        <C.SectionItem ref={drinkSectionRef}>
        <h3 onClick={() => setIsDrinkVisible(!isDrinkVisible)}>
          Drinks {isDrinkVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h3>
          {isDrinkVisible && (
            drinkItems.length > 0 ? (
              drinkItems.map((item) => (
                <C.Item key={item.id} onClick={() => handleItemClick(item)}>
                  <C.ItemInfo>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span>Price: ${item.price}</span>
                  </C.ItemInfo>
                  {item.images && item.images.length > 0 && (
                    <img src={item.images[0].image} alt={item.name} />
                  )}
                </C.Item>
              ))
            ) : (
              <p>Loading...</p>
            )
          )}
        </C.SectionItem>

        <C.SectionItem ref={dessertSectionRef}>
        <h3 onClick={() => setIsDessertVisible(!isDessertVisible)}>
          Desserts {isDessertVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h3>
          {isDessertVisible && (
            dessertItems.length > 0 ? (
              dessertItems.map((item) => (
                <C.Item key={item.id} onClick={() => handleItemClick(item)}>
                  <C.ItemInfo>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span>Price: ${item.price}</span>
                  </C.ItemInfo>
                  {item.images && item.images.length > 0 && (
                    <img src={item.images[0].image} alt={item.name} />
                  )}
                </C.Item>
              ))
            ) : (
              <p>Loading...</p>
            )
          )}
        </C.SectionItem>
      </C.ContentItems>
      <C.ButtonContainer>
        <Button>Your basket • {productsCount} {productsCount === 1 ? 'item' : 'items'}</Button>
      </C.ButtonContainer>
      
      {isModalOpen && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </C.Container>
    
  )
}


