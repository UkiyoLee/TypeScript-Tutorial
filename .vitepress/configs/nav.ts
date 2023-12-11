import { DefaultTheme } from "vitepress";

const navbar: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: '/',
  },
  {
    text: '指南',
    link: '/guide',
  },
  {
    text: 'JavaScript API',
    link: '/api'
  },
];

export default navbar;