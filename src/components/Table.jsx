import React from 'react'
import getUsers from '../functions/getUsers'


export default async function Table() {

    const {users} = await getUsers();

  return (
<div className ="w-full h-full flex flex-wrap p-10 gap-10">
    {users.map((item) => (
        <div key ={item._id} className ="flex flex-col justify-center items-center gap-1">
        <p className="bg-slate-100 text-sm  text-black p-5">{item.firstName} {item.lastName}</p>
      <img src={item.avatar}
      className ="rounded-full w-40 h-40" alt="avatar"/>
        </div>
    ))}
</div>
  )
    }