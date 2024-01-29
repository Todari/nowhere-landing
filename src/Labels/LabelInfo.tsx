// import { getBetterThanYouTracks } from "@/api/SoundCloud";
import ReactPlayer from "react-player";
import LABEL_LIST from "@/constant/LableList";
import { setTransparent } from "@/store/headerStateReducer";
import { useAppDispatch } from "../hooks";

type LabelInfoProp = {
  tracks: string[]
}

const LabelInfo = ({ tracks }: LabelInfoProp) => {
    const dispatch = useAppDispatch();
    dispatch(setTransparent(true));
  // const tracks = await getBetterThanYouTracks()

  const trackPlayers: JSX.Element[] = tracks.map(

    (track) =>
      <div className="flex">
        <ReactPlayer url={track} height="30%" width="100%"/>
      </div>

  );

  return (
    <div className="flex flex-col w-full h-fit gap-4">
      {trackPlayers}
    </div>
  )
}

export default LabelInfo