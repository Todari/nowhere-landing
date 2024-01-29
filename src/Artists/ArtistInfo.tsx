import ARTIST_LIST from "@/constant/ArtistList";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { ReactComponent as SOUNDCLOUD } from "../asset/soundcloud_logo.svg";
import { ReactComponent as INSTAGRAM } from "../asset/instagram_logo.svg";
import SoundCloudPlayer from "@/components/SoundCloudPlayer";
import ReactPlayer from "react-player"
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setTransparent } from "@/store/headerStateReducer";

const ArtistInfo = () => {
  const params = useParams();

  const artist = ARTIST_LIST.list.find((artist) => {
    return artist.path === params.path
  })


  const dispatch = useAppDispatch();
  dispatch(setTransparent(true));


  const trackPlayers: undefined | JSX.Element[] = artist?.tracks.map(

    (track) =>
      <div className="flex">
        <ReactPlayer url={track} height="30%" width="100%" />
      </div>

  );


  return (
    <div>
      {
        artist ?
          <div className="flex justify-center items-start">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="w-full aspect-square bg-cover flex flex-col justify-end"
                style={{
                  backgroundImage: `url(../${artist.profile})`
                }}>
                <div className="flex flex-col justify-end bg-gradient-to-t from-black h-1/2">
                  <div className="text-4xl text-white text-center p-8">
                    {artist.name}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-16 justify-center items-center p-8">
                <div className="w-8 h-8" onClick={() => window.open(artist.soundCloud)}>
                  <SOUNDCLOUD />
                </div>
                <div className="w-8 h-8" onClick={() => window.open(artist.instagram)} >
                  <INSTAGRAM />
                </div>
              </div>
              <div className="flex flex-col  w-11/12 h-fit gap-4">
                {trackPlayers}
              </div>
            </div>
          </div > :
          null
      }
    </div >
  )
}

export default ArtistInfo;