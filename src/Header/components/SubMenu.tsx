import { ReactComponent as SUBMENU } from "../asset/header_submenu.svg";
import { ReactComponent as SUBMENU_CLOSE } from "../asset/header_submenu_close.svg";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setShowSubMenuDropdown } from "../../store/headerStateReducer";

const SubMenu = () => {
  const { showSubMenuDropdown } = useAppSelector((state) => state.headerState)
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      {!showSubMenuDropdown
      ?
      <SUBMENU className="h-8 w-8"  onClick={() => { dispatch(setShowSubMenuDropdown(true)) }} />
      :
      <SUBMENU_CLOSE className="h-8 w-8"  onClick={() => { dispatch(setShowSubMenuDropdown(false)) }} />}
    </div>
  )
}

export default SubMenu;