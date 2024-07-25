// import React from 'react'
import whatapp from '../assets/whatapp icon.png'
import aboutimg from '../assets/about img1.jpg'
import {useSpring, animated} from 'react-spring'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLightbulb,faBullseye,faUsersRectangle,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer/footer'
function Number({n}){
  const {number} = useSpring({
    from:{number:0},
    number: n,
    delay: 200,
    config:{mass:1,tension:20,friction:10},
  });
  return <animated.span>{number.to((n)=>n.toFixed(0))}</animated.span>;
}
export default function about() {
  
  
  return (
    <div id="about-page">
       {/* <!-- Section starts --> */}
          <div id="about-section">
            <h1>ABOUT US</h1>
          </div>
          {/* <!-- Section ends --> */}

          {/* <!-- abour details starts --> */}
            <div id="about-details">
                <h4>COMPANY PROFILE</h4>
                <h1 data-aos="fade-up" data-aos-once="true">Welcome to Hubsem Software Solutions</h1>
                <p data-aos="fade-up" data-aos-once="true">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum unde laborum perspiciatis nulla illum, fugiat sint possimus nemo voluptatum tempora eaque at pariatur laboriosam. Ullam neque tempore error quae, veritatis quod perferendis quis ipsam similique obcaecati accusamus a illo doloremque sit laudantium vero beatae reprehenderit. Cumque reiciendis totam atque ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum?</p>
                <p data-aos="fade-up" data-aos-once="true">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique modi rem aliquam non! Iste commodi pariatur officia laborum neque amet, iure aspernatur nihil in voluptate architecto eum sit explicabo dolor inventore aperiam beatae est itaque rem placeat. Sunt nulla, quasi laborum impedit, accusantium dolor amet maxime inventore illum ullam dolores. Quas debitis fuga at nihil adipisci dolores culpa eius cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam nisi impedit voluptatibus ad facilis labore error. Ratione, tenetur in.</p>
          
            </div>
            {/* <!-- about details ends --> */}

            <div id="test">
                <div id="about-outer-block">
                    <div id="about-block">
                    <FontAwesomeIcon icon={faBullseye} />
                        <div>
                        <h3>OUR MISSION</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusamus, natus aut ipsum expedita cupiditate.</p>
                        </div>
                    </div>
                    <div id="about-block">
                    <FontAwesomeIcon icon={faLightbulb} />
                        <div>
                        <h3>OUR EXPERTISE</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab minus enim a nesciunt mollitia vero!</p>
                        </div>
                    </div>
                    <div id="about-block">
                    <FontAwesomeIcon icon={faUsersRectangle} />
                        <div>
                        <h3>CUSTOMER SERVICES</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, aut atque? Incidunt voluptate unde aut!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div id="about-article">
                <div id="left-about">
                    <img src={aboutimg} alt="" />
                </div>
                <div id="right-about" >
                   <h4 data-aos="fade-up" data-aos-once="true">SYNCHRONIZE. COLLABORATE. EXCEL.</h4>
                   <h1 data-aos="fade-up" data-aos-once="true">Transforming Tasks,<br/>Revolutionizing Results.
                   </h1>
                   <p data-aos="fade-up" data-aos-once="true">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium beatae perferendis, voluptatibus, at veniam excepturi quas distinctio tenetur nam non eius facilis impedit, maiores inventore aliquid doloremque sed itaque sunt quam quae dolorum? Consequatur quibusdam.</p>
                   <p data-aos="fade-up" data-aos-once="true">Lorem ipsum dolor sit amet </p>
                   
                   
                   <div data-aos="fade-up" data-aos-once="true">
                   <div>
                   <FontAwesomeIcon icon={faArrowRight} />
                    <p>Lorem ipsum dolor sit amet  esse exercitationem quos!</p>
                   </div>
                   <div>
                   <FontAwesomeIcon icon={faArrowRight} />
                    <p> adipisicing elit. Sed, perspiciatis  Quibusdam esse exercitationem quos!</p>
                   </div>
                   <div>
                   <FontAwesomeIcon icon={faArrowRight} />
                    <p>Lorem ipsum dolor   aspernatur! Quibusdam esse exercitationem quos!</p>
                   </div>
                   <div>
                   <FontAwesomeIcon icon={faArrowRight} />
                    <p>Lorem  aspernatur! Quibusdam esse exercitationem quos!</p>
                   </div>
                   <div>
                   <FontAwesomeIcon icon={faArrowRight} />
                    <p>Lorem ipsum , perspiciatis aspernatur! Quibusdam esse exercitationem quos!</p>
                   </div>
                </div>
                </div>
            </div>
            <div id="number" >
                <div id="number-block" data-aos="zoom-in" data-aos-once="true">
                    <span id="num" ><Number n={50}/></span>
                    <span id="symbol">+</span>
                    <h3>PROJECT COMPLETED</h3>
                </div>
                <div id="number-block" data-aos="zoom-in" data-aos-once="true"> 
                <span id="num" ><Number n={25}/></span>
                    <span id="symbol">+</span>
                    <h3>EXPERIENCED DEVELOPER</h3>
                </div>
                <div id="number-block" data-aos="zoom-in" data-aos-once="true">
                <span id="num" ><Number n={80}/></span>
                     <span id="symbol">+</span>
                     <h3>SATISFIED CLIENTS</h3>
                </div>
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
