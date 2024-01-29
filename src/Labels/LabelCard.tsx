import { twMerge } from "tailwind-merge"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import LabelInfo from "./LabelInfo";


type LabelCardProps = {
  id: number,
  name: string,
  profile: string,
  soundCloud: string,
  tracks: string[],
  description: string,
}

const LabelCard = ({ id, name, profile, soundCloud, tracks, description }: LabelCardProps) => {
  const [showInfo, setShowInfo] = useState(false)

  const infoHandler = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div className="flex flex-col rounded-3xl items-start bg-neutral-900 pt-8 px-8 gap-4">
      <div className="w-full flex flex-row gap-8 " >
        <div className="flex w-full basis-1/4 aspect-square justify-center items-center">
          <div className={"w-full aspect-square rounded-full bg-contain bg-center bg-no-repeat bg-black"}
            style={{
              backgroundImage: `url(${profile})`
            }}
            onClick={() => window.open(soundCloud)}></div>
        </div>
        <div className="basis-3/4 flex flex-col divide-y items-center justify-center">
          <div className="text-white text-left pb-4">
            {name}
          </div>
          <div className="text-stone-400 text-xs text-wrap text-left leading-relaxed pt-4">
            {description}
          </div>
        </div>
      </div>
      {showInfo ? <LabelInfo tracks={tracks} /> : null}
      <div className="flex w-full h-8 justify-center items-center"
        onClick={infoHandler}>
        {showInfo ?

          <FaAngleUp className="w-full h-full fill-neutral-500" />

          :
          <FaAngleDown className="w-full h-full fill-neutral-500" />
        }

      </div>
    </div>
  )
}

export default LabelCard