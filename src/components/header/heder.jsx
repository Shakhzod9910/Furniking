
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
        </header>
    )
}

export default Header