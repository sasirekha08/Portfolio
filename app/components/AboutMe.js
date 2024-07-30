import Image from 'next/image'
import AboutMeCollage from '../../public/about_me.png'
import { reenieBeenie, robotoMono } from '../fonts'

const AboutMe = () => {
    return (
        <section id='about' className='max-w-4xl mx-auto'>
            <div className='flex flex-col align-middle justify-center'>
                <h1
                    className={`text-5xl lg:text-6xl text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-4 lg:underline-offset-8`}>
                    About Me!
                </h1>

                <Image
                    quality={100}
                    src={AboutMeCollage}
                    alt='About Me'
                    className='pt-8 lg:pt-12 mx-auto'
                    width='898'
                    height='756'
                />
            </div>

            <div
                className={` pt-24 lg:pt-32 flex flex-col align-middle justify-center  text-[#8E8E8E]  space-y-8 text-base lg:text-xl ${robotoMono.className}`}>
                <p>
                    Hey there! I&apos;m a passionate <span className='text-[#ED7D31]'>frontend developer</span> who
                    loves turning ideas into beautiful,{' '}
                    <span className='text-[#ED7D31]'>functional web interfaces</span>. With a knack for making
                    things run smoothly and look amazing, I thrive on creating experiences that users love and
                    remember.
                </p>
                <p>
                    I&apos;ve had the pleasure of{' '}
                    <span className='text-[#ED7D31]'>mentoring new developers, sharing my knowledge,</span>{' '}
                    and watching them grow into confident coders. My goal is to keep pushing the  <span className='text-[#ED7D31]'>boundaries of
                    digital design</span> and make the online world a better place,  <span className='text-[#ED7D31]'>one pixel at a time</span>.
                </p>
                <p>
                    When I&apos;m not coding, you can find me immersed in  <span className='text-[#ED7D31]'>art, music, dance, or exploring new
                    places</span>. I love diving into mini-projects and  <span className='text-[#ED7D31]'>learning new skills</span> – during the pandemic, I
                    even taught myself to crochet and play the flute! And let&apos;s not forget, I&apos;m always
                    <span className='text-[#ED7D31]'> happiest with a furry friend</span> by my side.
                </p>
                <p>Let&apos;s  <span className='text-[#ED7D31]'>connect</span> and see how we can create  <span className='text-[#ED7D31]'>something amazing</span> together!</p>
            </div>
        </section>
    )
}

export default AboutMe
