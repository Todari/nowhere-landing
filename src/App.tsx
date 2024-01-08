import React from 'react';
import Main from './main/Main'
import './App.css';
import Header from './header/Header';
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
        {/* <Route path='/apply' Component={Apply} /> */}
      </Routes>
    </div>
  );
}

export default App;
