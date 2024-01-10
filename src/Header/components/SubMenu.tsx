import { ReactComponent as SUBMENU } from "../asset/header_submenu.svg";
import { ReactComponent as SUBMENU_CLOSE } from "../asset/header_submenu_close.svg";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setShowSubMenuDropdown } from "../../store/headerStateReducer";

const SubMenu = () => {
  const { showHeader, showSubMenuDropdown } = useAppSelector((state) => state.headerState)
  const dispatch = useAppDispatch();
  
  return (
    <div>
      {!showSubMenuDropdown ?
        <div className="flex" onClick={() => { dispatch(setShowSubMenuDropdown(true))}} >
          <SUBMENU className="h-8 w-8" />
        </div>
        : <div className="flex" onClick={() => { dispatch(setShowSubMenuDropdown(false)) }} >
          <SUBMENU_CLOSE className="h-8 w-8" />
        </div>}

    </div>
  )
}

export default SubMenu;