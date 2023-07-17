
import RegisterModal from './Components/Modals/RegisterModal'
import LoginModal from './Components/Modals/LoginModal'

import Navbar from './Components/Navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actionns/getCurrentUser'



export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone is just experimental full-stack prject',
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const curerentUser = await getCurrentUser();

  return (
    <html lang="en">

      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar curerentUser={curerentUser} />
        {children}
      </body>
    </html>
  )
}
