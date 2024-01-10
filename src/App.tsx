import React from 'react';
import './App.css';
import Main from './Main/Main'
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

type scrollPosition = {
  prev: number,
  current: number
}

function App() {
  const [scrollPosition, setScrollPosition] = useState<scrollPosition>({ prev: window.scrollY, current: window.scrollY })
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [window.scrollY])

  const handleScroll = () => {
    setScrollPosition({ prev: scrollPosition.current, current: window.scrollY });
    setIsScrollDown(scrollPosition.prev <= scrollPosition.current)
    if (window.scrollY < 50) {
      setIsScrollDown(false)
    }
  }

  return (
    <div className="App">
      <Header visible={!isScrollDown} />
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/about-us' Component={AboutUs} />
      </Routes>
    </div>
  );
}

export default App;
