import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context";
import Dropdown from "react-bootstrap/Dropdown";

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
            <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary">
                  Tools
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                
                  <Dropdown.Item>
                  <Link to="/tools">View tools on map</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                  <Link to="/my-tools">My tools</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                  <Link to="/add-tool">Add a tool</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button onClick={logOutUser}>Logout</button>
              <span>{user && user.name}</span>
            </>
          )}

          {!isLoggedIn && (
            <>
            <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary">
                  Tools
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                
                  <Dropdown.Item>
                  <Link to="/tools">View tools on map</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                  <Link to="/my-tools">My tools</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                  <Link to="/add-tool">Add a tool</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to="/tools">
                {" "}
                <p className="nav-item">Tools</p>{" "}
              </Link>
              <Link to="/signup">
                {" "}
                <p className="nav-item">Sign Up</p>{" "}
              </Link>
              <Link to="/login">
                {" "}
                <p className="nav-item">Login</p>{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
