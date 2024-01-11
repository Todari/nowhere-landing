import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { ReactComponent as INSTAGRAM } from "../asset/instagram_logo.svg";
import { ReactComponent as SOUNDCLOUD } from "../asset/soundcloud_logo.svg";
import ReactPlayer from "react-player";

type ArtistCardProps = {
  id: number
  name: string,
  profile: string,
  path: string,
  soundCloud: string,
  instagram: string,
  tracks: string[],
}

const ArtistCard = ({ id, name, profile, path, soundCloud, instagram, tracks }: ArtistCardProps) => {
  const { width } = useAppSelector((state) => state.screenSize)
  const [infoOpened, setInfoOpened] = useState(false);

  const handleInfoOpened = () => {
    setInfoOpened(!infoOpened)
  }

  const trackPlayers: JSX.Element[] = tracks.map(
    (track) =>
      <div className="flex">
        <ReactPlayer url={track} className='w-full' height='50%' />
      </div>
  );

  return (
    <div className="flex flex-col">
      <div className={id % 2 !== 0 && width < 768 ?
        'flex flex-row justify-center'
        : 'flex flex-row-reverse justify-center'
      } onClick={handleInfoOpened}>
        <div className="grow flex flex-col items-center justify-center p-4" >
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
      {
        infoOpened ?
          <div className="flex flex-col gap-4">
            {trackPlayers}
          </div>
          :
          null
      }
    </div >

  )
}

export default ArtistCard