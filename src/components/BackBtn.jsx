"use client"

import React from 'react'
import {useRouter} from 'next/navigation'

export default function BackBtn() {
    const router = useRouter();
  return (
    <button className ="w-fit border-2 text-black border-white bg-[#ddb6b6] px-5 py-2 m-2 rounded mr-5 hover:bg-[#e7c7c7] my-5" onClick={() => router.back()}>Back</button>
  )
}
