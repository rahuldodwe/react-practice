import React from 'react'
import './navbar.css';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
    
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn" >
        <div className="menu">
        < MdMenu/>
        </div>
        </label>
        <label class="logo" >RD</label>
        <ul>
            <li><a class="active" href="#"/>Home</li>
            <li><a href="#"/>About</li>
            <li><a href="#"/>Services</li>
            <li><a href="#"/>Contact</li>
            <li><a href="#"/>Feedback</li>
        </ul>
    </nav>
  )
}

export default Navbar
