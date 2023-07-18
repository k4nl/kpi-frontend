"use client";
import React, { useState } from 'react'
import SideBar from './LeftSideBar'
import NavBar from './TopNavBar'

export default function Nav({ children }: { children: React.ReactNode }) {
  const [sideActive, setSideActive] = useState<boolean>(false);

  const toogleActive = () => setSideActive(!sideActive);

  return (
    <div>
      <div className={`main-wrapper-content ${sideActive && 'active'}`}>
        <NavBar toogleActive={toogleActive}/>
        <SideBar toogleActive={toogleActive} />
        <div className='main-content'>
          {children}
        </div>
      </div>
    </div>
  )
  
}
