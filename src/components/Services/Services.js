import "./Services.scss";
import { motion } from "framer-motion";
import {BsArrowRight} from "react-icons/bs";
import { useState, useEffect } from "react";
import { AnimateOnChange, HideUntilLoaded } from "react-animation";
import parking from "../../assets/images/parking.svg";
import elevator from "../../assets/images/elevator.svg";
import washer from "../../assets/images/washer.svg";
import rent  from "../../assets/images/rent.svg";




const Services=()=>{
    const words = [
        {
            name:'Parking',
            img:parking,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name:'Elevator',
            img:elevator,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name:'Laundry',
            img:washer,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name:'Rent Payment',
            img:rent,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ]

      const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 3000);
    return (() => {
      clearInterval(interval)
    })
  })

    return (
       <section className="services">
        <div className="services__left">
        <h1 className="services__left-heading"><AnimateOnChange>{words[current].name}</AnimateOnChange></h1>
        <p className="services__left-content"><AnimateOnChange>{words[current].description}</AnimateOnChange></p>
        <AnimateOnChange><img src={words[current].img} className="services__left-image" /></AnimateOnChange>
        </div>
        <div className="services__right">
            <div className="services__right-heading"><p>SERVICES</p></div>
            <div className="right__cards">
            <div className="right__card">Parking </div>
            <div className="right__card">Elevator</div>
            <div className="right__card">Laundry </div>
            <div className="right__card">Rent Payment </div>
            </div>
        </div>
        
       </section>
    );
}
export default Services;