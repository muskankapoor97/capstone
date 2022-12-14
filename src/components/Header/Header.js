import "./Header.scss";
import {RxCross2} from "react-icons/rx";
import {HiBars3BottomRight} from "react-icons/hi2";
import {AiOutlineUser} from "react-icons/ai";
import { useState } from "react";

const Header=()=>{
    const [colorChange, setColorChange]=useState(false);
    const [sidebar, setSidebar]=useState(false);
    

    const changeBgColor=()=>{
        if(window.scrollY>=600){
            setColorChange(true);
        }
        else{
            setColorChange(false);
        }
    };

    const showSidebar=() =>setSidebar(!sidebar); 
    window.addEventListener("scroll", changeBgColor);
    
    return (
        <>
        <header className="header">
            <nav className={colorChange? "navbar__colorChange":"navbar"}>
                <div className="header__logo">O-Rentals</div>
                <div className="header__icons">
                <AiOutlineUser size={30}  className={colorChange? "header__icon--colorChange":"header__icon"} />
                <HiBars3BottomRight size={35}  className={colorChange? "header__icon--colorChange":"header__icon"} onClick={showSidebar}/>
                </div>
            </nav>
        </header>
        <div className={sidebar? "sidenav active":"sidenav"}>
            <div className="sidenav__iconContainer">
             <RxCross2 size={35} color="black" className="sidenav__icon" onClick={showSidebar}/>
            </div>
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
export default Header;