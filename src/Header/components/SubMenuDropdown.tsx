import MenuButton from "./MenuButton";
import MENU_LIST from "../../constant/MenuList";
import { useAppSelector } from "../../hooks";

const SubMenuDropdown = () => {
  const { showSubMenuDropdown } = useAppSelector(state => state.headerState)
  const menuList: JSX.Element[] = MENU_LIST.list.map(
    (menu) => <MenuButton key={menu.id} title={menu.title} path={menu.path} />
  );
  return (
    <div className={
      showSubMenuDropdown ?
        "z-10 w-full flex justify-center items-center p-4 bg-black"
        :
        "z-10 w-full flex justify-center items-center p-4 bg-black pointer-events-none"
    }
    >
      <div className="flex gap-4 flex-col">
        {menuList}
      </div>
    </div >
  )
}

export default SubMenuDropdown;