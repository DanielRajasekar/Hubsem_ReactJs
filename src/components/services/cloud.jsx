import React from 'react'
import Footer from '../footer/footer'
import cloud2 from '../assets/cloud2.jpg'
import whatapp from '../assets/whatapp icon.png'
export default function cloud() {
  return (
    <div id="cloud-page">
    {/* <!-- Section starts --> */}
        <div id="cloud-section">
          <h1>CLOUD COMPUTING</h1>
        </div>
        {/* <!-- Section ends --> */}
        <div id="web-details">
          {/* article starts */}
          <div id="article">
                  <img src={cloud2} alt=""/>
                  <div id="article-content">
                      <h4>WELCOME TO OUR CLOUD COMPUTING!</h4>
                      <h1>Innovate and Scale with Cloud Technology</h1>
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
              <h1>Cloud-Powered Solutions for Mordern Enterprises.</h1>
           </div>
              {/* terms ends */}
          <div id="block-list">
              <div id="blocks">
                  <h1>SCALABILITY</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>COST-EFFICIENCY</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>FLEXIBILITY</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>ENHANCED SECURITY</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>RELIABILITY & PERFORMANCE</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>AUTOMATED UPDATES</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>DATA BACKUP AND RECOVERY </h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>INNOVATION AND COLLABORATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>ENVIRONMENTAL BENEFITS</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>COMPETITIVIVE ADVANTAGE</h1>
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
