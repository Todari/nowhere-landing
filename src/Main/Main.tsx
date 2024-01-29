import { ReactComponent as NO_WHERE } from '../asset/no_where.svg';
import { ReactComponent as NOW_HERE } from '../asset//now_here.svg';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { setTransparent } from "@/store/headerStateReducer";
import { useAppDispatch } from "../hooks";

const Main = () => {
  const landingContainerRef = useRef(null);
  const dispatch = useAppDispatch();
  dispatch(setTransparent(true));
  

  return (
    <div ref={landingContainerRef} className='flex flex-col items-center'>
      <motion.div className='h-[100dvh] w-full flex flex-col items-center justify-center bg-gradient-to-bl from-yellow-500/30 to-40%'>
        <motion.div className='fixed w-3/4'
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1 }}
        >
          <NO_WHERE />
        </motion.div>
        <motion.div className='fixed w-3/4'
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <NOW_HERE />
        </motion.div>
        <motion.div className='fixed h-[100dvh] w-3/4 flex flex-col items-center justify-center gap-2'
        animate={{ opacity: [0, 1, 1] }}
        transition={{ duration: 1, delay: 2.4 }}>
          <NO_WHERE />
          <NOW_HERE />
        </motion.div>
      </motion.div >
      <div className="bg-white h-[100dvh] w-full z-10 flex flex-col justify-center items-center">
        <div className='text-black text-2xl font-bold'>
          Contact Us
        </div>
      </div>
    </div>
  )
}

export default Main