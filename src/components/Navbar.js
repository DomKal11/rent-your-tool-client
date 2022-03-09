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
                  variant="secondary"
                >
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
              <button className="btn btn-secondary" onClick={logOutUser}>
                Logout
              </button>
              <Link to="/edit-profile">
                <button disabled className="btn btn-secondary">
                  <i>{user && user.name}</i>
                </button>
              </Link>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
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
              <Link to="/signup">
                <button className="btn btn-secondary">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-secondary">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
