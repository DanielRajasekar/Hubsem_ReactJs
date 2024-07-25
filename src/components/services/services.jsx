import React from 'react'
import service1 from '../assets/services1.jpg'
import service2 from '../assets/services2.jpg'
import service3 from '../assets/services3.jpg'
import service4 from '../assets/services4.jpg'
import service5 from '../assets/services5.jpg'
import service6 from '../assets/services6.jpg'
import whatapp from '../assets/whatapp icon.png'
import Footer from '../footer/footer'
import {  NavLink } from "react-router-dom"
export default function services() {
  return (
    
      <div id="services-page">
      {/* <!-- Section starts --> */}
          <div id="services-section">
            <h1>SERVICES</h1>
          </div>
          {/* <!-- Section ends --> */}

          <div id="services-items">
           <div id="services-container">

            <div id="item">
                <NavLink to="/WebApp"><img src={service1} alt="" /></NavLink>
                <h3>WEB APPLICATION</h3>
            </div>

            <div id="item">
                <NavLink to="/WebDesign"><img src={service2} alt="" /></NavLink>
                <h3>WEB DESIGN & DEVELOPMENT</h3>
            </div>

            <div id="item">
                <NavLink to="GraphicDesign"><img src={service3} alt="" /></NavLink>
                <h3>GRAPHIC DESIGN</h3>
            </div>

            <div id="item">
            <NavLink to="/MobileApp"><img src={service4} alt="" /></NavLink>
                <h3>MOBILE APPLICATION</h3>
            </div>

            <div id="item">
            <NavLink to="/Services"><img src={service5} alt="" /></NavLink>
                <h3>DIGIAL MARKETING</h3>
            </div>

            <div id="item">
                <NavLink to="/Services"><img src={service6} alt="" /></NavLink>
                <h3>MAINTENANCE & SUPPORT</h3>
            </div>
           </div>
        </div>
         {/* <!-- whatapp icon starts --> */}
         <div id="whatapp-icon">
                <a target='blank' href="https://web.whatsapp.com/"><p>For Enquiries</p><img src={whatapp} alt="" /></a>
                
            </div>
        {/* <!-- whatapp icon ends --> */}

      
      <Footer/>
    </div>
  )
}
