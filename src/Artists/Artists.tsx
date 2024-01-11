import ArtistCard from "./components/ArtistCard";
import { useAppSelector } from "../hooks";

const Artists = () => {
  const { width } = useAppSelector((state) => state.screenSize);

  return (
    <div className="bg-black p-12">
      {width < 768 ?
        <div className="py-20 flex flex-col gap-8">
          <ArtistCard name={'Smasher'} path={''} />
          <ArtistCard name={'Fatrik'} path={''} />
        </div>
        :
        <div className="py-20">
          <div className="grid grid-cols-2 gap-8">
            <ArtistCard name={'Smasher'} path={''} />
            <ArtistCard name={'Fatrik'} path={''} />
          </div>
        </div>}
    </div>
  )
}

export default Artists;