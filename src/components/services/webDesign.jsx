import React from 'react'
import Footer from '../footer/footer'
import mobile from "../assets/mobile-application-2.jpg"
import whatapp from '../assets/whatapp icon.png'
export default function webDesign() {
  return (
    <div id="web-page">
      {/* <!-- Section starts --> */}
          <div id="web-section">
            <h1>WEB DESIGN & DEVELOPMENT</h1>
          </div>
          {/* <!-- Section ends --> */}
          <div id="web-details">
            {/* article starts */}
            <div id="article">
                    <img src={mobile} alt=""/>
                    <div id="article-content">
                        <h4>WELCOME TO OUR WEB DESIGN & DEVELOPMENT</h4>
                        <h1>Empowering Businesses Online:Web Design  & Development Excellence</h1>
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
                <h1>Designing Tomorrow's Web Today: Innovative Solutions, Lasting Impressions</h1>
             </div>
                {/* terms ends */}
            <div id="block-list">
                <div id="blocks">
                    <h1>VISUAL APPEAL</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
                </div>
                <div id="blocks">
                    <h1>USER EXPERIENCE (UX)</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
                </div>
                <div id="blocks">
                    <h1>RESPONSIVE DESIGN</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
                </div>
                <div id="blocks">
                    <h1>ANALYTICS AND TRACKING</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
                </div>
                <div id="blocks">
                    <h1>SEARCH ENGINE OPTIMIZATION (SEO)</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
                </div>
                <div id="blocks">
                    <h1>SECURITY</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
                </div>
                <div id="blocks">
                    <h1>BACKEND DEVELOPMENT</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum atque laborum, quod repellat sed perspiciatis animi voluptas eveniet aut aspernatur aperiam suscipit explicabo recusandae, nesciunt ex adipisci pariatur qui alias.</p>
                </div>
                <div id="blocks">
                    <h1>DEPLOYMENT AND MAINTENANCE</h1>
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
