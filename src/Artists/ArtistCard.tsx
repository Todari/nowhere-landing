import { useState } from "react";
import { useAppSelector } from "../hooks";
import { ReactComponent as INSTAGRAM } from "../asset/instagram_logo.svg";
import { ReactComponent as SOUNDCLOUD } from "../asset/soundcloud_logo.svg";
import ReactPlayer from "react-player";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

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


  const navigate = useNavigate();

  const trackPlayers: JSX.Element[] = tracks.map(
    (track) =>
      <div className="flex">
        <ReactPlayer url={track} className='w-full' height='50%' />
      </div>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full aspect-square">
        <img src={profile} />
      </div>
      <div className="text-xl text-white text-center">
        {name}
      </div>
    </div>

    // <div className="flex flex-col">
    //   <div className={id % 2 !== 0 ?
    //     'flex flex-row justify-center'
    //     : 'flex flex-row-reverse justify-center'
    //   } onClick={handleInfoOpened}>
    //     <div className={
    //       width < 768 ?
    //         "grow flex flex-col items-center justify-center"
    //         :
    //         "grow flex flex-row items-center justify-center"
    //     } >
    //       <div className="grow flex items-center justify-center">
    //         <div className="text-2xl text-white text-center">
    //           {name}
    //         </div>
    //       </div>
    //       <div className={
    //         width < 768 ?
    //           "grow flex flex-row w-full items-center justify-center"
    //           :
    //           "grow flex flex-col h-full items-center justify-center"
    //       }>
    //         <div className="grow flex justify-center items-center">
    //           <INSTAGRAM onClick={(e) => { e.stopPropagation(); window.open(instagram); }} />
    //         </div>
    //         <div className="grow flex justify-center items-center">
    //           <SOUNDCLOUD onClick={(e) => { e.stopPropagation(); window.open(soundCloud) }} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className={"w-full basis-1/2 aspect-square bg-stone-500"}>
    //     </div>
    //   </div>
    //   {
    //     infoOpened ?
    //       <div className="flex flex-col gap-4">
    //         {trackPlayers}
    //       </div>
    //       :
    //       null
    //   }
    // </div >

  )
}

export default ArtistCard