

import './globals.css'
import { Inter } from 'next/font/google';
import {Navigation} from "./components/Navigation";
import Footer from './components/Footer';






const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jobint - HR Tech líder',
  description: 'Generated by create next app',
}




export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation/>

      {children}
           

        
        



        <Footer/>
        </body>

    </html>
  )
}

