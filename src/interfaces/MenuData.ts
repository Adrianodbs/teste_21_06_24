export interface MenuImageProps {
  id: number;
  image: string;
}

export interface MenuModifierItemProps {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

export interface MenuModifierProps {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: MenuModifierItemProps[];
}

export interface MenuItemProps{
  id: number;
  image: string;
  name:string;
  description?: string;
  price: number;
  images: MenuImageProps[];
  modifiers?: MenuModifierProps[];
  quantity?: number
}

export interface MenuSectionProps {
  id: number;
  name: string;
  images: MenuImageProps[];
  items: MenuItemProps[];
}

export interface MenuDataProps {
  sections: MenuSectionProps[];
}