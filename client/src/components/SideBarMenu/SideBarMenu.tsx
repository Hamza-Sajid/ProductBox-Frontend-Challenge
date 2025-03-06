// App imports
import Logo from '../../assets/logo.png'
import { menuButtons } from '../../constants/constant'
import MenuButton from '../MenuButton/MenuButton'

const SideBarMenu = () => {
  return (
    <div className='flex flex-col gap-10  border-r-1 border-gray-300 h-screen'>
      <div>
        <img src={Logo} width={80} height={80}></img>
      </div>
      {menuButtons.map((button, index) => {
        return (
          <MenuButton key={index} text={button.text} icon={button.icon} />
        )
      })}
      <hr className="w-1/2 block m-auto rounded-3xl text-gray-300" />
    </div>
  )
}

export default SideBarMenu