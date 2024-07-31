import Link from 'next/link'
import { reenieBeenie, robotoMono } from '../fonts'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { GrDocumentText } from 'react-icons/gr'
const ContactMe = () => {
    return (
        <section id='contact' className='w-full flex flex-col items-center mx-auto pt-14'>
            <div
                className={`${reenieBeenie.className} text-center text-5xl sm:text-4xl md:text-6xl lg:text-8xl text-[#D732A8] flex flex-col space-y-6 lg:space-y-10`}>
                <h1>You can contact me at</h1>
                <Link href='mailto:murugansasirekha0897@gmail.com'>
                    <h1 className='break-all underline decoration-[3px] lg:decoration-[5px] underline-offset-4 lg:underline-offset-8'>
                        murugansasirekha0897@gmail.com
                    </h1>
                </Link>
                <h1>for future collaborations.</h1>
            </div>
            <div className='flex flex-col my-14 px-2 md:px-0 lg:my-20 items-start space-y-6'>
                <div className='flex flex-row justify-end lg:justify-center items-end space-x-4 md:space-x-6 lg:space-x-8'>
                    <FiLinkedin className='text-2xl md:text-3xl lg:text-5xl text-[#D732A8]' />
                    <p className={`${robotoMono.className} text-[#A3ABA8] text-lg md:text-2xl lg:text-3xl`}>
                        Connect with me on{' '}
                        <Link
                            href='https://www.linkedin.com/in/murugan-sasi-rekha'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='text-[#D732A8] underline decoration-[1px] lg:decoration-[3px] underline-offset-4 lg:underline-offset-8'>
                            LinkedIn
                        </Link>
                    </p>
                </div>
                <div className='flex flex-row justify-center items-end space-x-4 md:space-x-6 lg:space-x-8'>
                    <FiGithub className='text-2xl md:text-3xl lg:text-5xl text-[#D732A8]' />
                    <p className={`${robotoMono.className} text-[#A3ABA8] text-lg md:text-2xl lg:text-3xl`}>
                        Discover my work on{' '}
                        <Link
                            href='https://github.com/sasirekha08'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='text-[#D732A8] underline decoration-[1px] lg:decoration-[3px] underline-offset-4 lg:underline-offset-8'>
                            Github
                        </Link>
                    </p>
                </div>
                <div className='flex flex-row justify-center items-end space-x-4 md:space-x-6 lg:space-x-8'>
                    <GrDocumentText className='text-2xl md:text-3xl lg:text-5xl text-[#D732A8]' />
                    <p className={`${robotoMono.className} text-[#A3ABA8] text-lg md:text-2xl lg:text-3xl`}>
                        Check out my{' '}
                        <Link
                            href='https://drive.google.com/file/d/1gPjsHvNjb-jAdG0J0_sH6aBtmr41MMl5/view?usp=sharing'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='text-[#D732A8] underline decoration-[1px] lg:decoration-[3px] underline-offset-4 lg:underline-offset-8'>
                            Resume
                        </Link>{' '}
                        here
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
