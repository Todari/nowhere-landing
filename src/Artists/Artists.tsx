import ArtistCard from "./ArtistCard";
import { useAppSelector } from "../hooks";
import ARTIST_LIST from "../constant/ArtistList";

const Artists = () => {
  const { width } = useAppSelector((state) => state.screenSize);
  const artistList: JSX.Element[] = ARTIST_LIST.list.map(
    (artist) => <ArtistCard id={artist.id} name={artist.name} path={''} profile={artist.profile} instagram={artist.instagram} soundCloud={artist.soundCloud} tracks={artist.tracks} />
  );

  return (
    <div className="bg-black p-12">
        <div className={
          width < 768 ?
          "py-20 grid grid-cols-2 gap-8"
          :
          "py-20 grid grid-cols-2 gap-16"
          }>
          {artistList}
        </div>
    </div>
  )
}

export default Artists;