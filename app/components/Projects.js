import { reenieBeenie, robotoMono } from '../fonts'
import TaskManagement from "../../public/task_management.png"
import Image from 'next/image'

import MovieDb from "../../public/movie_db.png"
import PixelPerfect from "../../public/pixel_perfect.png"
import WebWizard from "../../public/web_wizard.png"
import Link from 'next/link'

const Projects = () => {
    let projectsData=[
        {
            id:"pid01",
            image:TaskManagement,
            demoLink:'',
            sourceLink:''
        },
        {
            id:"pid02",
            image:MovieDb,
            demoLink:'',
            sourceLink:''
        },
        {
            id:"pid03",
            image:PixelPerfect,
            demoLink:'',
            sourceLink:''
        },
        {
            id:"pid04",
            image:WebWizard,
            demoLink:'',
            sourceLink:''
        }
    ]
    return (
        <section id='projects' className='flex flex-col align-middle  justify-center'>
            <h1
                className={`text-5xl lg:text-6xl text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-4 lg:underline-offset-8`}>
                Projects
            </h1>
            <div className='flex flex-col max-w-4xl mx-auto space-y-8 lg:space-y-16 pt-8 lg:pt-12'>
                {projectsData?.map(project=>{
                    return(
                <div className='flex flex-col space-y-4 lg:space-y-10 ' key={project.id}>
                    <Image
                        src={project.image}
                        alt='About Me'
                        className='pt-12 mx-auto'
                        width='898'
                        height='756'
                        />
                    <div className='flex flex-row justify-center'>
                        <Link href={project.demoLink} className={`${robotoMono.className} text-base lg:text-xl px-4 border border-[#4F378B] text-[#4F378B] hover:bg-[#c4b8e2] py-2 lg:py-2.5 rounded-l-3xl`} rel="noopener noreferrer" target="_blank">Live Demo</Link>
                        <Link href={project.sourceLink} className={`${robotoMono.className} text-base lg:text-xl px-4 border-r border-y border-[#4F378B] text-[#4F378B] hover:bg-[#c4b8e2] py-2 lg:py-2.5 rounded-r-3xl`} rel="noopener noreferrer" target="_blank">View Source</Link>
                    </div>
                </div>

                    )
                })}
            </div>
        </section>
    )
}

export default Projects
