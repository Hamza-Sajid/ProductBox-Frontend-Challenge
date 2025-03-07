// App imports
import Logo from '../../assets/logo.png'
import { menuButtons } from '../../constants/constant'
import MenuButton from '../MenuButton/MenuButton'

const SideBarMenu = () => {
  return (
    <div className='relative flex flex-col border-r-1 border-gray-300 items-center h-screen'>
      <div className='h-[15%] w-full'>
        <img src={Logo} width={80} height={80}></img>
      </div>
      <div className='flex flex-col gap-8 w-3/4 h-[30%] items-center justify-center'>
        {menuButtons.map((button, index) => {
          return (
            <MenuButton key={index} text={button.text} icon={button.icon} path={button.path} />
          )
        })}
      </div>
    </div>
  )
}

export default SideBarMenu