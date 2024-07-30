'use client'
import { useState } from 'react'
import Image from 'next/image'

import { reenieBeenie, robotoMono } from '../fonts'
import MySkills from '../../public/my_skills.png'
import TechnicalLight from '../../public/technical_light.png'
import InterpersonalLight from '../../public/interpersonal_light.png'
import { HiMiniXMark } from 'react-icons/hi2'

import { FaReact } from 'react-icons/fa'
import { SiReactquery } from 'react-icons/si'
// import { MdOutlineCancel } from "react-icons/md";
const Skills = () => {
    const [technicalClicked, setTechincalClicked] = useState(false)

    const skills = [
        {
            id: 1,
            title: 'HTML5',
            icon: 'devicon-html5-plain',
        },
        {
            id: 2,
            title: 'Javascript',
            icon: 'devicon-javascript-plain',
        },
        {
            id: 3,
            title: 'ReactJS',
            icon: 'devicon-react-original',
        },
        {
            id: 4,
            title: 'Redux',
            icon: 'devicon-redux-original',
        },
        {
            id: 5,
            title: 'Next.js',
            icon: 'devicon-nextjs-plain',
        },
        {
            id: 6,
            title: 'TypeScript',
            icon: 'devicon-typescript-plain',
        },
        {
            id: 7,
            title: 'TailwindCSS',
            icon: 'devicon-tailwindcss-plain',
        },
        {
            id: 8,
            title: 'ReactBootstrap',
            icon: 'devicon-reactbootstrap-original',
        },
        {
            id: 9,
            title: 'NodeJS',
            icon: 'devicon-nodejs-plain',
        },
        {
            id: 10,
            title: 'MongoDB',
            icon: 'devicon-mongodb-plain',
        },
        {
            id: 11,
            title: 'SQL',
            icon: 'devicon-azuresqldatabase-plain',
        },
        {
            id: 12,
            title: 'Jest',
            icon: 'devicon-jest-plain',
        },
        {
            id: 13,
            title: 'Cypress',
            icon: 'devicon-cypressio-plain',
        },
        {
            id: 14,
            title: 'Selenium',
            icon: 'devicon-selenium-original',
        },
        {
            id: 15,
            title: 'AWS',
            icon: 'devicon-amazonwebservices-plain-wordmark',
        },
        {
            id: 16,
            title: 'Git',
            icon: 'devicon-git-plain',
        },
        {
            id: 17,
            title: 'Jira',
            icon: 'devicon-jira-plain',
        },
    ]

    const handleTechincalClick = () => {
        setTechincalClicked(true)
    }

    const [interpersonalClicked, setInterpersonalClicked] = useState(false)
    const handleInterpersonalClick = () => {
        setInterpersonalClicked(true)
    }
    return (
        <section id='skills' className='flex flex-col align-middle max-w-5xl mx-auto  justify-center'>
            {/* <h1
                className={`text-5xl lg:text-6xl text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-4 lg:underline-offset-8`}>
                My Skills!
            </h1> */}

            <div className='pt-12'>
                <div class='relative flex overflow-hidden'>
                    <div class='py-12 animate-marquee whitespace-nowrap'>
                        {skills.map((skill) => {
                            return (
                                <div key={skill.id} className='inline-flex mx-4 md:mx-6 flex-col justify-center items-center space-y-2'>
                                    <i className={`${skill.icon} colored text-[3rem] md:text-[4rem] lg:text-[5.5rem]`}></i>
                                    <p className={`${robotoMono.className} text-sm lg:text-base`}>{skill.title}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div class='absolute flex  top-0 py-12 animate-marquee2 whitespace-nowrap'>
                        {skills.map((skill) => {
                            return (
                                <div  key={skill.id}  className='inline-flex mx-4 md:mx-6 flex-col justify-center items-center space-y-2'>
                                    <i className={`${skill.icon} colored text-[3rem] md:text-[4rem] lg:text-[5.5rem]`}></i>
                                    <p className={`${robotoMono.className} text-sm lg:text-base`}>{skill.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* {!technicalClicked && !interpersonalClicked ? (
                <div className='relative'>
                    <Image src={MySkills} alt='Skills' className='pt-12 mx-auto' width='1000' height='663' />

                    <p
                        className={`cursor-pointer absolute top-[15%] lg:top-[20%] left-[5%] lg:left-[30%] ${reenieBeenie.className} underline decoration-[1px] lg:decoration-[3px] underline-offset-2 lg:underline-offset-4 text-[#DB2777] text-xl md:text-2xl lg:text-4xl`}
                        style={{ fontWeight: '600' }}
                        onClick={handleTechincalClick}>
                        Technical Skills
                    </p>
                    <p
                        className={`cursor-pointer absolute top-[90%] lg:top-[60%] right-[5%] lg:right-[26%] ${reenieBeenie.className} underline decoration-[1px] lg:decoration-[3px] underline-offset-2 lg:underline-offset-4 text-[#4F378B] text-xl md:text-2xl lg:text-4xl`}
                        style={{ fontWeight: '600' }}
                        onClick={handleInterpersonalClick}>
                        Interpersonal Skills
                    </p>
                </div>
            ) : null}

            {technicalClicked || interpersonalClicked ? (
                <div className='mt-[12%] mr-[7%] flex justify-end'>
                    <HiMiniXMark
                        className='text-xl lg:text-3xl text-[#ED7D31] cursor-pointer'
                        onClick={() => {
                            setTechincalClicked(false)
                            setInterpersonalClicked(false)
                        }}
                    />
                </div>
            ) : null}
            {technicalClicked ? (
                <Image src={TechnicalLight} alt='Skills' className=' mx-auto' width='1000' height='663' />
            ) : null}

            {interpersonalClicked ? (
                <Image src={InterpersonalLight} alt='Skills' className=' mx-auto' width='1000' height='663' />
            ) : null} */}
        </section>
    )
}

export default Skills
