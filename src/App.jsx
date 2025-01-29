// import About from './About/About.jsx'
import Aboutme from './Components/Aboutme.jsx'
import Banner from './Components/Banner.jsx'
import Contact from './Components/Contact.jsx'
import Education from './Components/Education.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Project from './Components/Project.jsx'
import Skills from './Components/Skills.jsx'
import {Toaster} from "react-hot-toast";

function App() {
  

  return (
    <>
      <div>
      <Navbar />
      <Banner />
      <Aboutme />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      </div>
      <Toaster/>
    </>
  )
}

export default App
