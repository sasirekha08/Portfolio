import Image from "next/image";
// import Profile from "../public/profile.png"
import Profile from "../public/profile_color.png"

import { reenieBeenie } from './fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="main-backdrop pt-16 px-10">
        <div className="grid grid-cols-2 ">

      <div className="profile-sunflower-backdrop ">
      <Image src={Profile} alt="Profile" className="ml-[275px] pt-[160px]" width="265" height="370"/>
        </div>
      <div className={`mt-40 text-[64px] pl-[200px] ${reenieBeenie.className} text-[#10B981] pt-40 `}>
        <h1 className="leading-8">Hello!</h1>
        <h1 className="">I'm Sasi Rekha</h1>
      </div>
      </div>

      </div>
      </main>
  );
}
