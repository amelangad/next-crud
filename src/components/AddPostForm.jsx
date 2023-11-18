import React, { useReducer } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AddPostForm() {
    const router = useRouter();

    const formReducer = (state, e) => {
        return {
            ...state,
            [e.target.name]: e.target.value
        }
    }
    const [formData, setFormData] = useReducer(formReducer, {})

    async function onSubmit(e) {
        e.preventDefault();
        const res = await fetch('/api/posts', {
            body: JSON.stringify(formData),
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
        )
        if (res.ok)
        console.log(res)
    router.refresh('/list')
    router.push('/list')

    }

    return (
        <>
        <div className="w-1/3 bg-transparent text-white m-3 shadow-lg">
            <form name="form"  onSubmit={onSubmit}
                className="flex flex-col gap-3 items-start  p-5">
                <div className="flex flex-row text-slate-800 gap-5 border-b border-slate-600 w-1/2">
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                        name="title"
                        onChange={setFormData}
                        className="text-slate-800 w-full focus:outline-none bg-transparent"></input>
                </div>
                <div className="flex flex-rw text-slate-800 gap-5 border-b border-slate-600 w-1/2">
                    <label htmlFor="title">Author: </label>
                    <input type="text"
                        name="author"
                        onChange={setFormData}
                        className="text-slate-0 w-full focus:outline-none bg-transparent"></input>
                </div>
                <textarea name="description"
                    id="post"
                    onChange={setFormData}
                    className="w-3/4 h-full my-5 cursor-text text-black p-3 border border-slate-600 focus:outline-none bg-transparent"></textarea>
                     <button type="submit" className="w-fit border-2 text-black border-white bg-[#ddb6b6] mx-5 px-5 py-2 m-2 rounded mr-5 hover:bg-[#e7c7c7]">Send</button>
                    </form>
            </div>
            <Link href="/list"
            className="w-fit border-1 text-black border-black bg-[#ddb6b6] px-5 py-2 m-2 rounded mr-5 hover:bg-[#e7c7c7] my-5">
            See all posts</Link>
            </>
    )
}
