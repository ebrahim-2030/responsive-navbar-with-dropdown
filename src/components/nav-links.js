export const navLinks = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 2,
    name: "about",
    path: "/about",
  },
  {
    id: 3,
    name: "skills",
    path: "/skills",
    sublinks: [
      {
        id: 1,
        name: "Frontend Dev (React, Tailwind)",
        path: "/skills/front-development",
      },
      {
        id: 2,
        name: "Backend Dev (Node.js, Express)",
        path: "/skills/backend-development",
      },
      {
        id: 3,
        name: "Database Dev (MySQL, MongoDB)",
        path: "/services/database-development",
      },
    ],
  },
  {
    id: 4,
    name: "contact",
    path: "/contact",
  },
];
