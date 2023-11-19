import React from 'react'
import getPosts from '../functions/getPosts';
import BackBtn from '../components/BackBtn'
import RemoveBtn from '../components/RemoveBtn'
import { FaRegEdit } from "react-icons/fa";
import Link from 'next/link'


export default async function Posts() {
  const {posts} = await getPosts();

  return (
    <div className ="flex flex-col justify-center items-center bg-gradient-to-r from-[#ddb6b6] to-transparent shadow-2xl">
          <BackBtn/>
    <h1 className="text-3xl text-black py-10">
        Posts
      </h1>
    <div className="w-full px-10 lg:w-1/2 lg:px-0 min-h-[100vh] flex flex-col gap-5">
    {posts.map((item) => (
    <div key={item._id} className="w-full min-h-[300px] bg-white shadow-2xl rounded-xl flex flex-col gap-5">
      <div className ="flex flex-row justify-start gap-5">
      <h1 className ="text-slate-800 p-5 text-2xl underline">{item.title}</h1>
      <p className ="text-slate-800 p-5 text-lg ">{item.author}</p>
      <p className ="text-slate-800 p-5 text-lg ">{item.year}</p>
      </div>
      <p className ="text-slate-500 p-3">{item.description}</p>
      <div className =" w-full flex gap-3 justify-end items-center p-10">
      <Link href ={`/editPost/${item._id}`}><FaRegEdit size={25} color={"green"}/></Link>
       <RemoveBtn id={item._id}/>
       </div>
       
</div>
  ))}
  </div>
  </div>
  )
}
