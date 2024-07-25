import React from 'react'
import whatapp from '../assets/whatapp icon.png'
import Footer from '../footer/footer'
import webApp2 from '../assets/web-app2.jpg'
export default function webApp() {
  return (
    <div id="webApp-page">
    {/* <!-- Section starts --> */}
        <div id="webApp-section">
          <h1>WEB APPLICATION</h1>
        </div>
        {/* <!-- Section ends --> */}
        <div id="web-details">
          {/* article starts */}
          <div id="article">
                  <img src={webApp2} alt=""/>
                  <div id="article-content">
                      <h4>WELCOME TO OUR WEB APPLICATION!</h4>
                      <h1>Empower Your Productivity, Unleash Your Potential!</h1>
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
              <h1>The Future of Work: Our Web Application.</h1>
           </div>
              {/* terms ends */}
          <div id="block-list">
              <div id="blocks">
                  <h1>TASK MANAGEMENT</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>COLLABORATION AND COMMUNICATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>FILE STORAGE AND SHARING</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>CALENDAR AND SCHEDULING</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>DATA ANALYTICS AND REPORTING</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>CUSTOMIZATION AND PERSONALIZATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>MOBILE ACCESSIBILITY </h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>SECURITY AND PRIVACY</h1>
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
