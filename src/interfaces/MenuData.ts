export interface MenuImageProps {
  id: number;
  image: string;
}

export interface MenuItemProps{
  id: number;
  image: string;
  description?: string;
  price: number;
  images: MenuImageProps[];
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