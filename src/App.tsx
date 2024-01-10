import React from 'react';
import './App.css';
import Main from './Main/Main'
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Artists from './Artists/Artists';
import Labels from './Labels/Labels';
import Albums from './Albums/Albums';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { setShowHeader, setShowSubMenuDropdown } from '../src/store/headerStateReducer';

type scrollPosition = {
  prev: number,
  current: number
}

function App() {
  const [scrollPosition, setScrollPosition] = useState<scrollPosition>({ prev: window.scrollY, current: window.scrollY })
  const { showHeader, showSubMenuDropdown } = useAppSelector((state) => state.headerState)
  const dispatch = useAppDispatch();

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
      <Header visible={showHeader} />
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/about-us' Component={AboutUs} />
        <Route path='/artists' Component={Artists} />
        <Route path='/labels' Component={Labels} />
        <Route path='/albums' Component={Albums} />
      </Routes>
    </div>
  );
}

export default App;
