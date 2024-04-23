import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills/Skills';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './Components/Home/About';
import Preloader from "./Components/Pre";
import { useEffect, useState } from 'react';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

     // Increment view count when component mounts
     fetch('https://portfolio-backend-0mu3.onrender.com/views', { method: 'POST' })
     .catch(err => console.error(err));

    return () => clearTimeout(timer);
  }, []);
  return (
    // <Router>
    <div>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        {/* <Particle/> */}
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>   
      <Footer />
      </div>
  {/* //  </Router> */}
  </div>
  );
}

export default App;
