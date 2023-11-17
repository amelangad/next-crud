"use client"

import React from 'react'
import Logo from './Logo'
import Login from './Login'
import {useUser} from '../context/UserContext'


export default function Navbar() {

  const {img} = useUser();


  return (
    
    <div className ="w-full h-16 bg-[#BC8F8F] flex justify-between shadow">
        <Logo/>
        <div className ="flex flex-row ">
          <Login/>
        <img src ={img} alt ="img" className ="rounded-full mx-5 my-2"/>
        </div>
    </div>
  )
}
