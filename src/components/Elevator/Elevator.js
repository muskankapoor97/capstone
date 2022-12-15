import "./Elevator.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";


export default function Elevator(){
  const [tenant, setTenant] = useState([]);
  useEffect(() => {
    const getTenant = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5050/tenants/2922c286-16cd-4d43-ab98-c79f698aeab0`);
        setTenant(data["tenantsData"]);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getTenant();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  const myform=event.currentTarget
   
   const isFirstNameValid = myform.firstname.value;
   const isLastNameValid = myform.lastname.value;
   const isEmailValid = myform.email.value;
   const isUnitNumberValid = myform.unitnumber.value;
   const isDateValid = myform.date.value;
   
   
   
   if (!isFirstNameValid) {
    myform.firstname.style.border = "1px solid yellow";
    document.getElementById("FirstName-Valid").style.display = "block";
   }else{myform.firstname.style.border = "1px solid #bdc5d5";
   document.getElementById("FirstName-Valid").style.display = "none";}
   
   if (!isLastNameValid) {
     myform.lastname.style.border = "1px solid yellow";
     document.getElementById("LastName-Valid").style.display = "block";
   } else {
     myform.lastname.style.border = "1px solid #bdc5d5";
      document.getElementById("LastName-Valid").style.display = "none";
   }
   
   if (!isEmailValid) {
     myform.email.style.border = "1px solid yellow";
     document.getElementById("Email-Valid").style.display = "block";
   } else {
     myform.email.style.border = "1px solid #bdc5d5";
     document.getElementById("Email-Valid").style.display = "none";
   }
   
   if (!isUnitNumberValid) {
     myform.unitnumber.style.border = "1px solid yellow";
     document.getElementById("UnitNumber-Valid").style.display = "block";
   } else {
     myform.unitnumber.style.border = "1px solid #bdc5d5";
     document.getElementById("UnitNumber-Valid").style.display = "none";
   }
   
   if (!isDateValid) {
     myform.date.style.border = "1px solid yellow";
     document.getElementById("Date-Valid").style.display = "block";
   } else {
     myform.date.style.border = "1px solid #bdc5d5";
     document.getElementById("Date-Valid").style.display = "none";
   }
   if(isFirstNameValid && isLastNameValid &&isDateValid&&isUnitNumberValid&&isEmailValid){
    alert("Booking Confirmed");
   }
  }
  console.log(tenant);
    return(
      <section className="elevator">
      <div className="elevator__title">
        <p className="elevator__title-text">Book Elevator</p>
      </div>
        <form className="form" noValidate onSubmit={handleSubmit}>
        {tenant?.map((person) => (
          <>
      <div className="form__content">
        <div className="form__details">
          <div className="form__detail-nameContainer">
            <div className="form__detail">
              <label className="form__label">First Name</label>
              <input  className="form__input" defaultValue={person.first_name} name="firstname"/>
              <div className="FirstName-Valid" id="FirstName-Valid">
              <span className="FirstName-Valid__text">
                This field is required
              </span>
            </div>
            </div>
            <div className="form__detail">
              <label className="form__label">Last Name</label>
              <input className="form__input" defaultValue={person.last_name} name="lastname"></input>
              <div className="LastName-Valid" id="LastName-Valid">
              <span className="LastName-Valid__text">
                This field is required
              </span>
            </div>
           </div>
           </div>
           <div className="form__detail">
              <label className="form__label">Email</label>
              <input className="form__input" defaultValue={person.contact_email} name="email"></input>
              <div className="Email-Valid" id="Email-Valid">
              <span className="Email-Valid__text">
                This field is required
              </span>
            </div>
           </div>

            <div className="form__detail">
              <label className="form__label">Unit number</label>
              <input className="form__input" defaultValue={person.unit_number} name="unitnumber"></input>
              <div className="UnitNumber-Valid" id="UnitNumber-Valid">
              <span className="UnitNumber-Valid__text">
                This field is required
              </span>
            </div>
            </div>
      
            <div className="form__detail">
              <label className="form__label">Date</label>
              <input className="form__input" type="date" name="date"></input>
              <div className="Date-Valid" id="Date-Valid">
              <span className="Date-Valid__text">
                This field is required
              </span>
            </div>
            </div>
            <div className="form__detail-timeContainer">
            <div className="form__detail">
              <label className="form__label">Hours</label>
              <select name="hours" className="form__input form__input-time">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              </select>
          </div>
          <div className="form__detail">
              <label className="form__label">Min</label>
              <select name="min" className="form__input form__input-time" >
              <option value="05">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              </select>
        </div>
        <div className="form__detail">
              <label className="form__label">AM/PM</label>
              <select name="am" className="form__input form__input-time" >
              <option value="am">AM</option>
              <option value="pm">PM</option>
              </select>
        </div>
        </div>
      </div>

      <div className="form__btns">
        <button className="form__btn">Book</button>
      </div>
      </div>
      </>
      ))}
    </form>
    </section>
    );
};