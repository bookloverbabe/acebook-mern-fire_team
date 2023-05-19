import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './nav.css'
import NavButton from '../navbutton/NavButton';

// import logged in context as defined in App.js
import { loggedInContext } from '../app/App';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useContext(loggedInContext);
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="nav-container">
      {loggedIn ? (
        <div className="nav-box">
          <Link to="/posts" className="logo"><h1><i>Acebook</i></h1></Link>
          <NavButton to="/posts" value="Posts" />
          <NavButton to="/account" value="Your Account" />
          <button className="logout-button" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="nav-box">
          <Link to="/" className="logo"><h1><i>Acebook</i></h1></Link>
          <div>
            <NavButton className="signup-button" to="/signup" value="Sign-up" />
            <NavButton className="login-button" to="/login" value="Login" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
