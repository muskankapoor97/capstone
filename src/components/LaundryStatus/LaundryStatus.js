import "./LaundryStatus.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import laundryIcon from "../../assets/images/laundryIcon.svg";
import { Link } from "react-router-dom";


export default function LaundryStatus (){
    const [laundryList, setLaundryList] = useState([]);
  
  useEffect(() => {
    const fetchLaundry = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5050/laundry`);
        setLaundryList(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchLaundry();
  }, []);


    return(
        <>
        <section className="status">
            
            <div className="washers">

                    <h1 className="washers__heading">WASHERS</h1>
                    <div className="washer__container">
                    {laundryList?.slice(6,12).map((item) => (
                      
                        <>
                    <div className="washer">
                    
                        <div className="washer__image-container">
                            <img className={item.status=="Running"? "washer__image washer__image--red":"washer__image washer__image--green"} src={laundryIcon}/>
                        </div>
                        <div className="washer__info">
                            <p className="washer__id">{item.id}</p>
                            <p className="washer__status">{item.status}</p>
                        </div>
                        <div className="washer__book">
                        {item.status==="Running"?
                                <Link to={item.id}>
                                <button className="washer__book-button washer__book-buttonDisabled" disabled>BOOK</button></Link>:
                                <Link to={item.id}>
                                <button className="washer__book-button washer__book-buttonEnabled">BOOK</button></Link>
                                }
                        </div>
                        
                    </div>
                    </>
                        ))}
                    </div>
                </div><div className="dryers">
                        <h1 className="dryers__heading">DRYERS</h1>
                        <div className="dryer__container">{laundryList?.slice(0,6).map((item) => (
                        <>
                        <div className="dryer">
                        
                            <div className="dryer__image-container">
                                <img className={item.status==="Running"?"washer__image washer__image--red":"washer__image washer__image--green"}  src={laundryIcon}/>
                            </div>
                            <div className="dryer__info">
                                <p className="dryer__id">{item.id}</p>
                                <p className="dryer__status">{item.status}</p>
                            </div>
                            <div className="dryer__book">
                            {item.status==="Running"?
                                <Link to ={item.id}>
                                <button className="dryer__book-button dryer__book-buttonDisabled" disabled>BOOK</button></Link>:
                                <Link to={item.id}>
                                <button className="dryer__book-button dryer__book-buttonEnabled">BOOK</button></Link>
                                }
                            </div>
                            
                        </div>
                        </>
                        ))}
                        </div>
                    </div>
            
        </section>
      </>
    );
}