"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  {
    name: "Performance",
    href: "/performance",
  },
  {
    name: "Reliability",
    href: "/reliability",
  },
  {
    name: "Scale",
    href: "/scale",
  },
]

export default function Header() {
  const pathname = usePathname()
  return (
      <div className="absolute w-full z-30">
          <div className="flex justify-between container mx-auto text-white p-8 ">
            <Link className="text-3xl font-bold" href="/">Home</Link>
            <nav className="text-xl flex gap-4">
              {linkData.map((item) => (
                <Link key={item.href} className={pathname === item.href ? "text-yellow-400" : ""} href={item.href}>{item.name}</Link>
              ))}   
            </nav>
          </div>
        </div>
  )
}
