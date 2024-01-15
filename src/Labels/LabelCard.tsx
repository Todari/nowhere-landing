type LabelCardProps = {
  id: number,
  name: string,
  profile: string,
  soundCloud: string,
  tracks: string[],
  description: string,
}

const LabelCard = ({ id, name, profile, soundCloud, tracks, description }: LabelCardProps) => {

  return (
    <div className="w-full flex flex-row gap-8 rounded-3xl items-start bg-neutral-900 p-8" >
      <div className="flex w-full basis-1/4 aspect-square justify-center items-center bg-black" onClick={() => window.open(soundCloud)}>
        <img src={profile}/>
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
  )
}

export default LabelCard