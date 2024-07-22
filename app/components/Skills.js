'use client'
import  { useState } from 'react'
import Image from 'next/image'

import { reenieBeenie } from '../fonts'
import MySkills from '../../public/my_skills.png'
import TechnicalLight from '../../public/technical_light.png'
import InterpersonalLight from '../../public/interpersonal_light.png'
import { HiMiniXMark } from "react-icons/hi2";
// import { MdOutlineCancel } from "react-icons/md";
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
        <section id='skills' className='flex flex-col align-middle max-w-5xl mx-auto  justify-center'>
            <h1
                className={`text-5xl lg:text-6xl text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-8`}>
                My Skills!
            </h1>
            {!technicalClicked && !interpersonalClicked ? (
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

            {technicalClicked || interpersonalClicked? <div className="mt-[12%] mr-[7%] flex justify-end"><HiMiniXMark className="text-xl lg:text-3xl text-[#ED7D31] cursor-pointer" onClick={()=>{setTechincalClicked(false);setInterpersonalClicked(false)}}/></div>:null}
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
