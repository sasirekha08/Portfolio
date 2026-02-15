import Image from 'next/image'
import { reenieBeenie, robotoMono } from '../fonts'
import Associate from '../../public/2019_2021.png'
import Trainer from '../../public/2021_2021.png'
import Software from '../../public/2021_2024.png'

import TorryHarris from '../../public/torry_harris.png'
import Rakuten from '../../public/rakuten.svg'

import Link from 'next/link'
const WorkExperience = () => {
    return (
        <section id='work' className='flex flex-col max-w-5xl mx-auto align-middle  justify-center'>
            <h1
                className={`text-5xl lg:text-6xl text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-4 lg:underline-offset-8`}>
                Work Experience
            </h1>
            <div className='pt-20  space-y-16 flex flex-col'>
                <div className='mx-2 lg:mx-0 space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 flex flex-col lg:flex-row'>
                    <div className='flex flex-col lg:basis-1/3 space-y-1.5 lg:space-y-5 lg:items-end '>
                        <p
                            className={`${robotoMono.className} text-sm lg:text-base font-light text-[#8E8E8E]`}>
                            December 2024 - Current
                        </p>
                        <p
                            className={`${robotoMono.className} text-base lg:text-lg  pt-2 lg:pt-0 font-bold text-[#8E8E8E]`}>
                            Applications Engineer
                        </p>
                        <p
                            className={`${robotoMono.className} text-base inline-block lg:hidden  underline-offset-2 text-[#8E8E8E]`}>
                            Rakuten
                        </p>
                        <Image
                            quality={100}
                            src={Rakuten}
                            alt='Rakuten'
                            className='hidden lg:inline-block bg-white rounded-2xl px-5 py-4'
                            width='180'
                        />
                    </div>
                    <div
                        className={`${robotoMono.className} flex flex-col align-middle justify-center lg:basis-2/3 mt-10 lg:mt-0 space-y-8 text-base lg:text-xl text-[#8E8E8E]`}>
                        <p>
                            <span className='text-[#ED7D31]'>/ </span>
                            Contributing as a <span className='text-[#ED7D31]'>
                                senior frontend engineer
                            </span>{' '}
                            to one of{' '}
                            <span className='text-[#ED7D31]'>
                                Japan’s largest and most complex e‑commerce ecosystems Rakuten Ichiba
                            </span>
                            , driving <span className='text-[#ED7D31]'>feature development</span> and{' '}
                            <span className='text-[#ED7D31]'>platform improvements</span> at scale.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>/ Developing new customer‑facing features</span>{' '}
                            and enhancing existing functionalities using{' '}
                            <span className='text-[#ED7D31]'>React.js</span>,{' '}
                            <span className='text-[#ED7D31]'>TypeScript</span>,{' '}
                            <span className='text-[#ED7D31]'>Redux</span>, and modern frontend tooling.
                        </p>

                        <p>
                            <span className='text-[#ED7D31]'>/ </span>
                            Collaborating closely with <span className='text-[#ED7D31]'>design</span>,{' '}
                            <span className='text-[#ED7D31]'>backend</span>,{' '}
                            <span className='text-[#ED7D31]'>QA</span>, and{' '}
                            <span className='text-[#ED7D31]'>product teams</span> across the full development
                            lifecycle—from <span className='text-[#ED7D31]'>technical planning</span> and{' '}
                            <span className='text-[#ED7D31]'>architecture discussions</span> to implementation
                            and deployment.
                        </p>

                        <p>
                            <span className='text-[#ED7D31]'>
                                / Refactoring and modernizing legacy codebases
                            </span>
                            , improving <span className='text-[#ED7D31]'>performance</span>,{' '}
                            <span className='text-[#ED7D31]'>maintainability</span>,{' '}
                            <span className='text-[#ED7D31]'>accessibility</span>, and overall{' '}
                            <span className='text-[#ED7D31]'>user experience</span> for millions of daily
                            users.
                        </p>

                        <p>
                            <span className='text-[#ED7D31]'>/ </span>
                            Building, maintaining, and evolving{' '}
                            <span className='text-[#ED7D31]'>design systems</span> and{' '}
                            <span className='text-[#ED7D31]'>shared component libraries</span> used across
                            multiple Rakuten services, ensuring{' '}
                            <span className='text-[#ED7D31]'>UI consistency</span>,{' '}
                            <span className='text-[#ED7D31]'>reusability</span>, and{' '}
                            <span className='text-[#ED7D31]'>engineering efficiency</span>.
                        </p>

                        <p>
                            <span className='text-[#ED7D31]'>/ </span>
                            Actively contributing to the{' '}
                            <span className='text-[#ED7D31]'>internationalization (i18n)</span> of the Ichiba
                            application, enabling seamless{' '}
                            <span className='text-[#ED7D31]'>multi‑language support</span> and improving
                            global user reach.
                        </p>

                        <p>
                            <span className='text-[#ED7D31]'>
                                / Implementing and maintaining CI/CD pipelines
                            </span>{' '}
                            to streamline <span className='text-[#ED7D31]'>build</span>,{' '}
                            <span className='text-[#ED7D31]'>testing</span>, and{' '}
                            <span className='text-[#ED7D31]'>deployment workflows</span>, reducing release
                            friction and improving delivery speed.
                        </p>

                        <p>
                            <span className='text-[#ED7D31]'>/ </span>
                            Ensuring reliability and quality through comprehensive{' '}
                            <span className='text-[#ED7D31]'>end‑to‑end (E2E) testing</span> using{' '}
                            <span className='text-[#ED7D31]'>Playwright</span>, strengthening confidence in
                            critical user flows.
                        </p>
                    </div>
                </div>
                <div className='mx-2 lg:mx-0 space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 flex flex-col lg:flex-row'>
                    <div className='flex flex-col lg:basis-1/3 space-y-1.5 lg:space-y-5 lg:items-end '>
                        <Image
                            quality={100}
                            src={Software}
                            alt='Software Engineer'
                            className='w-[300px] lg:w-[386px] lg:h-[51px]'
                        />
                        <p
                            className={`${robotoMono.className} text-sm lg:text-base font-light text-[#8E8E8E]`}>
                            November 2021 - April 2024
                        </p>
                        <p
                            className={`${robotoMono.className} text-base lg:text-lg  pt-2 lg:pt-0 font-bold text-[#8E8E8E]`}>
                            Software Engineer
                        </p>
                        <p
                            className={`${robotoMono.className} text-base inline-block lg:hidden  underline-offset-2 text-[#8E8E8E]`}>
                            Torry Harris Integration Solutions
                        </p>
                        <Image
                            quality={100}
                            src={TorryHarris}
                            alt='Torry Harris'
                            className='hidden lg:inline-block'
                            width='180'
                            height='70'
                        />
                    </div>
                    <div
                        className={`${robotoMono.className} flex flex-col align-middle justify-center lg:basis-2/3 mt-10 lg:mt-0 space-y-8 text-base lg:text-xl text-[#8E8E8E]`}>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Contributed significantly to creating a visual development platform{' '}
                            </span>
                            using React JS v18, enabling users to build websites and web applications with
                            advanced functionality beyond
                            <span className='text-[#ED7D31]'> template-based builders</span>.
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
                            using React JS v17 and tailwind CSS v3.1, from concept to deployment (
                            <Link
                                href='https://iamnotdone.net/'
                                rel='noopener noreferrer'
                                target='_blank'
                                className='underline'>
                                https://iamnotdone.net/
                            </Link>
                            ).
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
                <div className='mx-2 lg:mx-0 space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 flex flex-col lg:flex-row'>
                    <div className='flex flex-col lg:basis-1/3 space-y-1.5 lg:space-y-5 lg:items-end '>
                        <Image
                            quality={100}
                            src={Trainer}
                            alt='No code Low code Trainer'
                            className='w-[300px] lg:w-[386px] lg:h-[51px]'
                        />
                        <p className={`${robotoMono.className} text-sm lg:text-lg font-light text-[#8E8E8E]`}>
                            June 2021 - December 2021
                        </p>
                        <p
                            className={`${robotoMono.className} text-base pt-2 lg:pt-0 lg:text-right lg:text-lg font-bold text-[#8E8E8E]`}>
                            Low Code / No Code Online Trainer
                        </p>
                        <p
                            className={`${robotoMono.className} text-base inline-block lg:hidden  underline-offset-2 text-[#8E8E8E]`}>
                            Torry Harris Integration Solutions
                        </p>
                        <Image
                            quality={100}
                            src={TorryHarris}
                            alt='Torry Harris'
                            className='hidden lg:inline-block'
                            width='180'
                            height='70'
                        />
                    </div>
                    <div
                        className={`${robotoMono.className} flex flex-col align-middle justify-center lg:basis-2/3 mt-10 lg:mt-0 space-y-8 text-base lg:text-xl text-[#8E8E8E]`}>
                        <p>
                            <span className='text-[#ED7D31]'>/ Delivered comprehensive training</span> on
                            cutting-edge technologies, including low-code and no-code development,
                            <span className='text-[#ED7D31]'>to UK-based clients</span>.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>
                                / Conducted live demonstrations on creating and managing websites
                            </span>{' '}
                            using platforms such as Bubble, Wix, Glide, and Appy Pie.
                        </p>
                        <p>
                            <span className='text-[#ED7D31]'>/ Facilitated training sessions</span> for
                            student-facing trainers, covering various learning techniques, training
                            guidelines, and strategies for understanding learners.
                        </p>
                    </div>
                </div>
                <div className='mx-2 lg:mx-0 space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 flex flex-col lg:flex-row'>
                    <div className='flex flex-col lg:basis-1/3 space-y-1.5 lg:space-y-5 lg:items-end '>
                        <Image
                            quality={100}
                            src={Associate}
                            alt='Associate Software Engineer'
                            className='w-[300px] lg:w-[386px] lg:h-[51px]'
                        />
                        <p className={`${robotoMono.className} text-sm lg:text-lg font-light text-[#8E8E8E]`}>
                            August 2019 - October 2021
                        </p>
                        <p
                            className={`${robotoMono.className} text-base pt-2 lg:pt-0 lg:text-lg font-bold text-[#8E8E8E]`}>
                            Associate Software Engineer
                        </p>
                        <p
                            className={`${robotoMono.className} text-base  inline-block lg:hidden  underline-offset-2 text-[#8E8E8E]`}>
                            Torry Harris Integration Solutions
                        </p>
                        <Image
                            quality={100}
                            src={TorryHarris}
                            alt='Torry Harris'
                            className='hidden lg:inline-block'
                            width='180'
                            height='70'
                        />
                    </div>
                    <div
                        className={`${robotoMono.className} flex flex-col align-middle justify-center lg:basis-2/3 mt-10 lg:mt-0 space-y-8 text-base lg:text-xl text-[#8E8E8E]`}>
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
                                / Implemented Google and Facebook open authentication
                            </span>{' '}
                            methods to provide secure and convenient login experiences for users.
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
        </section>
    )
}

export default WorkExperience
