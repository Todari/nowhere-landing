import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { ReactComponent as INSTAGRAM } from "../asset/instagram_logo.svg";
import { ReactComponent as SOUNDCLOUD } from "../asset/soundcloud_logo.svg";

type ArtistCardProps = {
  id: number
  name: string,
  profile: string,
  path: string,
  soundCloud: string,
  instagram: string,
}

const ArtistCard = ({ id, name, profile, path, soundCloud, instagram }: ArtistCardProps) => {
  const { width } = useAppSelector((state) => state.screenSize)
  const [infoOpened, setInfoOpened] = useState(false);

  const handleInfoOpened = () => {
    setInfoOpened(!infoOpened)
  }

  return (
    <div className="flex flex-col">
      {id % 2 !== 0 && width < 768 ?
        <div className='flex flex-row justify-center' onClick={handleInfoOpened}>
          <div className="grow flex flex-col items-center justify-center p-4">
            <div className="grow flex items-center">
              <div className="text-2xl text-white text-center">
                {name}
              </div>
            </div>
            <div className="grow flex flex-row w-full items-center justify-center">
              <div className="grow flex justify-center">
                <INSTAGRAM onClick={(e) => { e.stopPropagation(); window.open(instagram); }} />
              </div>
              <div className="grow flex justify-center">
                <SOUNDCLOUD onClick={(e) => { e.stopPropagation(); window.open(soundCloud) }} />
              </div>
            </div>
          </div>
          <div className="w-full basis-1/2 aspect-square bg-stone-500">
          </div>
        </div>
        :
        <div className='flex flex-row justify-center' onClick={handleInfoOpened}>
          <div className="w-full basis-1/2 aspect-square bg-stone-500">
          </div>
          <div className="grow flex flex-col items-center justify-center p-4">
            <div className="grow flex items-center">
              <div className="text-2xl text-white text-center">
                {name}
              </div>
            </div>
            <div className="grow flex flex-row w-full items-center justify-center">
              <div className="grow flex justify-center">
                <INSTAGRAM onClick={(e) => { e.stopPropagation(); window.open(instagram) }} />
              </div>
              <div className="grow flex justify-center">
                <SOUNDCLOUD onClick={(e) => { e.stopPropagation(); window.open(soundCloud) }} />
              </div>
            </div>
          </div>
        </div>
      }
      {
        infoOpened ?
          <div className="h-200 bg-stone-800">
            sss
          </div>
          :
          null
      }
    </div >

  )
}

export default ArtistCard