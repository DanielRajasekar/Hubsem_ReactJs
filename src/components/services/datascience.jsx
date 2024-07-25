import React from 'react'
import whatapp from '../assets/whatapp icon.png'
import Footer from '../footer/footer'
import dataS2 from '..//assets/dataS2.jpg'
export default function datascience() {
  return (
    <div id="dataScience-page">
    {/* <!-- Section starts --> */}
        <div id="dataScience-section">
          <h1>DATA SCIENCE</h1>
        </div>
        {/* <!-- Section ends --> */}
        <div id="web-details">
          {/* article starts */}
          <div id="article">
                  <img src={dataS2} alt=""/>
                  <div id="article-content">
                      <h4>WELCOME TO OUR DATA SCIENCE!</h4>
                      <h1>Data Science for Smarter Business Decisions.</h1>
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
              <h1>From Data to Discoveries: Embrace Data Science.</h1>
           </div>
              {/* terms ends */}
          <div id="block-list">
              <div id="blocks">
                  <h1>DATA ANALYSIS AND VISUALIZATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>PREDICTIVE ANALYTICS</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>MACHINE LEARNING</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>NATURAL LANGUAGE PROCESSING (NLP)</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>DATA MINING</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>DATA ENGINEERING AND INTEGRATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>OPTIMIZATION AND SIMULATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>BUSINESS INTELLIGENCE</h1>
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
