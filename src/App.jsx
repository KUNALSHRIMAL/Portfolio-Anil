import {Routes , Route} from 'react-router-dom'

//Main Home Page Component
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Portfolio Pages
import MobileApps from "./pages/MobileApps";
import Ecommerce from "./pages/Ecommerce";
import Dashboards from "./pages/Dashboards";
import HighFidelity from "./pages/HighFidelity";
import ProductDesign from "./pages/ProductDesign";

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
        {/* PORTFOLIO PAGES */}
      <Route path="/portfolio/mobile-apps" element={<MobileApps />} />
      {/* <Route path="/portfolio/ecommerce" element={<Ecommerce />} />
      <Route path="/portfolio/dashboards" element={<Dashboards />} />
      <Route path="/portfolio/high-fidelity" element={<HighFidelity />} />
      <Route path="/portfolio/product-design" element={<ProductDesign />} /> */}

      </Routes>    
    </>
  )
}

export default App
