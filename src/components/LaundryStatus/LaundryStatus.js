import "./LaundryStatus.scss";

export default function LaundryStatus (){
    return(
        <section className="Status">
            <div className="washers">
                <h1 className="washers__heading">WASHERS</h1>
            <div className="washer">
                <div className="washer__image-container">
                    <img className="washer__image" />
                </div>
                <div className="washer__info">
                    <p className="washer__id"></p>
                    <p className="washer__status"></p>
                </div>
                <div className="washer__book">
                    <button className="washer__book-button"></button>
                </div>
            </div>
            </div>
            <div className="dryers">
            <h1 className="dryers__heading">DRYERS</h1>
            <div className="dryer">
                <div className="dryer__image-container">
                    <img className="dryer__image" />
                </div>
                <div className="dryer__info">
                    <p className="dryer__id"></p>
                    <p className="dryer__status"></p>
                </div>
                <div className="dryer__book">
                    <button className="dryer__book-button"></button>
                </div>
            </div>
            </div>
        </section>
    );
}