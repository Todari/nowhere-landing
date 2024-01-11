import { ReactComponent as NO_WHERE } from './asset/no_where.svg';
import { ReactComponent as NOW_HERE } from './asset//now_here.svg';
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setScreenSize } from '../store/screenSizeReducer';

const Main = () => {
  const landingContainerRef = useRef(null);

  const { width, height } = useAppSelector((state) => state.screenSize);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize)
    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  }, [window.screen.width])

  const handleScreenSize = () => {
    dispatch(setScreenSize([window.screen.width, window.screen.height]))
    // setScreenSize({
    //   width: window.screen.width,
    //   height: window.screen.height
    // })
  }

  const { scrollYProgress } = useScroll({ target: landingContainerRef });
  // const firstOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4, 0.7, 0.8], [0.1, 1, 1, 0, 0, 1],);
  // const secondOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0, 1]);
  // const firstY = useTransform(scrollYProgress, [0.7, 0.8], [0, -0.08 * screenSize.width]);
  // const secondY = useTransform(scrollYProgress, [0.7, 0.8], [0, 0.08 * screenSize.width]);

  return (
    <div ref={landingContainerRef} className='h-[800vh] bg-black flex flex-col items-center'>
      <motion.div className='fixed h-screen w-full flex flex-col items-center justify-center'>
        <motion.div className='fixed w-3/4'
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1 }}
        // style={{
        //   opacity: firstOpacity,
        //   y: firstY
        // }}
        >
          <NO_WHERE />
        </motion.div>
        <motion.div className='fixed w-3/4 z-10'
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1, delay: 1.2 }}
        // style={{
        //   opacity: secondOpacity,
        //   y: secondY
        // }}
        >
          <NOW_HERE />

        </motion.div>
      </motion.div >
    </div>
  )
}

export default Main