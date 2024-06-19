import {useEffect, useState} from 'react'
import * as C from './style'
import apiData from '../../services/api'
import { MenuDataProps } from '../../interfaces/MenuData';


export default function MenuItem() {
  const [menuData, setMenuData] = useState<MenuDataProps | null>(null);

  useEffect(()=>{
    async function fetchMenu (){
      try {
        const response = await apiData.get('/challenge/menu')
        console.log('API Response:', response);

        setMenuData(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMenu()
  }, [])


  return (
    <C.Menu>
      {menuData ? (
      menuData.sections.map(section => (
        <C.MenuItens key={section.id}>
          {section.images && section.images.length > 0 && (
            <img src={section.images[0].image} alt={section.name} />
          )}
          <p>{section.name}</p>
        </C.MenuItens>
      ))
    ) : (
      <p>Loading...</p> 
    )}
    </C.Menu>
  )
}


