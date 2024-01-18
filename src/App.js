import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import HashLoader from "react-spinners/HashLoader";
import Countup from "./components/Countup";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import ParticleBack from "./components/ParticleBack";



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <HashLoader className="loder"
          color="#4ec2ec"
          size={100}
          cssOverride={{}}
         style={{color:'red'}}/>
      ) : (
        <div>
            {/* <ParticleBack/> */}
          <Header />
          <Main/>
          <About/>
           <Countup/>
           <Education/>
          <Skills/>   
          <Project/>
          <Contact/>  
           <Footer/>  
         
            
         
        </div>
      )}
    </div>
  );
}

export default App;
