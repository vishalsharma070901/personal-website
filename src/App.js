import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import HashLoader from "react-spinners/HashLoader";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },1000)
  }, []);

  return (
    <div className="App">
      {loading ? (
        <HashLoader className="loder"
          color="#d122e3"
          size={50}
          cssOverride={{}}
         style={{color:'red'}}/>
      ) : (
        <div>
            
          <Header />
          <Main/>
          <About/>
          
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
