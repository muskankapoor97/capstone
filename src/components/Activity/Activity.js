import "./Activity.scss";
import {BsArrowRight} from "react-icons/bs";
import { Link } from "react-router-dom";
const Activity=()=>{
    return (
       
       <section className="activity" id="activities">
         <div className="overlay">
        <div className="activity__heading">
            <h1 className="activity__heading--white">UPDATE</h1>
            <span className="activity__heading--yellow">S</span>
            
            </div>
            <div className="activity__content">
                <p className="activity__para">Plumbing will be worked on: Sun, December18, 2022, 8:30am to 12:00pm approx. During this time there will be no water. Sorry for the inconvenience.</p>
                <Link to ="/updates">
                <BsArrowRight size={55} color="yellow" className="activity__heading-iconRight" />
                </Link>
            </div>
            </div>
       </section>
       
    );
}
export default Activity;