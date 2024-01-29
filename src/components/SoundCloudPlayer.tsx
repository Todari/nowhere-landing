import ReactPlayer from "react-player"

type SoundCloudPlayerProp = {
  trackUrl: string
}

const SoundCloudPlayer = ({ trackUrl }: SoundCloudPlayerProp) => {

  return (
    <ReactPlayer url={trackUrl} className='w-full' height='50%' />
  )
}

export default SoundCloudPlayer
