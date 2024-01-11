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

  return (
    <div>
      {id % 2 !== 0 && width < 768 ?
        <div className='flex flex-row justify-center'>
          <div className="grow flex flex-col items-center justify-center p-4">
            <div className="grow flex items-center">
              <div className="text-2xl text-white text-center">
                {name}
              </div>
            </div>
            <div className="grow flex flex-row w-full items-center justify-center">
              <INSTAGRAM className="grow" onClick={() => { window.open(instagram) }} />
              <SOUNDCLOUD className="grow" onClick={() => { window.open(soundCloud) }} />
            </div>
          </div>
          <div className="w-full basis-1/2 aspect-square bg-stone-500">
          </div>
        </div>
        :
        <div className='flex flex-row justify-center'>
          <div className="w-full basis-1/2 aspect-square bg-stone-500">
          </div>
          <div className="grow flex flex-col items-center justify-center p-4">
            <div className="grow flex items-center">
              <div className="text-2xl text-white text-center">
                {name}
              </div>
            </div>
            <div className="grow flex flex-row w-full items-center justify-center">
              <INSTAGRAM className="grow" onClick={() => { window.open(instagram) }} />
              <SOUNDCLOUD className="grow" onClick={() => { window.open(soundCloud) }} />
            </div>
          </div>
        </div>
      }
    </div>

  )
}

export default ArtistCard