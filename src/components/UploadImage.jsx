"use client"

import React, {useState} from 'react'
import {useUser} from '../context/UserContext'

export default function UploadImage() {
    
 const {img, handleUploadImage} = useUser();
  return (
<div className ="w-full min-h-[100vh] flex flex-col items-center p-5  bg-gradient-to-r from-[#ddb6b6] to-transparent">
<img src={img} alt="img" className ="w-48 h-48 rounded-full p-5"></img>
    <input type="file"
        accept="image/png, image/jpeg"
        required
        name="avatar"
        id="uploadImage"
        onChange={handleUploadImage}
        className="" />
</div>
  )
  }

   
                      