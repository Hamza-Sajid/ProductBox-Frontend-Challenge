// React import
import React from 'react'
// App import
import { MenuButtonProps } from './types';

const MenuButton: React.FC<MenuButtonProps> = ({ text, icon: Icon }) => {

  return (
    <button className='flex justify-center items-center gap-2 font-medium'>
      <span className='text-2xl text-gray-800'><Icon /></span>
      <span className='text-gray-800'>{text}</span>
    </button>
  )
}

export default MenuButton