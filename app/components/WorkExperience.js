import Image from 'next/image'
import { reenieBeenie, robotoMono } from '../fonts'
import Associate from '../../public/2019_2021.png'
import Trainer from '../../public/2021_2021.png'
import Software from '../../public/2021_2024.png'

import TorryHarris from '../../public/torry_harris.png'
const WorkExperience = () => {
    return (
        <div className='flex flex-col align-middle  justify-center'>
            <h1
                className={`text-[64px] text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-8`}>
                Work Experince
            </h1>
            <div className='pt-20 max-w-4xl mx-auto space-y-16 flex flex-col'>
                <div className='space-x-10 flex flex-row'>
                    <div className='flex flex-col space-y-6 items-end'>
                        <Image src={Software} alt='Software Engineer' className='' width='386' height='64' />
                        <p className={`${robotoMono.className} text-lg text-[#8E8E8E]`}>
                            November 2021 - April 2024
                        </p>
                        <Image src={TorryHarris} alt='Torry Harris' className='' width='180' height='70' />
                    </div>
                    <div className='flex flex-col space-y-8 text-xl text-[#8E8E8E] w-[754px]'>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Contributed significantly to creating a visual development platform
                            </span>
                            using React JS, enabling users to build websites and web applications with
                            advanced functionality beyond
                            <span className='text-[#ED7D31]'>template-based builders</span>.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>/ </span> Key functionalities of the website
                            builder included{' '}
                            <span className='text-[#ED7D31]'>
                                support for multiple data formats, seamless page navigation,
                            </span>{' '}
                            quick website creation with pre-defined templates, and high customizability.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>
                                {' '}
                                / Developed and managed responsive, full fledged websites
                            </span>{' '}
                            using React JS v17 and tailwind CSS v3.1, from concept to deployment
                            (https://iamnotdone.net/)
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Boosted performance by 30%, enhancing code reusability and readability.
                            </span>{' '}
                            This was achieved by incorporating efficient React libraries such as react-query
                            and Redux Toolkit.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>/ Executed automated test cases </span> using
                            Cypress, resulting in an 85% reduction in bugs and errors during the testing
                            phase.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Mentored and supervised 10+ new employees and interns{' '}
                            </span>
                            on front-end technologies. Additionally, I assisted with the recruitment and
                            selection of 40+ undergraduates, interns, and experienced front-end developers.
                        </p>
                    </div>
                </div>
                <div className='space-x-10 flex flex-row'>
                    <div className='flex flex-col space-y-6 items-end'>
                        <Image
                            src={Trainer}
                            alt='No code Low code Trainer'
                            className=''
                            width='386'
                            height='64'
                        />
                        <p className={`${robotoMono.className} text-lg text-[#8E8E8E]`}>
                            June 2021 - December 2021
                        </p>
                        <Image src={TorryHarris} alt='Torry Harris' className='' width='180' height='70' />
                    </div>
                    <div className='flex flex-col space-y-8 text-xl text-[#8E8E8E] w-[754px]'>
                        <p>
                            <span className='text-[#ED7D31]'>/ Delivered comprehensive training</span> on
                            cutting-edge technologies, including low-code and no-code development,
                            <span className='text-[#ED7D31]'>to UK-based clients</span>.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>/ Facilitated training sessions</span> for
                            student-facing trainers, covering various learning techniques, training
                            guidelines, and strategies for understanding learners.
                        </p>
                    </div>
                </div>
                <div className='space-x-10 flex flex-row'>
                    <div className='flex flex-col space-y-6 items-end'>
                        <Image
                            src={Associate}
                            alt='Associate Software Engineer'
                            className=''
                            width='386'
                            height='64'
                        />
                        <p className={`${robotoMono.className} text-lg text-[#8E8E8E]`}>
                            August 2019 - October 2021
                        </p>
                        <Image src={TorryHarris} alt='Torry Harris' className='' width='180' height='70' />
                    </div>
                    <div className='flex flex-col space-y-8 text-xl text-[#8E8E8E] w-[754px]'>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Developed multiple responsive, full fledged websites
                            </span>{' '}
                            using React JS v16 and tailwind CSS v1.3, from{' '}
                            <span className='text-[#ED7D31]'>concept to deployment</span>.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Integrated Stripe, PayPal, and RazorPay payment
                            </span>{' '}
                            methods in the websites.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Created and executed unit and automation test cases
                            </span>{' '}
                            using Jest, Enzyme and Selenium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
