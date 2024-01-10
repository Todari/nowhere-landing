import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as NOWHERE_LOGO } from './asset/nowhere_logo.svg';
import Menu from "./components/Menu";
import SubMenu from "./components/SubMenu";
import SubMenuDropdown from "./components/SubMenuDropdown";

type HeaderProp = {
  visible: boolean
}

const Header = ({ visible }: HeaderProp) => {
  const viewWidth = window.screen.width;
  const navigate = useNavigate();
  const goHome = () => { navigate('/') }
  const [headerY, setHeaderY] = useState(0);
  const [subMenuY, setSubMenuY] = useState(0);

  const [screenSize, setScreenSize] = useState({
    width: window.screen.width,
    height: window.screen.height
  })

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize)
    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  }, [window])

  const handleScreenSize = () => {
    setScreenSize({
      width: window.screen.width,
      height: window.screen.height
    })
  }

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = (value: boolean) => {
    setOpenDropdown(value);
  }

  useEffect(() => {
    if (visible) {
      setHeaderY(0)
    } else {
      setHeaderY(-80)
    }
  }, [visible])

  useEffect(() => {
    if (openDropdown) {
      setSubMenuY(0)
    } else {
      setSubMenuY(-240)
    }
  }, [openDropdown])

  return (
    <motion.div className="fixed flex w-full flex-col z-10"
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
          {screenSize.width >= 768 ?
            <Menu /> :
            <SubMenu handleDropdown={handleDropdown} openHeader={visible} />
          }
        </div >
      </div>
      <motion.div className=''
        animate={{ y: subMenuY }}
        transition={{ duration: 0.2 }}>
        <SubMenuDropdown />
      </motion.div>
    </motion.div>
  )
}

export default Header;