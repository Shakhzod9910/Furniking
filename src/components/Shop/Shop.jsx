import Free from '../../Assets/Images/free.png'
import Gift from '../../Assets/Images/Gift.png'
import Card from '../../Assets/Images/Card.png'
import Airphone from '../../Assets/Images/Airphone.png'
function Shop(){

    return(
        <section className="shop">
            <div className="opportunites">
                <ul>
                    <li>
                        <img src={Free} alt="icons"/>
                        <div className="title">
                            <h2>Free Shipping</h2>
                            <p>Orders over $100</p>
                        </div>
                    </li>
                    <li>
                        <img src={Gift} alt="icons"/>
                        <div className="title">
                            <h2>Smart Gift Card</h2>
                            <p>Buy $1000 to get card</p>
                        </div>
                    </li>
                    <li>
                        <img src={Card} alt="icons"/>
                        <div className="title">
                            <h2>Quick Payment</h2>
                            <p>100% secure payment</p>
                        </div>
                    </li>
                    <li>
                        <img src={Airphone} alt="icons"/>
                        <div className="title">
                            <h2>24/7 Support</h2>
                            <p>Quick support</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Shop