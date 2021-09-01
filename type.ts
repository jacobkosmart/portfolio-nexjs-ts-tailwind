import { IconType } from "react-icons";

export interface INavItems {
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}

export interface IService {
  id: number;
  title: string;
  about: string;
  Icon: IconType;
}
