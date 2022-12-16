import "./Contact.scss";


export default function Contact(){
    const handleSubmit = (event) => {
        event.preventDefault();
      const myform=event.currentTarget
       
       const isFirstNameValid = myform.firstname.value;
       const isLastNameValid = myform.lastname.value;
       const isEmailValid = myform.email.value;
       const isMessageValid = myform.message.value;
       
       
       
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
       
       if (!isMessageValid) {
         myform.message.style.border = "1px solid yellow";
         document.getElementById("Message-Valid").style.display = "block";
       } else {
         myform.message.style.border = "1px solid #bdc5d5";
         document.getElementById("Message-Valid").style.display = "none";
       }
       
       if(isFirstNameValid && isLastNameValid &&isMessageValid&&isEmailValid){
        alert("Thankyou for the Message.")
        
      };
       }
    return(
        <section className="contact">
        
        <h1 className="contact__title">Contact Us</h1>
        <div className="contact__Container">
            <div className="contact__info">
                <div className="contact__content">
                <h2 className="contact__content-heading">Buildings Inquires and Maintenance</h2>
                <p className="contact__content-para">Monday to Friday: 9:00am to 5:00pm</p>
                <p className="contact__content-para">Call/text: 250-123-4567</p>
                <p className="contact__content-para">Email:rentals@gmail.com</p>
                </div>
                <div className="contact__content">
                <h2 className="contact__content-heading">Buildings Emergencies</h2>
                <p className="contact__content-para">Monday to Friday: 9:00am to 5:00pm</p>
                <p className="contact__content-para">Weekends: Call Alex:250-456-1234</p>
                <p className="contact__content-para">Call/text: 250-123-4567</p>
                </div>
            </div>
            {/* <div className="contact__form">
                <form className="form" noValidate onSubmit={handleSubmit}>
      
                <div className="form__content">
        <div className="form__details">
          <div className="form__detail-nameContainer">
            <div className="form__detail">
              <label className="form__label">First Name</label>
              <input  className="form__input"  name="firstname"/>
              <div className="FirstName-Valid" id="FirstName-Valid">
              <span className="FirstName-Valid__text">
                This field is required
              </span>
            </div>
            </div>
            <div className="form__detail">
              <label className="form__label">Last Name</label>
              <input className="form__input" name="lastname"></input>
              <div className="LastName-Valid" id="LastName-Valid">
              <span className="LastName-Valid__text">
                This field is required
              </span>
            </div>
           </div>
           </div>
           <div className="form__detail">
              <label className="form__label">Email</label>
              <input className="form__input"  name="email"></input>
              <div className="Email-Valid" id="Email-Valid">
              <span className="Email-Valid__text">
                This field is required
              </span>
            </div>
           </div>

            <div className="form__detail">
              <label className="form__label">Message</label>
              <textarea className="form__input-textarea"  name="message"> </textarea>
              <div className="Message-Valid" id="Message-Valid">
              <span className="Message-Valid__text">
                This field is required
              </span>
            </div>
            </div>
            <div className="form__btns">
        <button className="form__btn">Send</button>
      </div>
      </div>
      
    
            </div>
            </form>
            
           </div> */}
            </div>
    
        </section>
    );
}