import { Link, NavLink } from 'react-router-dom';
import "../styles/navbar.css";
function Navbar() {

return (
    <nav className="nav-bar">
     <div className="container">

        <div className="logo-left">

            <Link to="/" className="my-logo">
                <h4>Nour Eldin</h4>
                <div className="navbar-line"></div>
            </Link>

            <a href="#" className="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
                                
        <ul id="main-menu" className="nav-menu">
            <li className="nav-item has-dropdown">
                <NavLink exact  to="/" className="nav-link"> home </NavLink>
            </li>
            <li className="nav-item has-dropdown">
                <NavLink to="/Contact" className="nav-link"> Contact </NavLink>
            </li>
  
        </ul>


    </div>
    </nav>

    );
}

export default Navbar;