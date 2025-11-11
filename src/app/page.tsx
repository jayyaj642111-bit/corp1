import React from 'react'
import Image from 'next/image'
import Hero from './components/hero'
// Use public path string with next/image instead of importing from public
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: "Home",
}


export default function Page() {
  return (
   <Hero
    imgurl="/1.jpeg"
    altTxt="Home background"
    content="Professional Cloud Hosting"
   />
  )
}
