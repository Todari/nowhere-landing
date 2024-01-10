import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setShowSubMenuDropdown } from "../../store/headerStateReducer";

type MenuButtonProp = {
  title: string,
  path: string,
}

const MenuButton = ({ title, path }: MenuButtonProp) => {
  const navigate = useNavigate();
  const goPath = () => { navigate(path); }
  const { showHeader, showSubMenuDropdown } = useAppSelector((state) => state.headerState)
  const dispatch = useAppDispatch();

  return (
    <div className='py-2 px-4'>
      <div className='text-white' onClick={() => { goPath(); dispatch(setShowSubMenuDropdown(false))}}>
        {title}
      </div>
    </div>
  )
}

export default MenuButton;