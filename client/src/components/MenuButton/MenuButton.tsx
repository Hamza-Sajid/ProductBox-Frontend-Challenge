// React import
import React from 'react'
// Third party import
import { NavLink } from 'react-router';
// App import
import { MenuButtonProps } from './types';

const MenuButton: React.FC<MenuButtonProps> = ({ text, icon: Icon, path }) => {

  return (
    <NavLink to={path} className={({ isActive }) => isActive ? 'bg-blue-500 !text-white rounded-3xl p-4' : ''}>
      <div className='flex justify-center'>
        <button className='flex justify-center items-center gap-2  font-medium cursor-pointer'>
          <span className='text-3xl'><Icon /></span>
          <span>{text}</span>
        </button>
      </div>

    </NavLink>
  )
}

export default MenuButton