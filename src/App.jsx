import {Routes , Route} from 'react-router-dom'

//Main Home Page Component
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

//Portfolio App Component
import MobileApps from './pages/MobileApps.jsx'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Hero/>
          <Services/>
          <About/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </>
      }
      />
      <Route path="/portfolio/mobile-apps" element={<MobileApps />} />

      </Routes>    
    </>
  )
}

export default App
