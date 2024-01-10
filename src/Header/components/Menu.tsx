import MenuButton from "./MenuButton"
import MENU_LIST from "../../constant/MenuList"

const Menu = () => {

  const menuList: JSX.Element[] = MENU_LIST.list.map(
    (menu) => <MenuButton key={menu.id} title={menu.title} path={menu.path} />
  );

  return (
    <div className="flex gap-4">
      {menuList}
    </div>
  )
}

export default Menu