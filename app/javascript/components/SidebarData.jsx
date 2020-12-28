import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title:'home',
    path:'/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title:'products',
    path:'/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
]
