import { useParams } from "react-router-dom";

const ArtistInfo = () => {
  const params = useParams();
  return (
    <div className="bg-white">
      <div className="flex flex-col">
        {params.path}
      </div>
    </div>
  )
}

export default ArtistInfo;