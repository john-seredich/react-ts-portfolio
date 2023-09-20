import pokedexImg from "./assets/images/pokedex.png";
import dashboardImg from "./assets/images/dashboard.png";
import genshinImg from "./assets/images/genshin.png";

export const projects = [
  {
    name: "Pokedex Website",
    description:
      "Search, filter, and find your favorite Pokemon from all 8 generations. This includes details stats about all 1132 Pokemon and their evolutions.",
    color: `linear-gradient(45deg, #ff49495a, #bf3030, #bf3030),
    url("${pokedexImg}")`,

    id: 1,
    code: "https://github.com/john-seredich/pokedex",
    demo: "https://john-seredich.github.io/pokedex/",
  },
  {
    name: "Tremor Dashboard",
    description:
      "Admin Dashboard built using React, Typescript, and Tremor UI Components.",
    color: `linear-gradient(45deg, #1a893467, #1a8934, #1a8934),
     url("${dashboardImg}")`,
    id: 2,
    code: "https://github.com/john-seredich/tremor-dashboard",
    demo: "https://john-seredich.github.io/tremor-dashboard/",
  },

  {
    name: "Genshin Hunter",
    description:
      "A Genshin Impact Database built using ReactJS, React Query, React Router, and TypeScript.",
    color: `linear-gradient(45deg, #0080807d, #008080, #008080),
   url("${genshinImg}")`,
    id: 3,
    code: "https://github.com/john-seredich/genshinhunter",
    demo: "https://john-seredich.github.io/genshinhunter/#/",
  },
];
