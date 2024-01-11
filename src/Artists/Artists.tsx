import ArtistCard from "./components/ArtistCard";
import { useAppSelector } from "../hooks";
import ARTIST_LIST from "../constant/ArtistList";

const Artists = () => {
  const { width } = useAppSelector((state) => state.screenSize);
  const artistList: JSX.Element[] = ARTIST_LIST.list.map(
    (artist) => <ArtistCard id={artist.id} name={artist.name} path={''} profile={artist.profile} instagram={artist.instagram} soundCloud={artist.soundCloud} />
  );

  return (
    <div className="bg-black p-12">
      {width < 768 ?
        <div className="py-20 flex flex-col gap-16">
          {artistList}
        </div>
        :
        <div className="py-20">
          <div className="grid grid-cols-2 gap-16">
            {artistList}
          </div>
        </div>}
    </div>
  )
}

export default Artists;