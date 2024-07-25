import React from 'react'
import whatapp from '../assets/whatapp icon.png'
import Footer from '../footer/footer'
import mobileApp2 from '../assets/mobile-application-2.jpg'
export default function mobileApp() {
  return (
    <div id="mobileApp-page">
    {/* <!-- Section starts --> */}
        <div id="mobileApp-section">
          <h1>MOBILE APPLICATION</h1>
        </div>
        {/* <!-- Section ends --> */}
        <div id="web-details">
          {/* article starts */}
          <div id="article">
                  <img src={mobileApp2} alt=""/>
                  <div id="article-content">
                      <h4>WELCOME TO OUR MOBILE APPLICATION!</h4>
                      <h1>Experience convenience, right at your fingertips!</h1>
                      <p> Harum, repudiandae? Corrupti vel quia qui accusamus fuga porro molestiae repellendus minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, veritatis.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis, molestias ipsa vitae dolor non nisi et consequuntur voluptatum odit obcaecati fuga cupiditate maiores
                      </p>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam esse cupiditate quos ab dolorum mollitia veritatis dolor accusantium assumenda impedit perferendis sit ea, laudantium, officia et debitis quia error deleniti?</p>
                  </div>
                  
              </div>
              {/* article ends */}

              {/* terms starts */}
             

              <div id="terms">
              <h4>FEATURES</h4>
              <h1>Discover, connect, and explore with our app.</h1>
           </div>
              {/* terms ends */}
          <div id="block-list">
              <div id="blocks">
                  <h1>INTUITIVE USER EXPERIENCE</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>QUICK FILE ACCESS</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>REMINDERS AND NOTIFICATIONS</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>EFFICIENT TIME MANAGEMENT</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>OFFLINE FUNCTIONALITY</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>DATA SYNC ACROSS DEVICES</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>PERSONALIZATION OPTIONS</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>ENHANCED SECURITY</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
          </div>


              </div>
              {/* <h1>hello</h1> */}
        
       {/* <!-- whatapp icon starts --> */}
       <div id="whatapp-icon">
              <a target='blank' href="https://web.whatsapp.com/"><p>For Enquiries</p><img src={whatapp} alt="" /></a>
              
          </div>
      {/* <!-- whatapp icon ends --> */}

    
    <Footer/>
  </div>
  )
}
