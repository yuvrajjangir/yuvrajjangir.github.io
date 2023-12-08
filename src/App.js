
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills/Skills';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';
import About from './Components/About/About';
import Home2 from './Components/Home/Home2';
import Particle from './Components/Particle';
function App() {
  return (
      <div className="App">
        <Navbar />
        {/* <Particle/> */}
        <Home/>
        <Home2/>
        <Skills/>
        <Footer />
      </div>
   
  );
}

export default App;
