import { useRef } from "react";
import Menu from "../../Assets/Images/menu.png";
import Free from "../../Assets/Images/free.png";
import Gift from "../../Assets/Images/Gift.png";
import Card from "../../Assets/Images/Card.png";
import Airphone from "../../Assets/Images/Airphone.png";
import Vector from "../../Assets/Images/Vector.png";
import Hart from "../../Assets/Images/Hart.png"
import Pocet from "../../Assets/Images/Pocet.png"
import Again from "../../Assets/Images/Again.png"
import Eye from "../../Assets/Images/Eye.png"
import Star from "../../Assets/Images/starg.png"
import one from "../../Assets/Images/1.png";
function Home() {
  const carousel = useRef(null);

  // (carousel.current).owlCarousel({
  //     margin: 20,
  //     loop: true,
  //     autoplayTimeOut: 2000,
  //     autoplayHoverPause: true,
  //     responsive: {
  //         0:{
  //             items:1,
  //             nav:false
  //         },
  //         600:{
  //             items:2,
  //             nav:false
  //         },
  //         1000:{
  //             items:3,
  //             nav:false
  //         }
  //     }
  // });

  return (
    <>
      <section className="home">
        <div className="navbar2">
          <div className="nav2 container">
            <div className="menu">
              <img src={Menu} />
              <h1>ALL COLLECTIONS</h1>
            </div>
            <ul>
              <li>HOME</li>
              <li>SHOP</li>
              <li>BLOG</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="collections container">
            <ul>
              <li>All</li>
              <li>New Arrivals</li>
              <li>Hot Sale</li>
              <li>Furniture</li>
              <li>Amrature</li>
              <li>Tabble</li>
              <li>Chair</li>
              <li>Sofa</li>
              <li>Mirrors</li>
              <li>Stools</li>
              <li>Benches</li>
            </ul>
            <div className="main_hero">
              <div className="carousel owl-carousel" ref={carousel}>
                <div className="card">a</div>
                <div className="card">b</div>
                <div className="card">c</div>
                <div className="card">d</div>
              </div>
            </div>
          </div>
          <div className="shop container">
            <div className="opportunites ">
              <ul>
                <li>
                  <img src={Free} alt="icons" />
                  <div className="title">
                    <h2>Free Shipping</h2>
                    <p>Orders over $100</p>
                  </div>
                </li>
                <li>
                  <img src={Gift} alt="icons" />
                  <div className="title">
                    <h2>Smart Gift Card</h2>
                    <p>Buy $1000 to get card</p>
                  </div>
                </li>
                <li>
                  <img src={Card} alt="icons" />
                  <div className="title">
                    <h2>Quick Payment</h2>
                    <p>100% secure payment</p>
                  </div>
                </li>
                <li>
                  <img src={Airphone} alt="icons" />
                  <div className="title">
                    <h2>24/7 Support</h2>
                    <p>Quick support</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="discount">
              <div className="left_side_wrapper">
                <div className="discount_title">
                  <h1>Modern Furniture Collections</h1>
                  <span>
                    Starting from <span>$500</span>
                  </span>
                  <p>
                    Read more <img src={Vector} alt="vector" />
                  </p>
                </div>
              </div>
              <div className="right_side_wrapper">
                <div className="up_item">
                  <div className="discount_title">
                    <h1>Geometric Bookcase</h1>
                    <span>Up to 20% discount</span>
                    <p>
                      Read more <img src={Vector} alt="vector" />
                    </p>
                  </div>
                </div>
                <div className="down_item">
                  <div className="discount_title">
                    <h1>Minimal Sofa collections </h1>
                    <span>Sale upto 40% discount</span>
                    <p>
                      Read more <img src={Vector} alt="vector" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sales container">
            <div className="title">
              <h1>TRENDING</h1>
              <ul>
                <li className="on">Top Products</li>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
              </ul>
            </div>
            <div className="sale_production">
              <ul className="list">
                <li className="list_item">
                  <div className="product_img">
                    <img src={one} alt="product" />
                    <div className="position">
                      <span>New</span>
                    </div>
                    <div className="characters">
                      <ul>
                        <li><img src={Hart} alt="icon" /></li>
                        <li><img src={Pocet} alt="icon" /></li>
                        <li><img src={Again} alt="icon" /></li>
                        <li><img src={Eye} alt="icon" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="about_product">
                    <span>CHAIR</span>
                    <h1>Minimal LCD chair</h1>
                    <div className="product_cost_level">
                      <div className="product_cost">
                        <span>$180</span>
                        <p>$250</p>
                      </div>
                      <div className="product_level">
                        <ul>
                          <li><img src={Star} alt="satr" /></li>
                          <li><img src={Star} alt="satr" /></li>
                          <li><img src={Star} alt="satr" /></li>
                          <li><img src={Star} alt="satr" /></li>
                          <li><img src={Star} alt="satr" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
