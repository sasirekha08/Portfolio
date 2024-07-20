import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import SideNavBar from './components/SideNavBar'

export default function App() {
    return (
        <main className='flex min-h-screen flex-col '>
            <div className='main-backdrop1'>
                <div className='main-backdrop2 '>
                    <div className='2xl:max-w-[1700px] mx-auto'>
                        <SideNavBar />
                        <div className='space-y-36 py-16 px-10 scroll-smooth'>
                            <Home />
                            <AboutMe />
                            <Skills />
                            <WorkExperience />
                            <Projects />
                            <ContactMe />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
