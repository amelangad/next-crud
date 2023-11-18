"use client"

import React, { useState, useReducer } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function EditPostForm({ id, title, description, author }) {
    const { data: session } = useSession();
    const router = useRouter();

    const [newTitle, setNewTitle] = useState(title);
    const [newAuthor, setNewAuthor] = useState(author);
    const [newDescription, setNewDescription] = useState(description);
    const formReducer = (state, e) => {
        return {
            ...state,
            [e.target.name]: e.target.value
        }
    }
    const [formData, setFormData] = useReducer(formReducer, {})

    async function onSubmit(e) {
        e.preventDefault();
        const res = await fetch(`/api/post/${id}`, {
            body: JSON.stringify(formData),
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (res.ok)
            router.push('/list')
    }

    return <div className="flex h-[100vh] flex-col items-center justify-between bg-gradient-to-r from-[#ddb6b6] to-transparent">
        <div className="w-1/2 bg-transparent text-white m-3 shadow-lg mt-20 p-10">
            <p className="flex justify-center items-center m-3 text-slate-800 py-5">
                Hello, <span className="font-bold px-2">{ }</span> Share your opinion with all!</p>
            <form name="form"
                className="flex  flex-col gap-3 items-start h-3/4 px-5 "
                onSubmit={onSubmit}>
                <div className="flex flex-row text-slate-800 gap-5 border-b border-slate-600 w-1/2">
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                        value={newTitle}
                        name="newTitle"
                        onChange={setFormData}
                        className="text-slate-800 w-full focus:outline-none bg-transparent"></input>
                </div>
                <div className="flex flex-rw text-slate-800 gap-5 border-b border-slate-600 w-1/2">
                    <label htmlFor="title">Author: </label>
                    <input type="text"
                        name="newAuthor"
                        value={newAuthor}
                        value={newTitle}
                        onChange={setFormData}
                        className="text-slate-0 w-full focus:outline-none bg-transparent"></input>
                </div>
                <textarea name="newDescription"
                    id="post"
                    value={newDescription}
                    onChange={setFormData}
                    className="w-3/4 h-3/4 cursor-text text-black p-3  border border-slate-600 focus:outline-none bg-transparent"></textarea>
                <button type="submit" className="w-fit border-2 text-black border-white bg-[#ddb6b6] px-5 py-2 m-2 rounded mr-5 hover:bg-[#e7c7c7] my-5">Update</button>
            </form>
        </div>
        <Link href="/list"
            className="w-fit border-1 text-black border-black bg-[#ddb6b6] px-5 py-2 m-2 rounded mr-5 hover:bg-[#e7c7c7] my-5">
            See all posts</Link></div>

}
