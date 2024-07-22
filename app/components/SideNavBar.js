import Link from 'next/link'
import { GoDotFill } from 'react-icons/go'
import { robotoMono } from '../fonts'

const SideNavBar = () => {
    return (
        <div className='fixed hidden lg:inline-flex right-8 top-1/2 transform -translate-y-1/2 max-h-[630px] z-40'>
            <ul
                className={`text-[#8E8E8E] text-xl group flex flex-col items-end space-y-12 ${robotoMono.className}`}>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link
                        href='#home'
                        className='invisible group-hover:visible hover:translate-y-0.5 underline transition-opacity delay-150 duration-300 ease-in-out'>
                        home
                    </Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link
                        href='#about'
                        className='invisible group-hover:visible hover:translate-y-0.5 underline transition-opacity delay-150 duration-300 ease-in-out'>
                        about me
                    </Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link
                        href='#skills'
                        className='invisible group-hover:visible hover:translate-y-0.5 underline transition-opacity delay-150 duration-300 ease-in-out'>
                        my skills
                    </Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link
                        href='#work'
                        className='invisible group-hover:visible hover:translate-y-0.5 underline transition-opacity delay-150 duration-300 ease-in-out'>
                        work experience
                    </Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link
                        href='#projects'
                        className='invisible group-hover:visible hover:translate-y-0.5 underline transition-opacity delay-150 duration-300 ease-in-out'>
                        projects
                    </Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link
                        href='#contact'
                        className='invisible group-hover:visible hover:translate-y-0.5 underline transition-opacity delay-150 duration-300 ease-in-out'>
                        contact me
                    </Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
            </ul>
        </div>
    )
}

export default SideNavBar
