type ArtistCardProps = {
  name: string,
  path: string,
}

const ArtistCard = ({name, path} : ArtistCardProps) => {

  
  return (
    <div className='flex flex-col justify-center border-2'>
      <div className="w-full aspect-square bg-stone-500">
      </div>
      <div className="grow flex items-center justify-center p-4">
        <div className="text-3xl text-white text-center ">
          {name}
        </div>
      </div>
    </div>
  )
}

export default ArtistCard