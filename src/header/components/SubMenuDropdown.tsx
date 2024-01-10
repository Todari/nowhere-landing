const SubMenuDropdown = () => {
  return (
    <div className="z-10 w-full flex justify-center items-center p-4">
      <div className="flex gap-4 flex-col">
        <div className='py-2 px-4'>
          <div className='text-white'>
            About Us
          </div>
        </div>
        <div className='py-2 px-4'>
          <div className='text-white'>
            Artist
          </div>
        </div>
        <div className='py-2 px-4'>
          <div className='text-white'>
            labels
          </div>
        </div>
        <div className='py-2 px-4'>
          <div className='text-white'>
            Albums
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubMenuDropdown;