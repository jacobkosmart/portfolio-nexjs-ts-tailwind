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

export interface ISkills {
  id: number;
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  img_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "Vanilla-JS"
  | "React"
  | "Vue.js"
  | "Firebase"
  | "TypeScript";
