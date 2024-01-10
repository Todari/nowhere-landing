import MenuButton from "./MenuButton";
import MENU_LIST from "../../constant/MenuList";

const SubMenuDropdown = () => {
  const menuList: JSX.Element[] = MENU_LIST.list.map(
    (menu) => <MenuButton key={menu.id} title={menu.title} path={menu.path} />
  );
  return (
    <div className="z-10 w-full flex justify-center items-center p-4">
      <div className="flex gap-4 flex-col">
        {menuList}
      </div>
    </div>
  )
}

export default SubMenuDropdown;