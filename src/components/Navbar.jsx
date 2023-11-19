"use client"

import React from 'react'
import Logo from './Logo'
import Login from './Login'
import ProfilePhoto from './ProfilePhoto'

export default function Navbar() {

  return (
  
    <div className ="w-full h-16 bg-[#BC8F8F] flex justify-between shadow">
        <Logo/>
        <div className ="flex flex-row ">
          <Login/>
        <ProfilePhoto/>
        </div>
    </div>
  )
}
