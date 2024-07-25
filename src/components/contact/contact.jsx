import React from 'react'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faMap} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gif from '../assets/contact gif (2).gif'
import whatapp from '../assets/whatapp icon.png'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import Footer from '../footer/footer'
export default function contact() {
  return (
    <div id="contact-page">
      {/* <!-- Section starts --> */}
          <div id="contact-section">
            <h1>CONTACT US</h1>
          </div>
          {/* <!-- Section ends --> */}
          {/* <!-- contact-details starts --> */}
          <div id="contact-details">
            <div id="left-details">
                <div>
                <FontAwesomeIcon icon={faPhone} />
                    <h4>PHONE</h4>
                    <h3>+91 123456789</h3>
                </div>
                <div>
                <FontAwesomeIcon icon={faEnvelope} />
                    <h4>MAIL US</h4>
                    <h3>info@hubsem.com</h3>
                </div>
                <div id="left-address">
                <FontAwesomeIcon icon={faMap} />
                    <h4>OFFICE ADDRESS</h4>
                    <h3>#714A, Spencer Plaza,Phase II, 7th Floor,#769,
                        Anna Salai, Thousand Lights,Chennai-600002,Tamilnadu,India</h3>
                </div>
            </div>
            <div id="right-gif"><img src={gif} alt=""/></div>
          </div>
          {/* <!-- contact-details ends --> */}

          {/* <!-- contact starts --> */}
          <div id="contact-contact">
          <div id="home-contact">
          <div id="contact-left">
                    <h4>GET IN TOUCH</h4>
                    <h3>We'd love to hear from you.</h3>
                    <p>Lorem, ipsum dolor sit amet
                         consectetur adipisicing elit.
                          Eos fugiat laborum architecto 
                          quis quae nisi minus nostrum 
                          quod dignissimos Lorem ipsum dolor sit.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iure facilis ut! Aspernatur laudantium impedit dignissimos. Quas, magni in. Quia officiis eaque dolorum, placeat facilis 
                        recusandae Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. fugiat ipsum esse asperiores!</p>
                            <h5 id="icon-head">FOLLOW US ON</h5>
                            <div id="icon-contact">
                            <a href="https://www.facebook.com/hubsemsolutions" target='blank'><FontAwesomeIcon icon={faFacebookF}/></a>
      <a href="https://www.instagram.com/hubsemsolutions/" target='blank'><FontAwesomeIcon icon={faInstagram}/></a>
      <a href="https://x.com/hubsem" target='blank'><FontAwesomeIcon icon={faTwitter}/></a>
      <a href="https://www.linkedin.com/company/hubsem-software-solutions/mycompany/" target='blank'><FontAwesomeIcon icon={faLinkedinIn}/></a>
      <a href="https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ" target='blank'><FontAwesomeIcon icon={faYoutube}/></a>
                            </div>
                    </div>

                    <div id="right-contact">

                        <div id="right-body">
                            <form action="">
                            <input type="text" required  placeholder="Full name*"/>
                            <input type="email" required placeholder="Email*"/>
                            <input type="number" required  placeholder="Phone*"/>
                            <h5>SERVICE OF INTEREST:</h5>
                            <select name="" required id="">
                                <option value="option 1">-Please choose an option-</option>
                                <option value="option 2">Web Application</option>
                                <option value="option 3">Mobile Application</option>
                                <option value="option 4">Web Design & Development</option>
                                <option value="option 5">Graphic Design</option>
                                <option value="option 6">Digital Marketing</option>
                                <option value="option 7">Maintenance & Support</option>
                            </select>
                            <input type="text" required placeholder="Description of Your IT Needs"/>
                            <textarea required cols="5" rows="2" placeholder="Additional Comments or Questions"></textarea>
                            <button>SUBMIT</button>
                            </form>
                        </div>
                    </div>

          </div>
          {/* <!-- whatapp icon starts -->  */}
          <div id="whatapp-icon">
                <a target='blank' href="https://web.whatsapp.com/"><p>For Enquiries</p><img src={whatapp} alt="" /></a>
                
            </div>
                {/* <!-- whatapp icon ends --> */}

          </div>
<Footer/>
    </div>
  )
}
