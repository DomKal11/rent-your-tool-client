import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const API_URL = "https://rentyourtools.herokuapp.com";

function ToolDetail(props) {
  const [fetching, setFetching] = useState(true);
  const { user } = useContext(AuthContext);
  const [tool, setTool] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [city, setCity] = useState("");
  const [gps, setGps] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const location = [lat, lng];

  const getTool = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/tool/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTool(response.data);
        setName(response.data.name);
        setPrice(response.data.price);
        setDetails(response.data.details);
        setCity(response.data.city);
        setLat(response.data.location[0]);
        setLng(response.data.location[1]);
        setFetching(false);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      price,
      details,
      city,
      location,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .patch(`${API_URL}/api/tool/${id}/edit`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setName("");
        setDetails("");
        setPrice(0);
        setCity("");
        setGps("");
        setLat("");
        setLng("");
        let url=`/tool/${id}`;
        navigate(url);
      })
      .catch((error) => console.log(error));
  };

  const getGps = (e) => {
    axios
      .get(
        `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${city}&apiKey=M2ZkNDY4NWUyMmM2NGUyZTg5OWNlNmY1ZDI1ZmYyYWI6OTZmZGMzYTMtYzkyMS00N2Y2LWFjMzYtMDgyMWQxNzBkNjNh`
      )
      .then((response) => {
        setGps(response.data);
        setLat(response.data.locations[0].referencePosition.latitude);
        setLng(response.data.locations[0].referencePosition.longitude);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTool();
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
          {tool && (
            <>
              <div className="img-bg">
                <img
                  className="tool-picture"
                  src={tool.imageUrl}
                  alt={tool.name}
                ></img>
                <h2 className="edit-title">Edit {tool.name}:</h2>
                <Link to="/tools">
                  <button className="button-design back-to-map">
                    Back to map
                  </button>
                </Link>
              </div>
              <div className="d-flex justify-content-center">
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
                        <td>Price: </td>
                        <td>
                          <input
                            className="form-control"
                            type="number"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                          ></input>
                          <span className="price-label">€/day</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Details:</td>
                        <td>
                          <textarea
                            className="form-control"
                            type="text"
                            name="details"
                            onChange={(e) => setDetails(e.target.value)}
                            value={details}
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>City:</td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <span
                            className="button-design"
                            onClick={(e) => getGps()}
                          >
                            Get GPS
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Lat:</td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            name="latitude"
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Lng:</td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            name="longitude"
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
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

export default ToolDetail;
