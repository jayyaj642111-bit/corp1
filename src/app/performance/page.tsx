
import React from 'react'
import Hero from '../components/hero'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Performance", 
}


export default function Page() {
  return (
    <Hero
      imgurl="/2.jpg"
      altTxt="Performance background"
      content="Performance1"
    />
  )
}
