import React from 'react'
import Table from '@/components/Table'
import BackBtn from '@/components/BackBtn'

export default function page() {

  return (
    <main className="flex min-h-screen max-w-full flex-col items-center bg-slate-50">
      <BackBtn />
      <Table />
    </main>
  )
}
