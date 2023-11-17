"use client"

import React from 'react'
import { BiTrashAlt } from 'react-icons/Bi'
import { useRouter } from 'next/navigation'

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removePost = async () => {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
                method: 'DELETE',
            });

        if(res.ok)
            router.refresh();
        }
    }
    return (
        <button className="cursor" onClick={removePost}><BiTrashAlt size={25} color={"red"} /></button>
    )
}
