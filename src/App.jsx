import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Team from './components/sections/Team'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

export default function App() {
    return (
        <>
            <main>
                <Hero />
                <Services />
                <Projects />
                <Team />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
        </>
    )
}