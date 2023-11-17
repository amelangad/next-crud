"use client"

import Posts from '@/components/Posts';
import {useContext, createContext, useState} from 'react'

const UserContext = createContext({});

export function useUser () {
    return useContext(UserContext);

}
export function UserProvider ({children}) {
    const [img, setImg] = useState('');
    const [profile, setProfile] = useState(false)

    const imagebase64 = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        const data = new Promise((res, rej) => {
            reader.onload = () => res(reader.result)
            reader.onerror = (err) => rej(err)
        })
        return data;

    }

    const handleUploadImage = async (e) => {
        const file = e.target.files[0]
        const image = await imagebase64(file);
        setImg(image)
        setProfile(true)

    }

    return(<UserContext.Provider value={{ img, setImg, profile, setProfile, handleUploadImage}}>
        {children}
    </UserContext.Provider>
    )
}