import React from 'react'
import Form from '@/components/Form'
import BackBtn from '@/components/BackBtn'

export default function page() {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center bg-slate-100">
      <BackBtn />
      <Form />
    </main>
  )
}
