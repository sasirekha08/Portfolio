import Link from 'next/link'
import { GoDotFill } from 'react-icons/go'
const SideNavBar = () => {
    return (

        <div className='fixed right-8 top-1/2 transform -translate-y-1/2 max-h-[630px] z-40'>
            <ul className='text-[#8E8E8E] text-xl group flex flex-col items-end space-y-12'>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link href='#' className='invisible group-hover:visible underline'>home</Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link href='#' className='invisible group-hover:visible underline'>about me</Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link href='#' className='invisible group-hover:visible underline'>my skills</Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link href='#' className='invisible group-hover:visible underline'>work experience</Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link href='#' className='invisible group-hover:visible underline'>projects</Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
                <li className='flex space-x-2 items-center justify-center'>
                    <Link href='#' className='invisible group-hover:visible underline'>contact me</Link>
                    <GoDotFill className='text-[#10B981] text-xl' />
                </li>
            </ul>
        </div>
    )
}


export default SideNavBar
