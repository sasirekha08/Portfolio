import Image from 'next/image'
import AboutMeCollage from '../../public/about_me.png'
import { reenieBeenie, robotoMono } from '../fonts'

const AboutMe = () => {
    return (
        <section id="about" className=''>
            <div className='flex flex-col align-middle justify-center'>
                <h1
                    className={`text-[64px] text-center ${reenieBeenie.className} text-[#10B981] underline decoration-[3px] underline-offset-8`}>
                    About Me!
                </h1>

                <Image
                    src={AboutMeCollage}
                    alt='About Me'
                    className='pt-12 mx-auto'
                    width='898'
                    height='756'
                />
            </div>

            <div
                className={`pt-32 flex flex-col align-middle justify-center max-w-4xl text-[#8E8E8E] mx-auto space-y-8 text-xl ${robotoMono.className}`}>
                <p>
                    Hey there! I'm a passionate <span className='text-[#ED7D31]'>frontend developer</span> who
                    loves turning ideas into beautiful,{' '}
                    <span className='text-[#ED7D31]'>functional web interfaces</span>. With a knack for making
                    things run smoothly and look amazing, I thrive on creating experiences that users love and
                    remember.
                </p>
                <p>
                    I've had the pleasure of{' '}
                    <span className='text-[#ED7D31]'>mentoring new developers, sharing my knowledge,</span>{' '}
                    and watching them grow into confident coders. My goal is to keep pushing the boundaries of
                    digital design and make the online world a better place, one pixel at a time.
                </p>
                <p>
                    When I'm not coding, you can find me immersed in art, music, dance, or exploring new
                    places. I love diving into mini-projects and learning new skills – during the pandemic, I
                    even taught myself to crochet and play the flute! And let's not forget, I’m always
                    happiest with a furry friend by my side.
                </p>
                <p>Let's connect and see how we can create something amazing together!</p>
            </div>
        </section>
    )
}

export default AboutMe
