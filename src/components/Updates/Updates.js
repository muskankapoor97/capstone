import "./Updates.scss";


export default function (){
    return(
        <section className="updates">
            <div className="updates__heading">
            <h1 className="updates__heading--white">NOTICE</h1>
            <span className="updates__heading--yellow">S</span>
            
            </div>
           
            <div className="notices">
            <div className="notice">
                <p>o</p>
                <h2 className="notice__heading">Christmas Trees</h2>
                    <p className="notice__content">Please do not have a real Christmas tree, it must be artificial. This is a fire protection for both you and me. Best wishes for your holiday season.</p>
                    <p className="notice__date">December14, 2022</p>
                </div>
                <div className="notice">
                    <p>o</p>
                    <h2 className="notice__heading">Storage Locker Rooms</h2>
                    <p className="notice__content">If you have items in the Storage Locker Room Hallway, unlocked in any storage room, please move them by December30,2022.
                    Thankyou for your co-operation.</p>
                    <p className="notice__date">December12, 2022</p>
                </div>
                <div className="notice">
                <p>o</p>
                <h2 className="notice__heading">Monthly Fire Inspection</h2>
                    <p className="notice__content">Please be advised that the buildings fire alarm testing will be held on the last Friday of every month from 11:00 am to 2:00 pm. We apologize for the inconvenience and appreciate your patience.</p>
                    <p className="notice__date">November10, 2022</p>
                </div>
               
            </div>

        </section>
    );
}