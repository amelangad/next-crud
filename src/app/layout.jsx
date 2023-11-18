
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Provider from '../context/SessionContext'
import {UserProvider} from '../context/UserContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata= {
  title: 'Next CRUD app',
  description: '',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
        <Provider>
        <UserProvider>
      <body className="inter.className}">
      <Navbar />
        {children}</body>
        </UserProvider>
        </Provider>
    </html>
  )
}
