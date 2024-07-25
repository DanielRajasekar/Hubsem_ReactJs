import React from 'react'
import Footer from '../footer/footer'
import whatapp from '../assets/whatapp icon.png'
import graphic from '../assets/graphic-design-1-768x513.jpg'
export default function graphicDesign() {
  return (
    <div id="graphic-page">
    {/* <!-- Section starts --> */}
        <div id="graphic-section">
          <h1>GRAPHIC DESIGN</h1>
        </div>
        {/* <!-- Section ends --> */}
        <div id="web-details">
          {/* article starts */}
          <div id="article">
                  <img src={graphic} alt=""/>
                  <div id="article-content">
                      <h4>WELCOME TO OUR GRAPHIC DESIGN!</h4>
                      <h1>Designing the Future, Pixel by Pixel!</h1>
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
              <h1>Bringing Your Vision to Life</h1>
           </div>
              {/* terms ends */}
          <div id="block-list">
              <div id="blocks">
                  <h1>DIGITAL DESIGN</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>PRINT DESIGN</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>LOGO DESIGN & BRANDING</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>IMAGE EDITING AND MANIPULATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>USER INTERFACE (UI) AND USER EXPERIENCE (UX) DESIGN</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>ILLUSTRATION</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>LAYOUT DESIGN </h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
              </div>
              <div id="blocks">
                  <h1>ADVERTISING AND MARKETING</h1>
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
