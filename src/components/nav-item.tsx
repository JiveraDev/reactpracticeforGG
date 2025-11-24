import { useState,Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import syringe from "../assets/syringe-svgrepo-com.svg"
import category from "../assets/categoriesmajor-svgrepo-com.svg" 
import team from "../assets/team-svgrepo-com.svg"
import contact from "../assets/contact-classic-telephone-svgrepo-com.svg"
import "./nav-item.css";


const NavItem = () => {
   
const [selectedindex, setSelectedIndex] = useState(0);

let navlist: string[] = ["Services", "About", "Team", "Contact"];
let icons = [syringe, category, team, contact];

 return (
       <Fragment>
     <ul className="navbar-nav">
        {navlist.map((item, index) => (
           <li   className={`nav-item ${selectedindex === index ? "nav-item active" : ""}`}  onClick={() => {
            console.log("you clicked " + item);
              setSelectedIndex(index); // mark this item as active
            }} key={index}>
            <a className="nav-link px-3" href={`#${item.toLowerCase()}`}><img alt="icons" src={icons[index]} ></img> {item}</a>
           </li>
        ))}
        
        </ul> 

        
        </Fragment>
        
        

);
}

export default NavItem;