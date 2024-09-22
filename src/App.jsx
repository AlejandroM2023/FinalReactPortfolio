import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import AboutMe from './sections/AboutMe'
import Test from './sections/test'
import Work from './sections/Work'
import Tech from './sections/Tech'
import Contact from './sections/Contact'
const App = () => {
  return <main className="max-w-7xl mx-auto">
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Work/>
    <Tech/>
    <Contact/>
  </main>
}

export default App;