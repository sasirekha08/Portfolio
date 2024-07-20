'use client'
import  { useState } from 'react'
import Image from 'next/image'

import { reenieBeenie } from '../fonts'
import MySkills from '../../public/my_skills.png'
import TechnicalLight from '../../public/technical_light.png'
import InterpersonalLight from '../../public/interpersonal_light.png'

import { MdOutlineCancel } from "react-icons/md";
const Skills = () => {
    const [technicalClicked, setTechincalClicked] = useState(false)
    const handleTechincalClick = () => {
        setTechincalClicked(true)
    }

    const [interpersonalClicked, setInterpersonalClicked] = useState(false)
    const handleInterpersonalClick = () => {
        setInterpersonalClicked(true)
    }
    return (
        <section id='skills' className='flex flex-col align-middle  justify-center'>
            <h1
                className={`text-[64px] text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-8`}>
                My Skills!
            </h1>
            {!technicalClicked && !interpersonalClicked ? (
                <div className='relative'>
                    <Image src={MySkills} alt='Skills' className='pt-12 mx-auto' width='1000' height='663' />

                    <p
                        className={`cursor-pointer absolute top-[24%] left-[32%] ${reenieBeenie.className} underline decoration-[3px] underline-offset-4 text-[#DB2777] text-4xl`}
                        style={{ fontWeight: '600' }}
                        onClick={handleTechincalClick}>
                        Technical Skills
                    </p>
                    <p
                        className={`cursor-pointer absolute top-[59%] right-[28%] ${reenieBeenie.className} underline decoration-[3px] underline-offset-4 text-[#4F378B] text-4xl`}
                        style={{ fontWeight: '600' }}
                        onClick={handleInterpersonalClick}>
                        Interpersonal Skills
                    </p>
                </div>
            ) : null}

            {technicalClicked || interpersonalClicked? <div className="mt-24 mr-32 flex justify-end"><MdOutlineCancel className="text-3xl text-[#ED7D31] cursor-pointer" onClick={()=>{setTechincalClicked(false);setInterpersonalClicked(false)}}/></div>:null}
            {technicalClicked ? (
                <Image
                    src={TechnicalLight}
                    alt='Skills'
                    className=' mx-auto'
                    width='1000'
                    height='663'
                />
            ) : null}

{interpersonalClicked ? (
                <Image
                    src={InterpersonalLight}
                    alt='Skills'
                    className=' mx-auto'
                    width='1000'
                    height='663'
                />
            ) : null}
        </section>
    )
}

export default Skills
