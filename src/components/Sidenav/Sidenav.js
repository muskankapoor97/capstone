import "./Sidenav.scss";
import {RxCross2} from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav=()=>{
    
    const [isShown, setIsShown]=useState(true);

    function  clickHandler(){
        setIsShown(false);
    };
    
    
    return(
        <>
        
        <div className="sidenav">
             <RxCross2 size={35} color="black" className="sidenav__icon" />
            <ul className="sidenav__list">
                <li className="sidenav__list-item">About</li>
                <li className="sidenav__list-item">Activities</li>
                <li className="sidenav__list-item">Services</li>
                <li className="sidenav__list-item">Contact Us</li>
                </ul>

        </div>
    
    </>
    );
    
}
export default Sidenav;