import "./Hero.scss";
import slideOne from "../../assets/images/492.jpg";
import slideTwo from "../../assets/images/slide-2.jpg";
import slideThree from "../../assets/images/493.jpg";
import {AiOutlineLine} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";
import { useState } from "react";

const Hero=()=>{
    const [currentIndex, setCurrentIndex]=useState(0);
    const imageSlides=[
            {
            img: slideOne,
            },
          {
            img: slideTwo,
          },
          {
            img: slideThree,
          }
    ];

    const previousImage=()=>{
        const isFirstImage=currentIndex===0;
        const newImageIndex=isFirstImage?imageSlides.length-1:currentIndex-1;
        setCurrentIndex(newImageIndex);
    };
    const nextImage=()=>{
        const isLastImage=currentIndex===imageSlides.length-1;
        const newImageIndex=isLastImage?0:currentIndex+1;
        setCurrentIndex(newImageIndex);
    };
    return (
        <section className="hero" id="about">
            <div className="hero__content">
                <h2 className="hero__heading">
                Multiple units, one effective manager</h2>
                <p className="hero__paragraph">Properties can be complex and confusing. Our experienced property managers simplify all-things, from managing the finances to ensuring easy access to the building services. More than 3,300 unit owners on Vancouver Island trust our services – you can too.</p>
                <button className="hero__button">LEARN MORE</button>
            </div>
            <div className="hero__images">
            <div className="hero__imageContainer"><img src={imageSlides[currentIndex].img} className="hero__image"/></div>
            <div className="hero__imageContainer"><img src={imageSlides[1].img} className="hero__image"/></div>
            <div className="hero__imageContainer"><img src={imageSlides[2].img} className="hero__image"/></div>
            </div>
            <AiOutlineLine size={35} color="white" className="hero__image-iconLeft" onClick={previousImage}/>
            <BsArrowRight size={35} color="yellow" className="hero__image-iconRight" onClick={nextImage} />
        </section>
    );
}
export default Hero;