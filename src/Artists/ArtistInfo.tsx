import ARTIST_LIST from "@/constant/ArtistList";
import { useParams } from "react-router-dom";

const ArtistInfo = () => {
  const params = useParams();
  const artist = ARTIST_LIST.list.find((artist) => {
    if (params.path) {
      artist.path = params.path
    }
  })
  return (
    <div className="flex h-screen items-center justify-center">
      <div className='text-white'>
        {artist?.name} {artist?.path}
      </div>
    </div>
  )
}

export default ArtistInfo;