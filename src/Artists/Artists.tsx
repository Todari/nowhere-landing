import { useEffect, useState } from "react";

import ArtistCard from "./components/ArtistCard";

const Artists = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.screen.width,
    height: window.screen.height
  })

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize)
    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  }, [window.screen.width])

  const handleScreenSize = () => {
    setScreenSize({
      width: window.screen.width,
      height: window.screen.height
    })
  }


  return (
    <div className="bg-black p-12">
      {screenSize.width < 768 ?
        <div className="py-20 flex flex-col gap-8">
          <ArtistCard name={'Smasher'} path={''} />
          <ArtistCard name={'Fatrik'} path={''} />
        </div>
        :
        <div className="py-20">
          <div className="grid grid-cols-3 gap-8">
          <ArtistCard name={'Smasher'} path={''} />
          <ArtistCard name={'Fatrik'} path={''} />
          </div>
        </div>}
    </div>
  )
}

export default Artists;