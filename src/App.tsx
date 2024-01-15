import React from 'react';
import './App.css';
import Main from './Main/Main'
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Artists from './Artists/Artists';
import Labels from './Labels/Labels';
import Albums from './Albums/Albums';
import ArtistInfo from './Artists/ArtistInfo';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { setShowHeader, setShowSubMenuDropdown } from '../src/store/headerStateReducer';
import { setScreenSize } from './store/screenSizeReducer';
import ARTIST_LIST from './constant/ArtistList';

type scrollPosition = {
  prev: number,
  current: number
}

function App() {
  const [scrollPosition, setScrollPosition] = useState<scrollPosition>({ prev: window.scrollY, current: window.scrollY })
  const { width } = useAppSelector((state) => state.screenSize);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize)
    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  }, [window.screen.width])

  const handleScreenSize = () => {
    dispatch(setScreenSize([window.screen.width, window.screen.height]));
    if (width >= 768) {
      dispatch(setShowSubMenuDropdown(false));
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [window.scrollY])

  const handleScroll = () => {
    setScrollPosition({ prev: scrollPosition.current, current: window.scrollY });
    dispatch(setShowHeader(scrollPosition.prev > scrollPosition.current));
    dispatch(setShowSubMenuDropdown(false))
    if (window.scrollY < 50) {
      dispatch(setShowHeader(true));
    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/about-us' Component={AboutUs} />
        <Route path='/artists' Component={Artists} />
        <Route path='/artists/:path' Component={ArtistInfo} />
        <Route path='/labels' Component={Labels} />
        <Route path='/albums' Component={Albums} />
      </Routes>
    </div>
  );
}

export default App;
