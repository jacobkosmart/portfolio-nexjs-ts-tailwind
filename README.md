# π Jacobko Portfolio

<a href="https://portfolio.jacobko.info/" target="_blank">Live Demo</a>

![portpolio gif](https://drive.google.com/uc?export=view&id=1-7dHbudLVChJFfoRtrmV_sXuXFng5OzZ)

## π» 1.νλ‘μ νΈ μκ°

### π μ¬μ©κΈ°μ  λ° μΈμ΄

- Next.js with TypeScript

- Tailwind CSS

- Farmer motion

- Dark mode

### β° κ°λ° κΈ°κ°

2021-09-01 ~ 2021-09-19

## π 2.νλ‘μ νΈ λ΄μ©

### π μ£Όμ κΈ°λ₯

- Next.js λ₯Ό μ¬μ©νμ¬ μ μ  νμ΄μ§ μμ±

- κ°λ΅νκ² about, resume, projects νμ΄μ§μ λμ  animation μλ

- μ¬λ¬ Projects λ₯Ό categorize λ° κ°κ°μ github, live-demo λ§ν¬ μ μ©

- Dark / Light mode μ§μ

- Fully responsive web design

#### π μ€μΉ ν¨ν€μ§

```bash
# next.js
npx create-next-app

# typescript
yarn add --dev typescript @types/react

# tailwind
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

# react-icons
yarn add react-icons

# next-themes (dark mode)
yarn add next-themes

# framer-motion
yarn add framer-motion@3.10.3
```

## π 3.μ£Όμ μ½λ

### 1.μ£Όμ λ΄μ©λ€μ DB ν ν΄μ component μ¬μ© λ° type.ts λ‘ μ μ²΄μ  type.ts κ³Ό index.ts μΌκ΄ κ΄λ¦¬

```ts
// in data.ts

export const services: IService[] = [
  {
    id: 1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>, <b>SCSS</b>, <b>React</b> and <b>Vue.js</b>",
  },
  {
    id: 2,
    Icon: FaServer,
    title: "Network",
    about:
      "Design and install network system such as cabling, routers, switches and servers",
  }, ...


export const languages: ISkills[] = [
  {
    id: 1,
    name: "JavaScript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    id: 2,
    name: "TypeScript",
    level: "60%",
    Icon: BsCircleFill,
  },

export const projectsData: IProject[] = [
  {
    id: 1,
    name: "Subway landing page",
    description: "This a beautiful a subway landing page with motion",
    img_path: "/images/subway.png",
    deployed_url: "https://subway.jacobko.info/",
    github_url: "https://github.com/jacobkosmart/12.Apr.21_Subway_JS_CSS",
    category: ["Vanilla-JS"],
    key_techs: ["Vanilla JS", "GSAP", "Lodash", "ScrollMagic API"],
  },
  {
    id: 2,
    name: "Countdown page",
    description: "Countdown page with vanilla JS",
    img_path: "/images/countdown.gif",
    deployed_url: "https://countdown.jacobko.info/",
    github_url: "https://github.com/jacobkosmart/8.May.21_Countdown_Vanilla-JS",
    category: ["Vanilla-JS"],
    key_techs: ["Vanilla-JS", "HTML", "CSS"],
  },
```

```ts
// type.ts

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
```

```ts
// in components index.ts
export { default as Sidebar } from "./Sidebar";
export { default as Navbar } from "./Nav/Navbar";
export { default as NavItems } from "./Nav/NavItems";
export { default as ServiceCard } from "./ServiceCard";
export { default as Bar } from "./Bar";
export { default as ProjectCard } from "./ProjectTab/ProjectCard";
export { default as ProjectNavbar } from "./ProjectTab/ProjectNavbar";
export { default as ProjectNavItem } from "./ProjectTab/ProjectNavItem";
```

### 2.Projects component μ¬μ©ν΄μ motion effect μ μ© (farmer motion)

```tsx
return (
  <motion.div
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className="px-5 py-2 overflow-y-scroll"
    style={{ height: "65vh" }}
  >
    <ProjectNavbar
      handlerFilterCategory={handlerFilterCategory}
      active={active}
    />

    <motion.div
      className="relative grid grid-cols-12 gap-4 my-3"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          variants={fadeInUP}
        >
          <ProjectCard
            project={project}
            showDetail={showDetail}
            setShowDetail={setShowDetail}
          />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);
```

## π‘ 4.Reference

Next.js - [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)

Tailwindcss with next.js - [https://tailwindcss.com/docs/guides/nextjs](https://tailwindcss.com/docs/guides/nextjs)

Framer Motion - [https://www.framer.com/docs/introduction/](https://www.framer.com/docs/introduction/)

Backbench Coder - [https://youtu.be/atebfXxl9B4](https://youtu.be/atebfXxl9B4)
