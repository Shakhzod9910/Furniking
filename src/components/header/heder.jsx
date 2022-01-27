import Logo from "../../Assets/Images/Logo.png"
import Search from "../../Assets/Images/Search.png"
import Shopping from "../../Assets/Images/Shop.png"
import Ring from "../../Assets/Images/Ring.png"
import Profile from "../../Assets/Images/Profile.png"
import Home from "../Home/Home"
function Header(){

    return(
        <header className="nav">
           <div className="navbar container">
               <h1>Welcome to our online shop</h1>
               <div className="box">
                   <select name="" id="">
                       <option value="">English (USD)</option>
                       <option value="">Uzbekistan (UZS)</option>
                       <option value="">Europe(EURO)</option>
                   </select>
                   <div className="box2">
                   <button className="log_btn login">
                       Login
                   </button>
                   <span>or</span>
                   <button className="log_btn signup">
                       Sign up
                   </button>
               </div>
               </div>
              
           </div>
           <div className="search_section container">
                   <div className="logo">
                       <img src={Logo} />
                       <h2>Furniking</h2>
                   </div>
                   <form>
                       <input type="text" placeholder="Search here"/>
                       <select>
                           <option value="1">Categories</option>
                           <option value="1">All</option>
                           <option value="1">Luxuary</option>
                       </select>
                       <button>
                           <img src={Search} />
                       </button>
                   </form>
                   <div className="shops">
                       <img src={Shopping} />
                       <img src={Ring} />
                       <img src={Profile} />
                   </div>
           </div>
           <Home/>
           
        </header>
    )
}

export default Header