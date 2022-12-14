import "./Services.scss";
import { Link } from "react-router-dom";




const Services=()=>{
    

    return (
       <section className="services">
        <div className="services__container">
            <div className="services__heading">SERVICES</div>
            <div className="services__cards">
              <Link to="/parking">
            <div className="services__card"> Parking </div></Link>
            <Link to="/elevator">
            <div className="services__card">Elevator</div></Link>
            <Link to="/laundry">
            <div className="services__card">Laundry </div></Link>
            <div className="services__card">Rent</div>
            </div>
        </div>
        
       </section>
    );
}
export default Services;