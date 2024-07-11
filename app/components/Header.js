import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../../public/logo.svg"
import { FiMoon } from "react-icons/fi";
const Header = () => {
  return (
    <div className='fixed w-full z-50'>
			<section className='  flex  flex-col items-center transition-colors duration-300 sm:block sm:h-auto '>
				<nav className='mx-auto flex h-[4rem] w-full 2xl:max-w-7xl  px-3 sm:pt-6 sm:px-6'>
					<div className='flex space-x-4 items-center '>
                        <Link href="/">
                    <Image src={Logo} width='50' height='50' alt='logo' />
                    </Link>
                    <FiMoon className=' text-2xl text-[#F5E595]'/>
                    <p className='text-[#B4B4B4]'>en</p>
                        </div>
                    </nav>
                    </section>
                    </div>
  )
}

export default Header
