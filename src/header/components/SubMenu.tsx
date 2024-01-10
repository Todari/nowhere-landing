import { useEffect, useState } from "react";
import { ReactComponent as SUBMENU } from "../asset/header_submenu.svg";
import { ReactComponent as SUBMENU_CLOSE } from "../asset/header_submenu_close.svg";

type SubMenuProp = {
  handleDropdown: (value: boolean) => void
  openHeader: boolean
}

const SubMenu = ({ handleDropdown, openHeader }: SubMenuProp) => {
  const [openDropdown, setOpenDropdown] = useState(false)

  useEffect(() => {
    if (!openHeader) {
      setOpenDropdown(false)
    }
    handleDropdown(openDropdown)
  }, [openDropdown, openHeader])

  return (
    <div>
      {!openDropdown ?
        <div className="flex" onClick={() => { setOpenDropdown(true) }} >
          <SUBMENU className="h-8 w-8" />
        </div>
        : <div className="flex" onClick={() => { setOpenDropdown(false) }} >
          <SUBMENU_CLOSE className="h-8 w-8" />
        </div>}

    </div>
  )
}

export default SubMenu;