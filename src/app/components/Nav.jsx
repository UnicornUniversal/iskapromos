'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()

  return (
    <div className='bg-primary w-auto fixed top-0 left-0 right-0 z-50 w-fit gap-2 text-sm mt-4 text-white mx-auto flex items-center justify-center rounded-full p-4'>
      <Link href="/">
        <button className={`rounded-full px-4 py-2 transition-all duration-200 ${
          pathname === '/' 
            ? 'bg-white text-primary font-semibold' 
            : 'bg-transparent text-white hover:bg-white/10'
        }`}>
          Iska Shop
        </button> 
      </Link>
      <Link href="/iskahomespromo">
        <button className={`rounded-full px-4 py-2 transition-all duration-200 ${
          pathname === '/iskahomespromo' 
            ? 'bg-white text-primary font-semibold' 
            : 'bg-transparent text-white hover:bg-white/10'
        }`}>
          Iska Homes
        </button> 
      </Link>
    </div>
  )
}

export default Nav
