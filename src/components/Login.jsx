"use client"
import React, {useState} from 'react'
import { signIn, useSession } from 'next-auth/react';


export default function Login() {
  const { data: session } = useSession()
  

  if (session) {
    return <div className ="mr-5 flex justify-end items-center gap-5 ml-2">
      <p className ="sm:flex hidden text-sm text-green">Zalogowany jako <span className ="text-md">{session.user.email}</span> </p>  
    </div>
  }
  return <div className ="flex flex-row justify-center items-center mr-5">
    <p className ="pr-5">Niezalogowany</p>
    <button 
     className="sm:flex hidden w-200 border-2 border-white px-5 lg:py-2 m-2 rounded mr-5 hover:bg-[#e0c1c1]"
    type="submit"
    onClick={() =>signIn()}
    >Sign In</button>

  </div>
}