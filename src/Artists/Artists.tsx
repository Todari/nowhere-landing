import ArtistCard from "./ArtistCard";
import { useAppSelector } from "../hooks";
import ARTIST_LIST from "../constant/ArtistList";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { setTransparent } from "@/store/headerStateReducer";
import { useAppDispatch } from "../hooks";
const Artists = () => {
  const dispatch = useAppDispatch();
  dispatch(setTransparent(false));
  const { width } = useAppSelector((state) => state.screenSize);
  const ArtistCardComponents: JSX.Element[] = ARTIST_LIST.list.map(
    (artist) =>
      <Link key={artist.id} to={`/artists/${artist.path}`}>
        <ArtistCard id={artist.id} name={artist.name} path={artist.path} profile={artist.profile} instagram={artist.instagram} soundCloud={artist.soundCloud} tracks={artist.tracks} />
      </Link>
  );

  return (
    <div className="bg-black flex justify-center">
      <div className={twMerge("py-20 w-11/12 grid grid-cols-2",
        width < 768 ?
          "gap-8"
          :
          "gap-16"
      )}>
        {ArtistCardComponents}
      </div>
    </div>
  )
}

export default Artists;