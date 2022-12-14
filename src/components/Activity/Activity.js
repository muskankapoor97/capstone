import "./Activity.scss";
import {BsArrowRight} from "react-icons/bs";
const Activity=()=>{
    return (
       
       <section className="activity">
         <div className="overlay">
        <div className="activity__heading">
            <h1 className="activity__heading--white">UPDATE</h1>
            <span className="activity__heading--yellow">S</span>
            
            </div>
            <div className="activity__content">
                <p className="activity__para">No water suppy in the building today.No water suppy in the building today.No water suppy in the building today.</p>
                
                <BsArrowRight size={65} color="yellow" className="activity__heading-iconRight" />
            </div>
            </div>
       </section>
       
    );
}
export default Activity;