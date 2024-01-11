import { ReactComponent as NO_WHERE } from './asset/no_where.svg';
import { ReactComponent as NOW_HERE } from './asset//now_here.svg';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Main = () => {
  const landingContainerRef = useRef(null);

  return (
    <div ref={landingContainerRef} className='h-[800vh] bg-black flex flex-col items-center'>
      <motion.div className='fixed h-screen w-full flex flex-col items-center justify-center'>
        <motion.div className='fixed w-3/4'
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1 }}
        >
          <NO_WHERE />
        </motion.div>
        <motion.div className='fixed w-3/4 z-10'
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <NOW_HERE />

        </motion.div>
      </motion.div >
    </div>
  )
}

export default Main