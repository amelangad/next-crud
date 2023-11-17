"use client"

import React, {useState} from 'react'
import {useUser} from '../context/UserContext'


export default function Image() {
    
 const {img, handleUploadImage} = useUser();
  return (

<div className ="w-full h-full flex flex-col items-center p-5">
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
