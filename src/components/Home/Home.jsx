import Menu from '../../Assets/Images/menu.png'
function Home(){

    return(
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
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home