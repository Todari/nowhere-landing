import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as NOWHERE_LOGO } from './asset/nowhere_logo.svg';
import Menu from "./components/Menu";
import SubMenu from "./components/SubMenu";

type HeaderProp = {
  visible: boolean
}

const Header = ({ visible }: HeaderProp) => {
  const viewWidth = window.screen.width;
  const navigate = useNavigate();
  const goHome = () => { navigate('/') }
  const [y, setY] = useState(0);

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

  useEffect(() => {
    if (visible) {
      setY(0)
    } else {
      setY(-80)
    }
  }, [visible])

  return (
    <div className='fixed top-0 w-full flex flex-row gap-4 h-16 justify-center items-center bg-black'>
      <motion.div className='flex flex-row gap-4 h-16 items-center bg-black w-5/6'
        animate={{ y }}
        transition={{ duration: 0.3 }}>
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
          < Menu /> :
          <SubMenu />
        }
      </motion.div >
    </div>
  )
}

export default Header;