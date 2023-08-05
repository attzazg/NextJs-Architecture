import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We Are working since 2015',
}

export default function About() {
  return (
   <h1>About</h1> 
  )
}
