import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const API_URL = "https://rentyourtools.netlify.app";

function EditProfile() {
  const [fetching, setFetching] = useState(true);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilepic, setProfilepic] = useState("");

  const getUser = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setEmail(response.data.email);
        setName(response.data.name);
        setPhone(response.data.phone);
        setProfilepic(
          `https://ui-avatars.com/api/?name=${response.data.name}&rounded=true&background=random&length=3&size=50`
        );
        setFetching(false);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      email,
      phone,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .patch(`${API_URL}/api/user/${user._id}/edit`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setName(response.name);
        setEmail(response.email);
        setPhone(response.phone);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      getUser();
    }, 300);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [user]);

  return (
    <>
      {fetching && (
        <div className="d-flex justify-content-center flex-column loading-img">
          <img src="/loading.gif" alt="loading..."></img>
        </div>
      )}
      <div className="container fix-height">
        <div className="tool-box card">
          {user && (
            <>
              <img
                src={profilepic}
                alt={name}
                className="profilepic-comment mt mx-auto"
              ></img>
              <div className="d-flex flex-column align-self-center fix-height">
                <h3>Edit profile</h3>
                <form onSubmit={handleSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>
                          <textarea
                            className="form-control"
                            type="emaik"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button type="submit" className="button-design">
                            Save changes
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default EditProfile;
