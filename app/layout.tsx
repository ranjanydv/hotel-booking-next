import {Nunito} from "next/font/google"
import React from "react"

import "./globals.css"

import LoginModal from "./components/Modal/LoginModal"
import RegisterModal from "./components/Modal/RegisterModal"
import RentModal from "./components/Modal/RentModal"
import SearchModal from "./components/Modal/SearchModal"

import ClientOnly from "./components/ClientOnly"
import {Navbar} from "./components/Navbar/Navbar"
import ToasterProvider from "./providers/ToasterProvider"
import getCurrentUser from "./actions/getCurrentUser"

const nunito = Nunito({subsets: ["latin"]})

export const metadata = {
  title: "RajHotel",
  description: "This is hotel booking system for RajHotel",
}

export default async function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
    <body className={nunito.className}>
    <ClientOnly>
      <ToasterProvider/>
      <SearchModal/>
      <RegisterModal/>
      <LoginModal/>
      <RentModal/>
      <Navbar currentUser={currentUser}/>
    </ClientOnly>
    <div className="pb-20 pt-28">{children}</div>
    </body>
    </html>
  )
}
