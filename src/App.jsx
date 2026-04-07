import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Benefits from './components/sections/Benefits'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import TechStack from './components/sections/TechStack'
import FloatingCTA from './components/ui/FloatingCTA'

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Benefits />
                <TechStack />
                <Projects />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
            <FloatingCTA />
        </>
    )
}
