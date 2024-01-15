type Menu = {
  id: number,
  title: string,
  path: string,
}

type MenuList = {
  list: Menu[]
}

const MENU_LIST: MenuList =
{
  list: [
    {
      id: 0,
      title: "About Us",
      path: '/about-us',
    },
    {
      id: 1,
      title: "Artists",
      path: '/artists',
    },
    {
      id: 2,
      title: "Labels",
      path: '/labels',
    },
    {
      id: 3,
      title: "Albums",
      path: '/albums',
    },]
}

export default MENU_LIST