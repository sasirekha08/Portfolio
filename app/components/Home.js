import Image from 'next/image'
import Profile from '../../public/profile_color.png'
import { reenieBeenie } from '../fonts'

const Home = () => {
  return (
    <section id="#home" className='grid grid-cols-2 '>
    <div className='profile-sunflower-backdrop '>
        <Image
            src={Profile}
            alt='Profile'
            className='ml-[275px] pt-[160px]'
            width='265'
            height='370'
        />
    </div>
    <div
        className={`mt-40 text-[64px] pl-[200px] ${reenieBeenie.className} text-[#10B981] pt-40 `}>
        <h1 className='leading-8'>Hello!</h1>
        <h1 className=''>
            I'm{' '}
            <span className='underline decoration-[3px] underline-offset-8'>
                Sasi Rekha
            </span>
        </h1>
    </div>
</section>
  )
}

export default Home
