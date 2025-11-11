import React from 'react'
import Hero from '../components/hero'
import { Metadata } from 'next'
  

export const metadata: Metadata = {
  title: "Reliability", 
}


export default function Page() {
  return (
    <Hero
      imgurl="/3.jpeg"
      altTxt="Reliability background"
      content="Reliability"
    />
  )
}
