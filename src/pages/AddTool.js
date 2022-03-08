import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function AddTool(props) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [details, setDetails] = useState("");
  const [city, setCity] = useState("");
  const [gps, setGps] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const location = [lat, lng];

  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(`${API_URL}/api/upload`, uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.data.fileUrl);
        console.log(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      price,
      imageUrl,
      details,
      city,
      location,
      owner: user._id,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/tools`, requestBody, {
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
        setLng("")
        setImageUrl("");
        navigate("/tools/");
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

  return (
    <div className="AddProject">
      <h3>Add new tool</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Details:</label>
        <textarea
          type="text"
          name="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <p onClick={(e) => getGps()}>Get GPS</p>
        </div>

        <label>Lat:</label>
        <input
          type="text"
          name="latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />

        <label>Lng:</label>
        <input
          type="text"
          name="longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />

        <input type="file" onChange={(e) => handleFileUpload(e)} />

        {imageUrl !== "" && <button type="submit">Submit</button>}
        {imageUrl === "" && (
          <button disabled type="submit" title="Please fill in the form!">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default AddTool;
