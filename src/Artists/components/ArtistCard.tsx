import { ReactComponent as INSTAGRAM } from "../asset/instagram_logo.svg";
import { ReactComponent as SOUNDCLOUD } from "../asset/soundcloud_logo.svg";

type ArtistCardProps = {
  name: string,
  profile: string,
  path: string,
  soundCloud: string,
  instagram: string,
}

const ArtistCard = ({name, profile, path, soundCloud, instagram} : ArtistCardProps) => {

  
  return (
    <div className='flex flex-row justify-center border-2'>
      <div className="w-full basis-1/2 aspect-square bg-stone-500">
      </div>
      <div className="grow flex items-center justify-center p-4">
        <div className="text-3xl text-white text-center ">
          {name}
        </div>
      </div>
    </div>
  )
}

export default ArtistCard