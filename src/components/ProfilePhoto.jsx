import React, { useState } from 'react'
import { useUser } from '../context/UserContext'
import { signOut} from 'next-auth/react';
import Link from 'next/link'
import { TbSettingsExclamation } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";

export default function ProfilePhoto() {
    const { img } = useUser();

    const [open, setOpen] = useState(false);
    return (
        <div className ="">
            <img src={img}
                alt="img"
                className="rounded-full  my-2 h-[40px] w-[40px] cursor-pointer"
                onClick={() => { setOpen((prev) => !prev) }} />
            {open && (
                <div className="absolute top-16 right-0 flex flex-col py-10 gap-3 w-full lg:w-1/4 h-auto lg:h-full bg-[#e7b0b0] shadow-xl text-white  items-center lg:items-start lg:px-36  z-50">
                    <Link
                        href="/list"
                        className="w-fit flex justify-start text-md text-white cursor-pointer"
                        onClick={() => setOpen(false)}>
                         <div className ="flex flex-row gap-3">
                        <CiCircleList className="cursor-pointer flex items-center justify-center h-full" size={25} />
                        <p>List of posts</p></div>
                    </Link>
                    <Link
                        href="/"
                        className="w-fit flex justify-start text-md text-white py-2 cursor-pointer"
                        onClick={() => setOpen(false)}>
                          <div className ="flex flex-row gap-3">
                        <IoAddCircleOutline className="cursor-pointer flex items-center justify-center h-full" size={25} />
                        <p>Add post</p></div>
                    </Link>
                    <Link href='/settings'
                        onClick={() => setOpen(false)}>
                            <div className ="flex flex-row gap-3 cursor-pointer">
                        <TbSettingsExclamation className="cursor-pointer flex items-center justify-center h-full" size={25} />
                        <p>Settings</p></div>
                    </Link>
                    <Link href ='/'
                        className="sm:flex hidden w-fit  border-2 border-white px-5 py-2 m-2 rounded mr-5 hover:bg-[#e0c1c1] mt-10"
                        onClick={() => {
                            setOpen(false);
                            signOut();
                        }}
                    >SignOut</Link>
                </div>
            )}
        </div>
    )
}
