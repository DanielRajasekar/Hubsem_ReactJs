import React from 'react'
import logo from '../assets/logo-white.png'
import {  NavLink } from "react-router-dom"
export default function footer() {
  return (
    <div id="footer">
                <div>
                <div id="f1">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor  numquam  Lorem ipsum  sit amet. Lorem ipsum dolor sit amet. alias mollitia.</p>
                </div>
                <div id="f2">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="#product">Products</NavLink></li>
                        <li><NavLink to="/internship">Internship</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div id="f3">
                    <h5>Services</h5>
                    <ul>
                        <li><NavLink to="/services">Web Applications</NavLink></li>
                        <li><NavLink to="/services">Mobile Applications</NavLink></li>
                        <li><NavLink to="/WebDesign">Web Design & Development</NavLink></li>
                        <li><NavLink to="/GraphicDesign">Graphic Design</NavLink></li>
                        <li><NavLink to="/services">Digital Marketing</NavLink></li>
                        <li><NavLink to="/services">Maintenance & Support</NavLink></li>
                    </ul>
                </div>
                <div id="f4">
                    <h5>Newsletter</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, blanditiis</p>
                    <input type="text" placeholder="Enter your mail id"/>
                    <button>SUBSCRIBE</button>
                </div>
                </div>
                <div id="copyrights">
                    <p>© Copyright 2023, Hubsem Software Solutions Pvt. Ltd. | All rights reserved.</p>
                    
                </div>
        </div>
  )
}
