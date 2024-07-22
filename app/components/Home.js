import Image from 'next/image'
import Profile from '../../public/profile_color.png'
import HomeGroup from '../../public/home_group.png'
import { reenieBeenie } from '../fonts'

const Home = () => {
  return (
    <section id="#home" className='flex flex-col-reverse md:flex-row  md:space-x-12 items-center mt-8'>
    {/* <div className='profile-sunflower-backdrop '>
        <Image
            src={Profile}
            alt='Profile'
            className='ml-[275px] pt-[160px]'
            width='265'
            height='370'
        />
    </div> */}
    <Image
            src={HomeGroup}
            alt='Profile'
            className='max-w-full lg:max-w-3xl'
          
        />
    <div
        className={`text-5xl md:text-6xl lg:text-7xl mb-10 lg:mb-0 flex flex-col items-start space-y-2 lg:space-y-5 ${reenieBeenie.className} text-[#10B981] `}>

        <h1 className=''  style={{ fontWeight: '500' }}>Hello!{' '}</h1>
        <h1 className=''  style={{ fontWeight: '500' }}>
            I'm{' '}
            <span className='underline decoration-[3px] underline-offset-4 lg:underline-offset-8'>
                Sasi Rekha
            </span>
        </h1>
    </div>
</section>
  )
}

export default Home
