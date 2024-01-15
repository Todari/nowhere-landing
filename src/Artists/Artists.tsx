import ArtistCard from "./ArtistCard";
import { useAppSelector } from "../hooks";
import ARTIST_LIST from "../constant/ArtistList";
import { Link } from "react-router-dom";

const Artists = () => {
  const { width } = useAppSelector((state) => state.screenSize);
  const ArtistCardComponents: JSX.Element[] = ARTIST_LIST.list.map(
    (artist) =>
      <Link key={artist.id} to={`/artists/${artist.path}`}>
        <ArtistCard id={artist.id} name={artist.name} path={artist.path} profile={artist.profile} instagram={artist.instagram} soundCloud={artist.soundCloud} tracks={artist.tracks} />
      </Link>
  );

  return (
    <div className="bg-black p-12">
      <div className={
        width < 768 ?
          "py-20 grid grid-cols-2 gap-8"
          :
          "py-20 grid grid-cols-2 gap-16"
      }>
        {ArtistCardComponents}
      </div>
    </div>
  )
}

export default Artists;