import './globals.css'
import { Inter } from 'next/font/google'

//import components
import Navbar from '../public/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KDL Project',
  description: 'This is a KDL project!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
