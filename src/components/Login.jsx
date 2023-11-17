"use client"
import React, {useState} from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { TbSettingsExclamation } from "react-icons/tb";

export default function Login() {
  const { data: session } = useSession()

  if (session) {
    return <div className ="mr-5 flex justify-end items-center gap-5  ">
      <p className ="text-sm text-green">Zalogowany jako <span className ="text-md">{session.user.email}</span> </p>
      <button className="w-200 border-2 border-white px-5 py-2 m-2 rounded mr-5 hover:bg-blue-300"
      onClick={() => signOut()}>Sign out</button>
        <Link href ='/settings'><TbSettingsExclamation className ="cursor-pointer flex items-center justify-center h-full" size={25} /></Link>
    </div>
  }
  return <div className ="flex flex-row justify-center items-center mr-5">
    <p className ="pr-5">Niezalogowany</p>
    <button 
     className="w-200 border-2 border-white px-5 py-2 m-2 rounded mr-5 hover:bg-blue-300"
    type="submit"
    onClick={() =>signIn()}
    >Sign In</button>
      <Link  className="w-200 border-2 border-white px-5 py-2 m-2 rounded mr-5 hover:bg-blue-300"
      href="/form">Sign Up</Link>
  </div>
}