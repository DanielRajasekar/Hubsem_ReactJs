import React from 'react'
import whatapp from '../assets/whatapp icon.png'
import Footer from '../footer/footer'
export default function internship() {
  return (
    <div id="intern-page">
      {/* <!-- Section starts --> */}
          <div id="intern-section">
            <h1>INTERNSHIP PROGRAM</h1>
          </div>
          {/* <!-- Section ends --> */}
          {/* <!-- intern details starts --> */}
            <div id="intern-details">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, inventore?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, minus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore magni molestias adipisci delectus minus dolorum ex, rem provident, earum quo perferendis. Vitae libero animi exercitationem unde maxime necessitatibus hic ea?</p>
                    
                    <div>
                      <form action="">
                        <input type="text" required placeholder="Full name*" />
                        <input type="email" required placeholder="Email Address*"/>
                        <input type="number" required placeholder="Phone number*"/>
                        <input type="text" required placeholder="Address*"/>
                        <input type="text" required placeholder="City*"/>
                        <input type="text" required placeholder="State/Province"/>
                        <input type="number" required placeholder="ZIP/Postal Code*"/>
                        <input type="text"  required placeholder="Country*"/>
                        <h3>INTERNSHIP POSITION OF INTREST</h3>
                        <select required>
                            <option value="option 1">-Please choose an option-</option>
                            <option value="option 2">Web Application</option>
                            <option value="option 3">Mobile Application</option>
                            <option value="option 4">Web Design & Development</option>
                            <option value="option 5">Graphic Design</option>
                            <option value="option 6">Digital Marketing</option>
                            <option value="option 7">Maintenance & Support</option>
                        </select>
                        <button>SUBMIT</button>
                        </form>
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
