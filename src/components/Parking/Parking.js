import "./Parking.scss";

export default function Parking(){
    return(
      <section className="parking">
      <div className="parking__title">
        <p className="parking__title-text">Book Parking</p>
      </div>
        <form className="form">
      <div className="form__content">
        <div className="form__details">
          <div className="form__detail-nameContainer">
            <div className="form__detail">
              <label className="form__label">First Name</label>
              <input  className="form__input"/>
            </div>
            <div className="form__detail">
              <label className="form__label">Last Name</label>
              <input className="form__input"></input>
           </div>
           </div>
           <div className="form__detail">
              <label className="form__label">Email</label>
              <input className="form__input"></input>
           </div>

            <div className="form__detail">
              <label className="form__label">Unit number</label>
              <input className="form__input" ></input>
            </div>
      
            <div className="form__detail">
              <label className="form__label">Date</label>
              <input className="form__input" type="date"></input>
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
       
    </form>
    </section>
    );
};