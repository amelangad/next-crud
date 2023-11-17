"use client"

import React, { useReducer} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'



const formReducer = (state, e) => {
    return {
        ...state,
        [e.target.name]: e.target.value,
    }
}


export default function form() {

    const router = useRouter();
    const [formData, setFormData] = useReducer(formReducer, {
    })



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json"}
               
            })
            if (res.ok)
            res.json();
            router.push('/')
            router.refresh('/table')
            console.log(res.headers)
        }


        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form className="flex flex-col w-1/3 text-black gap-5 bg-gradient-to-b from-[#ddb6b6] to-transparent rounded-2xl p-8 shadow-2xl" onSubmit={handleSubmit}>
                <h1 className="text-slate-50 mb-6 text-2xl font-bold m-3">Sign Up</h1>
                <input type="text"
                    required
                    name="firstName"
                    placeholder="name"
                    onChange={setFormData}
                    className="border w-3/4 px-2 py-1 focus:outline-none rounded-md m-auto" />
                <input type="text"
                    required
                    name="lastName"
                    placeholder="lastname"
                    onChange={setFormData}
                    className="border w-3/4 px-2 py-1 focus:outline-none rounded-md m-auto" />
                <input type="email"
                    required
                    name="email"
                    placeholder="email"
                    onChange={setFormData}
                    className="border w-3/4 px-2 py-1 focus:outline-none rounded-md m-auto" />
                <input type="password"
                    required
                    name="password"
                    placeholder="password"
                    onChange={setFormData}
                    className="border w-3/4 px-2 py-1 focus:outline-none rounded-md m-auto" />
                
                <div className="flex flex-row w-3/4 justify-between gap-5 m-auto">
                    <label htmlFor="date" className="w-1/3 flex justify-center items-center">Date of birth:</label>
                    <input type="date"
                        required
                        name="date"
                        placeholder="birthday"
                        onChange={setFormData}
                        className="border w-full px-2 py-1 focus:outline-none rounded-md" />
                </div>
                <div className="flex flex-row  w-3/4 m-auto justify-between items-center">
                    <div className="w-full flex flex-row">
                        <label htmlFor="gender"
                            className="inline-block">
                            <input type="radio"
                                required
                                className="mr-2"
                                id="man"
                                name="gender"
                                placeholder="gender"
                                onChange={setFormData}
                                value="Man" />
                            Man</label>
                    </div>
                    <div className="w-full  flex flex-row">
                        <label htmlFor="gender"
                            className="inline-block">
                            <input type="radio"
                                className="mr-2"
                                id="woman"
                                name="gender"
                                placeholder="gender"
                                onChange={setFormData}
                                value="Woman" />
                            Woman</label>
                    </div>
                </div>
                <button type="submit" className="w-fit border-2 my-5 border-white bg-[#ddb6b6] px-5 py-2 rounded  hover:bg-[#e7c7c7] m-auto ">Sign Up</button>
                <p className="mx-auto">You already have an account? <span className="underline cursor-pointer"><Link href="/api/auth/signin">Sign In</Link></span></p>
            </form>
        </>

    )
}
