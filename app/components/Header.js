'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.svg'
import { FiMoon } from 'react-icons/fi'
import { MdMenu } from 'react-icons/md'
import { RiMenuFold2Line, RiMenuFoldLine } from 'react-icons/ri'
import { useState } from 'react'
import { robotoMono } from '../fonts'

const Header = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    return (
        <div className='fixed w-full z-50 '>
            <section className=' bg-white/40 backdrop-blur-0 flex  flex-col   sm:block sm:h-auto '>
                <nav className=' mx-auto flex h-[4rem] w-full 2xl:max-w-[1700px]  px-3 sm:py-10 sm:px-6'>
                    <div className='flex justify-between w-full items-center '>
                        <div className='flex space-x-4 items-center '>
                            <Link href='/'>
                                <Image                     quality={100}
src={Logo} width='50' height='50' alt='logo' />
                            </Link>
                            {/* <FiMoon className='text-2xl text-[#F5E595]' /> */}
                            <p className={`text-[#B4B4B4] text-base lg:text-lg ${robotoMono.className}`}>
                                en
                            </p>
                        </div>
                        {isMenuClicked ? (
                            <RiMenuFoldLine
                                className='text-4xl cursor-pointer text-[#A6D990] lg:hidden inline-flex'
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            />
                        ) : (
                            <RiMenuFold2Line
                                className='text-4xl cursor-pointer text-[#A6D990] lg:hidden inline-flex'
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            />
                        )}
                    </div>
                </nav>
                {isMenuClicked ? (
                    <div
                        className={`${robotoMono.className}  text-[#8E8E8E] pr-4 items-end justify-end lg:hidden flex flex-col mt-2 space-y-3  `}>
                        <Link href='#home' className='pt-3 underline'>
                            home
                        </Link>
                        <Link href='#about' className=' underline'>
                            about me
                        </Link>
                        <Link href='#skills' className=' underline'>
                            my skills
                        </Link>
                        <Link href='#work' className=' underline'>
                            work experience
                        </Link>
                        <Link href='#projects' className='underline'>
                            projects
                        </Link>
                        <Link href='#contact' className='pb-3 underline'>
                            contact me
                        </Link>
                    </div>
                ) : null}
            </section>
        </div>
    )
}

export default Header
