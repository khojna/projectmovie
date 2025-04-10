import { Link } from "react-router-dom";
import '../css/navbar.css';

function Navbar() {

    return(

        <>
        <div className="navbar">
            <div className="nav-brand">
                <Link to="/">MovieVibe</Link>
            </div>
            <div className="navbar-link">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorite</Link>
            </div>
            
        </div>
        </>
    )
}

export default Navbar