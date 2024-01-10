import { useNavigate } from "react-router-dom"

type MenuButtonProp = {
  title: string,
  path: string,
}

const MenuButton = ({ title, path }: MenuButtonProp) => {
  const navigate = useNavigate();
  const goPath = navigate(path);

  return (
    <div className='py-2 px-4'>
      <div className='text-white' onClick={() => goPath}>
        {title}
      </div>
    </div>
  )
}

export default MenuButton;