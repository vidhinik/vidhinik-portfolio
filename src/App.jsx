import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Analytics from './sections/Analytics'
import WebDev from './sections/WebDev'
import Tools from './sections/Tools'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Analytics />
        <WebDev />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  )
}