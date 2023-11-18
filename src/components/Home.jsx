"use client"

import { useSession } from 'next-auth/react';
import AddPostForm from '../components/AddPostForm'
import Link from 'next/link'

export default  function Home() {

const { data: session } = useSession()
  if (session)
    return(
      <div className ="flex h-[100vh] flex-col items-center bg-gradient-to-r from-[#ddb6b6] to-transparent">
    <p className="flex justify-center items-center m-3 text-slate-800 py-5">
    Hello, <span className="font-bold px-2">{session.user.email}</span> Share your opinion with all!</p>
   <AddPostForm/>
   </div>
    )
  return (
    <main className="flex relative h-[100vh] flex-col items-center justify-between bg-gradient-to-r from-[#ddb6b6] to-transparent pb-[10%]">
      <div className ="flex flex-col justify-center items-center  w-full h-full drop-shadow-xl">
     <h1 className ="text-7xl px-24 drop-shadow-lg">Share your opinion<br></br>
     <span className ="text-3xl text-white flex justify-center p-5 drop-shadow-2xl">We need it</span></h1>
     </div>
     <p className =" text-2xl drop-shadow-xl underline-offset-4 ">Look, who is <span className ="border-b border-b-[#BC8F8F]">with Us</span></p>
     <Link href='/table'
          className="text-xl drop-shadow-xl w-fit border-2 border-slate-50 px-5 py-2 m-5 rounded mr-5 hover:bg-[#BC8F8F] ">Users</Link>
    </main>
   
  )
}
