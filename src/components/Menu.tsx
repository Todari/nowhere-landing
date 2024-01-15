import MenuButton from "./MenuButton"
import MENU_LIST from "../constant/MenuList"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Menu = () => {

  const menuList: JSX.Element[] = MENU_LIST.list.map(
    (menu) => <MenuButton key={menu.id} title={menu.title} path={menu.path} />
  );

  return (

    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    // <div className="flex gap-4">
    //   {menuList}
    // </div>
  )
}

export default Menu