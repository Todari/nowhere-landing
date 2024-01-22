import ARTIST_LIST from "@/constant/ArtistList";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

const ArtistInfo = () => {
  const params = useParams();

  const artist = ARTIST_LIST.list.find((artist) => {
    return artist.path === params.path
  })

  const profile = artist?.profile

  return (
    <div>
      {
        artist ?
          <div className="flex h-[100dvh] justify-center items-start py-24">
            <div className="aspect-square w-1/2 border-2 flex">\
              <div className={twMerge("w-full aspect-square", `bg-[url(./asset/${profile})]`)}>
                {/* <img src={artist.profile} /> */}
              </div>
            </div>
          </div > :
          null
      }
    </div>
  )
}

export default ArtistInfo;