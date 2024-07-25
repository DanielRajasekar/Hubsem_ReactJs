import React from 'react'
import homecover from '../assets/homecover.jpg'
import articlecover from '../assets/article cover.jpg'
import service1 from '../assets/Service-1.jpg'
import service2 from '../assets/Service-2.jpg'
import service3 from '../assets/Service-3.jpg'
import service4 from '../assets/Service-4.jpg'
import service5 from '../assets/Service-5.jpg'
import service6 from '../assets/Service-6.jpg'
import serviceicon1 from '../assets/service-icon 1.png'
import serviceicon2 from '../assets/service-icon 2.png'
import serviceicon3 from '../assets/service-icon 3.png'
import serviceicon4 from '../assets/service-icon 4.png'
import serviceicon5 from '../assets/service-icon 5.png'
import serviceicon6 from '../assets/service-icon 6.png'
import product1 from '../assets/Product-1.jpg'
import product2 from '../assets/Product-2.jpg'
import product3 from '../assets/Product-3.jpg'
import product5 from '../assets/Product-5.jpg'
import product6 from '../assets/Product-6.jpg'
import product7 from '../assets/Product-7.jpg'
import product8 from '../assets/Product-8.jpg'
import product9 from '../assets/Product-9.jpg'
import product10 from '../assets/Product-10-683x1024.jpg'
import whatapp from '../assets/whatapp icon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay} from 'swiper/modules';
import Footer from '../footer/footer'
import {  NavLink } from "react-router-dom"



import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment,faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faPencil,faCode,faServer,faGlobe,faMap,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faInstagram,faCodepen,faLinkedinIn,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'



export default function home() {
  return (
    <div>
      {/* <!-- section Start --> */}
             <section >
                <div id="cover-content"
                data-aos="slide-right"
                data-aos-delay="500"
                data-aos-once="true"
                >
                <h1
                data-aos="zoom-in"
                 data-aos-delay="1200"
                 data-aos-once="true"
                 >Elevating Business through Technology - 
                    Your Gateway to IT Excellence
                    </h1>
                </div>
                <img 
                    data-aos="fade-in" data-aos-delay="100"
                 src={homecover} alt=""/>
            </section> 
            {/* <!-- section Ends --> */}
            <div id="terms">
                <h4>SIMPLIFY , STREAMLINE , SUCCEED</h4>
                <h1>A step flow process for delivering IT services</h1>
             </div>
            <div id="svg-icon">
                <div>
                <FontAwesomeIcon icon={faComment} />
                    <p>Requirement Analysis</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faPencil} />
                    <p>Design</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faCode} />
                    <p>Coding Impelementation</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faServer} />
                    <p>Deployment</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faGlobe} />
                    <p>Maintenance</p>
                </div>
            </div>

            {/* <!-- Article start --> */}
            {/* <!-- <div id="container" > --> */}
                <div id="article">
                    <img src={articlecover} alt=""/>
                    <div id="article-content">
                        <h4>WELCOME TO HUBSEM SOLUTIONS</h4>
                        <h1>Innovative IT Services for <br/> Seamless Business Operations</h1>
                        <p> Harum, repudiandae? Corrupti vel quia qui accusamus fuga porro molestiae repellendus minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis, molestias ipsa vitae dolor non nisi et consequuntur voluptatum odit obcaecati fuga cupiditate maiores
                            voluptatem delectus explicabo voluptate aliquam itaque adipisci? Molestiae eius libero magni nostrum dicta ducimus dolorem dolorum neque saepe ab, similique iusto? Soluta 
                            perferendis autem harum hic!
                        </p>
                        <div id="block">
                        <FontAwesomeIcon icon={faLaptopCode} />
                            <div>
                                <h4>Customized Solutions</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio debitis explicabo, non magni itaque deleniti quia
                                    quos beatae sequi. Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            
                        </div>
                        <div id="block">
                        <FontAwesomeIcon icon={faCodepen} />
                            <div>
                                <h4>Customized Solutions</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio debitis explicabo, non magni itaque deleniti quia
                                    quos beatae sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sapiente. Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                           
                        </div>
                        <NavLink to="/About">KNOW OUR HISTORY</NavLink>
                    </div>
                    
                </div>
            {/* <!-- Article ends --> */}


            {/* <!-- Services starts --> */}
            
            <div id="services">
            <div id="service-head">
                        <div>
                            <h4>HAVE A LOOK AT</h4>
                        <h1>Our Services</h1>
                        </div>
                        <NavLink to='/Service'>VIEW OUR SERVICES</NavLink>
                    </div>

                    <div class="container">
                    <div class="image-container">
                            <img src={service1} alt="" />
                            <div  class="after">
                                <img src={serviceicon1} alt=""/>
                                <h1 >Heading</h1>
                                <br/>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                            <br/>
                            </div>
                    </div>
                    <div class="image-container">
                            <img src={service2} alt="" />
                            <div  class="after">
                                <img src={serviceicon2} alt=""/>
                                <h1 >Heading</h1>
                                <br/>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                            <br/>
                            </div>
                    </div>
                    <div class="image-container">
                            <img src={service3} alt="" />
                            <div  class="after">
                                <img src={serviceicon3} alt=""/>
                                <h1 >Heading</h1>
                                <br/>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                            <br/>
                            </div>
                    </div>
                    <div class="image-container">
                            <img src={service4} alt="" />
                            <div  class="after">
                                <img src={serviceicon4} alt=""/>
                                <h1 >Heading</h1>
                                <br/>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                            <br/>
                            </div>
                    </div>
                    <div class="image-container">
                            <img src={service5} alt="" />
                            <div  class="after">
                                <img src={serviceicon5} alt=""/>
                                <h1 >Heading</h1>
                                <br/>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                            <br/>
                            </div>
                    </div>
                    <div class="image-container">
                            <img src={service6} alt="" />
                            <div  class="after">
                                <img src={serviceicon6} alt=""/>
                                <h1 >Heading</h1>
                                <br/>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quia!</p>
                            <br/>
                            </div>
                    </div>


                    </div>
              </div>
              {/* <!-- Services ends --> */}


              {/* <!-- Product starts --> */}
              <div id="container">
              <div id="product">
                            <div id="product-head">
                                <h4>KNOW OUR EXCLUSIVE</h4>
                        <h1>Products</h1>
                            </div>
      <Swiper
      // rewind={true}
      modules={[Autoplay]}
      spaceBetween={100}
      slidesPerView={5}
      speed="1000"
      loop="true"
      grabCursor="true"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      
      // navigation={true}
      pagination={{ clickable: true
        ,dynamicBullets: true,
       }}
      // scrollbar={{ draggable: true }}
      
      >
        
      <SwiperSlide><img  src={product1} alt="" />
                <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 1</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product2} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 2</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product3} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 3</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product10} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 4</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product5} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 5</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product6} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 6</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product7} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 7</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product8} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 8</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide><img  src={product9} alt="" />
      <div class="card-content">
                                <div class="layer">
                                    <div>
                                        <h2 class="name">Product 9</h2>
                                        <button>View Product</button>
                                        </div>
                                </div>
                </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
    </div>

   
{/* <!-- Product ends --> */}
            <div id="home-contact">
            <div id="left-contact">
            <h3>FOLLOW US ON</h3> 
            <div id="contact-icon">
            <a href="https://www.facebook.com/hubsemsolutions" target='blank'><FontAwesomeIcon icon={faFacebookF}/></a>
      <a href="https://www.instagram.com/hubsemsolutions/" target='blank'><FontAwesomeIcon icon={faInstagram}/></a>
      <a href="https://x.com/hubsem" target='blank'><FontAwesomeIcon icon={faTwitter}/></a>
      <a href="https://www.linkedin.com/company/hubsem-software-solutions/mycompany/" target='blank'><FontAwesomeIcon icon={faLinkedinIn}/></a>
      <a href="https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ" target='blank'><FontAwesomeIcon icon={faYoutube}/></a>
            </div>
            <p> <i>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos maxime possimus nulla.</i>  </p>
                     <div id="block-content">
                     <FontAwesomeIcon icon={faPhone}/>
                        <div>
                            <h4>CALL US TODAY</h4>
                            <p> +91 123456789</p>
                        </div>
                     </div>
                     <div id="block-content">
                     <a href="mailto:info@hubsem.com" target='blank'><FontAwesomeIcon icon={faEnvelope}/></a>
                        <div>
                            <h4>SEND US AN EMAIL</h4>
                            <p> info@hubsem.com</p>
                        </div>
                     </div>
                     <div id="block-content">
                     <a href="mailto:info@hubsem.com" target='blank'><FontAwesomeIcon icon={faMap}/></a>
                        <div>
                            <h4>OFFICE ADDRESS</h4>
                            <p> #714A, Spencer Plaza,Phase II, 7th Floor,#769,
                                Anna Salai, Thousand Lights,Chennai-600002,Tamilnadu,India
                            </p>
                        </div>
                     </div>
            </div>
            <div id="right-contact">
            <div id="right-head">
                        <h4>STAY IN TOUCH</h4>
                        <h3>Lets's Connect!</h3>
                    </div>
                    <div id="right-body">
                        <form>
                        <input type="text" required important placeholder="Full name*"/>
                        <input type="email" required placeholder="Email*"/>
                        <input type="number" required placeholder="Phone*"/>
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

{/* <!-- whatapp icon starts --> */}
<div id="whatapp-icon">
                <a target='blank' href="https://web.whatsapp.com/"><p>For Enquiries</p><img src={whatapp} alt="" /></a>
                
            </div>
                {/* <!-- whatapp icon ends --> */}
                {/* <!-- contact ends --> */}

                <Footer/>
    </div>
  )
}
