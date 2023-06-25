
import RegisterModal from './Components/Modals/RegisterModal'
import Navbar from './Components/Navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'



export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone is just experimental full-stack prject',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
