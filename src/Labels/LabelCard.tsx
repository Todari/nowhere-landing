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
    <div className="w-full flex flex-row gap-8 items-start" onClick={() => window.open(soundCloud)}>
      <div className="flex w-full basis-1/4 aspect-square justify-center items-center">
        <img src={profile} />
      </div>
      <div className="basis-3/4 flex flex-col gap-4">
        <div className="text-white text-left">
          {name}
        </div>
        <div className="text-stone-400 text-xs text-wrap text-left leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )
}

export default LabelCard