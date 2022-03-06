import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context"; 


function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-left">
        <img src="/icon.png" alt="icon" className="icon"></img>
        <p className="navbar-brand">Rent your tools</p>
      </Link>
      <div className="navbar-right">
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>   
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>     
        </>
      )}
 
      {!isLoggedIn && (
        <>
        <Link to="/tools"> <p className="nav-item">Tools</p> </Link>
          <Link to="/signup"> <p className="nav-item">Sign Up</p> </Link>
          <Link to="/login"> <p className="nav-item">Login</p> </Link>
        </>
      )}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
