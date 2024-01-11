import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as NOWHERE_LOGO } from './asset/nowhere_logo.svg';
import Menu from "./components/Menu";
import SubMenu from "./components/SubMenu";
import SubMenuDropdown from "./components/SubMenuDropdown";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setShowSubMenuDropdown } from '../store/headerStateReducer';

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => { navigate('/'); dispatch(setShowSubMenuDropdown(false)) }
  const [headerY, setHeaderY] = useState(0);
  const [subMenuY, setSubMenuY] = useState(0);
  const { showHeader, showSubMenuDropdown } = useAppSelector((state) => state.headerState)
  const { width } = useAppSelector((state => state.screenSize));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showHeader) {
      setHeaderY(0)
    } else {
      setHeaderY(-80)
    }
  }, [showHeader])

  useEffect(() => {
    if (showSubMenuDropdown) {
      setSubMenuY(64)
    } else {
      setSubMenuY(-240)
    }
  }, [showSubMenuDropdown])

  return (
    <div className="flex justify-center h-min shrink">
      <motion.div className="fixed flex w-full flex-col z-20 h-min" onClick={() => { console.log("clicked") }}
        animate={{ y: headerY }}
        transition={{ duration: 0.3 }}>
        <div className='top-0 w-full flex flex-row gap-4 h-16 justify-center items-center bg-black z-20'>
          <div className='flex flex-row gap-4 h-16 items-center bg-black w-5/6'>

            <div className='grow flex items-center justify-start'>
              <motion.div className="" onClick={goHome}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}>
                <NOWHERE_LOGO className="h-10" />
              </motion.div>
            </div>
            {width >= 768 ?
              <Menu /> :
              <SubMenu />
            }
          </div >
        </div>
      </motion.div>
      <motion.div className='fixed w-full z-10'
        animate={{ y: subMenuY }}
        transition={{ duration: 0.3 }}>
        <SubMenuDropdown />
      </motion.div>
    </div>
  )
}

export default Header;