import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'C:/Users/DANIEL/Desktop/Hubsem internship/hubsem react/hubsem/src/App.css'
import {  NavLink } from "react-router-dom"




import clock from '../assets/clock.png'
import logo from '../assets/hubsem-logo.png'
import {faFacebookF,faLinkedinIn,faTwitter,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPhone,faAngleDown,faAddressCard,faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function header() {
  return (
    <>
    <div id="headerStrip">
    <img src={clock} alt="" />
    <div ><h4>Monday - Friday : 10 AM - 6 PM</h4> </div>
      
      <div id="headericon">
      
      <a href="https://www.facebook.com/hubsemsolutions" target='blank'><FontAwesomeIcon icon={faFacebookF}/></a>
      <a href="https://www.instagram.com/hubsemsolutions/" target='blank'><FontAwesomeIcon icon={faInstagram}/></a>
      <a href="https://x.com/hubsem" target='blank'><FontAwesomeIcon icon={faTwitter}/></a>
      <a href="https://www.linkedin.com/company/hubsem-software-solutions/mycompany/" target='blank'><FontAwesomeIcon icon={faLinkedinIn}/></a>
      <a href="https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ" target='blank'><FontAwesomeIcon icon={faYoutube}/></a>
      </div>
    </div>
    
    <div id="headerContact">
        <div id="logo">
          <img src={logo} alt="" />
          </div>
        <div class="contact">
            <div id="contact">
           <a href="tel:+91%209500590134"><FontAwesomeIcon icon={faPhone}/></a>
                <div>
                    <h3>Reach Us</h3>
                    <h5>+91 9500590134</h5>
                </div>
            </div>
            <div id="contact" class="address">
               
            <a href="mailto:info@hubsem.com" target='blank'><FontAwesomeIcon icon={faAddressCard}/></a>
                
                <div>
                    <h3>Office Address</h3>
                
                    <h5>#714A,Spencer Plaza, Phase II,7th Floor, #769, Anna Salai,
                         Thousand Light, Chennai-600002</h5>
                </div>
            </div>
            <div id="contact">
               
            <a href="mailto:info@hubsem.com" target='blank'><FontAwesomeIcon icon={faEnvelope}/></a>
                
                <div>
                    <h3>Send us an email</h3>
               
                    <h5>info@hubsem.com</h5>
                </div>
            </div>
        </div>
        </div>
        {/* Header Contact Ends  */}

        {/* <!-- Hamburger icon --> */}

      {/* NavBar starts  */}
      <nav class="nav">
      <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <span id="slide">slide</span>


        {/* <Router> */}
      <ul id="sidemenu" class="menu">
      <li><img src={logo} width="100px" alt="" /></li>



      <li><a href="/Home"><NavLink to="/Home">HOME</NavLink></a></li>
      <li><a href="/About"><NavLink to="/About">ABOUT</NavLink></a></li>
      <li id="service-dropdown"><a href="/Services"><NavLink to="/Services">SERVICES <FontAwesomeIcon icon={faAngleDown}/></NavLink></a>
      <div id="service-list">
      <div id="service-left">
      <h2>WEB DESIGN & DEVDLOPMENT</h2>
      <div>
                            <ul>
                                <li><NavLink to="/WebDesign">Static Website</NavLink></li>
                                <li><NavLink to="/WebDesign">Dynamic Website</NavLink></li>
                                <li><NavLink to="/WebDesign">Ecommerce Website</NavLink></li>
                                <li><NavLink to="/WebDesign">Website Revamp</NavLink></li>
                                <li><NavLink to="/WebDesign">Website Maintenance</NavLink></li>
                            </ul>
                            
                        </div>  
                        <br /><br />
                        <h2>ADVANCED</h2>
                        <div>
                            <ul>
                                <li><NavLink to="/CloudComputing">Cloud Computing</NavLink></li>
                                <li><NavLink to="/MachineLearning">Machine Learning</NavLink></li>
                                <li><NavLink to="/ArtificialIntelligence">Artificial Intelligence</NavLink></li>
                                <li><NavLink to="/CyberSecurity">Cyber Security</NavLink></li>
                                <li><NavLink to="/DataScience">Data Science</NavLink></li>
                            </ul>
                            
                        </div>
        </div>
        <div id="service-mid">
        <h2>GRAPHIC DESIGN</h2>
                        <div>
                            <ul>
                                <li><NavLink to="/GraphicDesign">Logo Design</NavLink></li>
                                <li><NavLink to="/GraphicDesign">Brochures / Posters / Flyers</NavLink></li>
                                <li><NavLink to="/GraphicDesign">Marketing Cards</NavLink></li>
                                <li><NavLink to="/GraphicDesign">Photography + Videography</NavLink></li>
                                <li><NavLink to="/GraphicDesign">Mockup Templates</NavLink></li>
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <h2>SOFTWARE DEVELOPMENT</h2>
                        <div>
                            <ul>
                            
                                <li><NavLink to="/WebApp">Web App Development</NavLink></li>
                                <li><NavLink to="/MobileApp">Mobile App Development</NavLink></li>
                            </ul>
                            
                        </div>
                  </div>


                  <div id="service-right">
                        <h2>DIGITAL MARKETING</h2>
                        <div>
                            <ul>
                                <li><NavLink to="/Services">Search Engine Optimization (SEO)</NavLink></li>
                                <li><NavLink to="/Services">Social Media Marketing (SMM)</NavLink></li>
                                <li><NavLink to="/Services">Search Engine Marketing (SEM)</NavLink></li>
                                <li><NavLink to="/Services">Social Media Optimization (SMO)</NavLink></li>
                                <li><NavLink to="/Services">Content Marketing</NavLink></li>
                                <li><NavLink to="/Services">Email Marketing</NavLink></li>
                                <li><NavLink to="/Services">SMS Marketing</NavLink></li>
                            </ul>
                            
                        </div>
                    </div>

      </div>
      </li>
      <li id="product-dropdown"><a href="#Product">PRODUCTS <FontAwesomeIcon icon={faAngleDown}/></a>
      
      <ul id="product-list">
                <li>Online Accounting Software</li><hr/>
                <li>Online Ticket Booking Software</li><hr/>
                <li>Online School Management Software</li><hr/>
                <li>Hospital Management Software</li><hr/>
                <li>Inventory Management Software</li><hr/>
                <li>CRM SOFTWARE</li><hr/>
                <li>Payroll Software</li><hr/>
                <li>Restaurant Food Delivery App</li><hr/>
                <li>Grocery Mobile App</li><hr/>
                <li>College EPR</li>
            </ul>
      
      
      
      </li>
      <li><a href="/Internship"><NavLink to="/Internship">INTERNSHIP</NavLink></a></li>
      <li><a href="/Contact"><NavLink to="/Contact">CONTACT US</NavLink></a></li>

      </ul>
      

      
      <a id="button" href="/Contact"><NavLink to="/Contact">GET A QUOTE</NavLink></a>
      </nav>

    
    

    </>
  )
}
