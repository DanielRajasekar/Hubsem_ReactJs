
import './App.css';
import { Routes,Route,Navigate} from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Service from './components/services/services.jsx'
import Contact from './components/contact/contact.jsx'
import Internship from './components/internship/internship.jsx'
import WebDesign from './components/services/webDesign.jsx';
import GraphicDesign from './components/services/graphicDesign.jsx';
import Cloud from './components/services/cloud.jsx'
import Machine from './components/services/machine.jsx'
import Artificial from './components/services/artifical.jsx'
import Cyber from './components/services/cyber.jsx'
import DataScience from './components/services/datascience.jsx'
import Header from './components/header/header.jsx'
import WebApp from './components/services/webApp.jsx'
import MobileApp from './components/services/mobileApp.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
function App() {

  

  useEffect(() => {
    AOS.init({
      duration: 1000,
            once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      
      {/* <Router> */}
      <Header/>
     
      <Routes>
                {/* <Route exact path="/"  element={<Home/>}/> */}
                <Route path="/Home" element={<Home/>}/>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Services" element={<Service/>}/>
                <Route path="/Internship" element={<Internship/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/WebApp" element={<WebApp/>}/>
                <Route path="/MobileApp" element={<MobileApp/>}/>
                <Route path="/WebDesign" element={<WebDesign/>}/>
                <Route path="/GraphicDesign" element={<GraphicDesign/>}/>
                <Route path="/CloudComputing" element={<Cloud/>}/>
                <Route path="/MachineLearning" element={<Machine/>}/>
                <Route path="/ArtificialIntelligence" element={<Artificial/>}/>
                <Route path="/CyberSecurity" element={<Cyber/>}/>
                <Route path="/DataScience" element={<DataScience/>}/>
            </Routes>
          
            {/* </Router> */}
    </div>
  );
}

export default App;
