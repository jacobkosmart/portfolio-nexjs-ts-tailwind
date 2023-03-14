import { IProject, IService, ISkills } from "../type";
import { RiComputerLine, RiFlutterFill } from "react-icons/ri";
import { FaReact, FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { MdReportProblem } from "react-icons/md";
import { GrAppleAppStore } from "react-icons/gr";

export const services: IService[] = [
  {
    id: 1,
    Icon: GrAppleAppStore,
    title: "iOS Development",
    about:
      "Build Stunning modern iOS App by using <b>SwiftUI</b> and <b>Combine</b>",
  },
  {
    id: 2,
    Icon: RiFlutterFill,
    title: "Flutter Development",
    about:
      "Create Outstanding mobile app using flutter framework suited for <b>Android</b>, <b>iOS</b> and <b>Web</b>",
  },
  {
    id: 3,
    Icon: FaReact,
    title: "Frontend Development",
    about:
      "Build a beautiful and scalable SPA using <b> HTML</b>, <b>SCSS</b>, <b>React</b> and <b>Vue.js</b>",
  },
  {
    id: 4,
    Icon: FaServer,
    title: "Network",
    about:
      "Design and install network system such as cabling, routers, switches and servers",
  },
  {
    id: 5,
    Icon: FaPhotoVideo,
    title: "UI Edit",
    about:
      "Handle stunning user interface and outstanding photos and videos editing using photoshop and Premier Pro",
  },
  {
    id: 6,
    Icon: GiTalk,
    title: "Communication",
    about:
      "Fluent verbal and written English and familiar with hanging out with team member",
  },
];

export const languages: ISkills[] = [
  {
    id: 1,
    name: "iOS",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    id: 2,
    name: "Flutter",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    id: 3,
    name: "JavaScript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    id: 4,
    name: "TypeScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    id: 5,
    name: "React",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    id: 6,
    name: "Vue.js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    id: 7,
    name: "Firebase",
    level: "60%",
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
    name: "awesome KR",
    description: "All you need to travel Korea",
    img_path: "/images/awesomeKR.png",
    deployed_url: "https://apps.apple.com/us/app/awesome-kr/id1614941403",
    github_url: "https://github.com/jacobkosmart/awesomeKR-App",
    category: ["iOS"],
    key_techs: ["SwiftUI", "MapKit", "MVVM", "Combine"],
  },
  {
    id: 2,
    name: "Endangered Animal KR",
    description: "To show and describe Endangered animals in Korea",
    img_path: "/images/endangeredAnimal.png",
    deployed_url:
      "https://apps.apple.com/us/app/%EB%A9%B8%EC%A2%85%EC%9C%84%EA%B8%B0%EB%8F%99%EB%AC%BC%EC%82%AC%EC%A0%84/id1611508119",
    github_url: "https://github.com/jacobkosmart/endangered-animals-kr-app",
    category: ["iOS"],
    key_techs: ["SwiftUI", "MapKit", "MVVM", "Combine"],
  },
  {
    id: 3,
    name: "BST(BMI/StopWatch/TodoList)",
    description:
      "To check your BMI, recode sec time using stopwatch and manage your todo lists",
    img_path: "/images/bst.png",
    deployed_url:
      "https://play.google.com/store/apps/details?id=info.jacobko.bst&hl=ko",
    github_url: "https://github.com/jacobkosmart/bmi-stopwatch-todo-flutter",
    category: ["Flutter"],
    key_techs: ["Firebase", "Splash Screen", "StatefulWidget"],
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "Current weather condition in your geological position to check degree, fine dust etc.",
    img_path: "/images/weather.png",
    deployed_url:
      "https://play.google.com/store/apps/details?id=info.jacobko.weather_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    github_url: "https://github.com/jacobkosmart/weather-app-flutter",
    category: ["Flutter"],
    key_techs: ["Weather-API", "HTTP", "PlayStore"],
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    name: "Quiz App",
    description: "Simple quiz App with vanilla JS",
    img_path: "/images/quiz_app.gif",
    deployed_url: "https://quiz1.jacobko.info/",
    github_url: "https://github.com/jacobkosmart/24.May.21_QuizApp_Vanilla-JS",
    category: ["Vanilla-JS"],
    key_techs: ["Vanilla-JS", "HTML", "CSS"],
  },
  {
    id: 10,
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
