import Link from 'next/link'
import { reenieBeenie, robotoMono } from '../fonts'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { GrDocumentText } from 'react-icons/gr'
const ContactMe = () => {
    return (
        <section id='contact' className='max-w-5xl flex flex-col items-center mx-auto pt-14'>
            <div
                className={`${reenieBeenie.className} text-center text-8xl text-[#D732A8] flex flex-col space-y-10`}>
                <h1>You can contact me at</h1>
                <h1 className='underline decoration-[5px] underline-offset-8'>
                    murugansasirekha0897@gmail.com
                </h1>
                <h1>for future collaborations.</h1>
            </div>
            <div className='flex flex-col my-20 items-start space-y-6'>
                <div className='flex flex-row justify-center items-end space-x-8'>
                    <FiLinkedin className='text-5xl text-[#D732A8]' />
                    <p className={`${robotoMono.className} text-[#A3ABA8] text-3xl`}>
                    Connect with me on{' '}
                        <Link
                            href=''
                            className='text-[#D732A8] underline decoration-[3px] underline-offset-8'>
                            LinkedIn
                        </Link>
                    </p>
                </div>
                <div className='flex flex-row justify-center items-end space-x-8'>
                    <FiGithub className='text-5xl text-[#D732A8]' />
                    <p className={`${robotoMono.className} text-[#A3ABA8] text-3xl`}>
                    Discover my work on {' '}
                        <Link
                            href=''
                            className='text-[#D732A8] underline decoration-[3px] underline-offset-8'>
                            Github
                        </Link>
                    </p>
                </div>
                <div className='flex flex-row justify-center items-end space-x-8'>
                    <GrDocumentText className='text-5xl text-[#D732A8]' />
                    <p className={`${robotoMono.className} text-[#A3ABA8] text-3xl`}>
                    Check out my{' '}
                        <Link
                            href=''
                            className='text-[#D732A8] underline decoration-[3px] underline-offset-8'>
                            Resume
                        </Link>
                        {' '}here
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
