import { IProject, IService, ISkills } from "../type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { MdReportProblem } from "react-icons/md";

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
  },
  {
    id: 3,
    Icon: FaPhotoVideo,
    title: "UI Edit",
    about:
      "Handle stunning user interface and outstanding photos and videos editing using photoshop and Premier Pro",
  },
  {
    id: 4,
    Icon: BsCodeSlash,
    title: "Clean cord",
    about: "Focus on writing maintainable, modular and refactoring clean code",
  },
  {
    id: 5,
    Icon: GiTalk,
    title: "Communication",
    about:
      "Fluent verbal and written English and familiar with hanging out with team member",
  },
  {
    id: 6,
    Icon: MdReportProblem,
    title: "Problem solving",
    about:
      "Establish high-quality user requirements on the basis of identified business needs",
  },
];

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
  {
    id: 3,
    name: "React",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    id: 4,
    name: "Vue.js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    id: 5,
    name: "Firebase",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    id: 6,
    name: "SASS",
    level: "80%",
    Icon: BsCircleFill,
  },
];
export const tools: ISkills[] = [
  {
    id: 1,
    name: "English",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    id: 2,
    name: "Photoshop",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    id: 3,
    name: "PremierPro",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    id: 4,
    name: "Presentation",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    id: 5,
    name: "Solving Problem",
    level: "80%",
    Icon: BsCircleFill,
  },
];

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
  {
    id: 3,
    name: "Quiz App",
    description: "Simple quiz App with vanilla JS",
    img_path: "/images/quiz_app.gif",
    deployed_url: "https://quiz1.jacobko.info/",
    github_url: "https://github.com/jacobkosmart/24.May.21_QuizApp_Vanilla-JS",
    category: ["Vanilla-JS"],
    key_techs: ["Vanilla-JS", "HTML", "CSS"],
  },
  {
    id: 4,
    name: "Random Recipe App",
    description:
      "Search delicious food recipe with ingredient , menu and youtube tutorials",
    img_path: "/images/random_recipe.gif",
    deployed_url: "https://recipe.jacobko.info/",
    github_url:
      "https://github.com/jacobkosmart/28.May.21_randomRecipe_Vanilla-JSS",
    category: ["Vanilla-JS"],
    key_techs: ["Vanilla-JS", "mealDB API"],
  },
  {
    id: 5,
    name: "Todo List DnD App",
    description: "Simple todo list app with dynamic drag and drop ",
    img_path: "/images/todolist.gif",
    deployed_url: "https://todo.jacobko.info/",
    github_url: "https://github.com/jacobkosmart/todolist-react-typesctipt",
    category: ["React", "TypeScript"],
    key_techs: [
      "React",
      "TypeScript",
      "React beautiful DnD",
      "Sass",
      "PWA",
      "LocalStorage",
    ],
  },
  {
    id: 6,
    name: "Dictionary app",
    description:
      "Search words meaning with definition, example and synonym which selected a variety of languages",
    img_path: "/images/dic.gif",
    deployed_url: "https://dic.jacobko.info/",
    github_url:
      "https://github.com/jacobkosmart/dictionary-react-ts-material_ui",
    category: ["React", "TypeScript"],
    key_techs: [
      "React",
      "TypeScript",
      "Free Dictionary API",
      "material UI",
      "Axios",
      "Sass",
    ],
  },
  {
    id: 7,
    name: "Book Search App",
    description:
      "Search book title including short description, publish date, publisher, price, isbn and linked detail information ",
    img_path: "/images/book_search.gif",
    deployed_url: "https://book.jacobko.info/",
    github_url:
      "https://github.com/jacobkosmart/12.June.21_SearchBookApp_VueJS",
    category: ["Vue.js"],
    key_techs: ["Vue.js", "Vuex", "Bootstrap5", "Sass", "Kakao Open API"],
  },
  {
    id: 8,
    name: "Twitter Chat App - Clone",
    description:
      "It looks like twitter chat and upload photos including authentication, real time DB to use firebase ",
    img_path: "/images/chat_app.gif",
    deployed_url: "https://jacobko.info/chat-app-react-firebase/",
    github_url: "https://github.com/jacobkosmart/chat-app-react-firebase",
    category: ["React", "Firebase"],
    key_techs: ["React", "Firebase", "FireStore", "Authentication"],
  },
  {
    id: 9,
    name: "Restaurant landing page",
    description:
      "Restaurant menu lading page with fully responsive design to practice tailwind css",
    img_path: "/images/tailwind.gif",
    deployed_url: "https://restaurant.jacobko.info/",
    github_url:
      "https://github.com/jacobkosmart/responsive-web-react-tailwind-03",
    category: ["React"],
    key_techs: ["React", "Tailwind CSS"],
  },
  {
    id: 10,
    name: "Business site landing page",
    description:
      "Business site lading page with fully responsive design to practice style-component",
    img_path: "/images/business.gif",
    deployed_url:
      "https://github.com/jacobkosmart/responsive-web-react-styledcomponent-04",
    github_url:
      "https://github.com/jacobkosmart/responsive-web-react-styledcomponent-04",
    category: ["React"],
    key_techs: ["React", "Style-component"],
  },
  {
    id: 11,
    name: "Portfolio",
    description: "Describe Jacob's career and collection of projects",
    img_path: "/images/portfolio.gif",
    deployed_url: "https://portfolio.jacobko.info/",
    github_url: "https://github.com/jacobkosmart/portfolio-nexjs-ts-tailwind",
    category: ["Next.js", "TypeScript"],
    key_techs: ["Next.js", "TypeScript", "TailwinCss"],
  },
];
