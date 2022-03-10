import { useState, useEffect } from "react";
import axios from "axios";
import {
  Map,
  KeyboardControl,
  ZoomControl,
  MouseControl,
  CompassControl,
  SyncControl,
  MarkerLayer,
  Marker,
} from "react-mapycz";
import "../index.css";

const API_URL = "https://rentyourtools.netlify.app";

function Tools() {
  const [fetching, setFetching] = useState(true);
  const [lat, setLat] = useState(50.0755);
  const [lng, setLng] = useState(14.4378);
  const [status, setStatus] = useState(null);
  const [location, setLocation] = useState(true);

  const [tools, setTools] = useState([]);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
          setLocation(false);
        }
      );
    }
  };

  const getAllTools = () => {
    axios
      .get(`${API_URL}/api/tools`)
      .then((response) => {
        setTools(response.data);
        setFetching(false);
      })
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getLocation();
    getAllTools();
  }, []);

  return (
    <>
      {fetching && (
        <div className="d-flex justify-content-center flex-column loading-img">
          <img src="/loading.gif" alt="loading..."></img>
        </div>
      )}
      <div className="fix-height">
        <div className="map-title"></div>
        <div className="my-location">
          <p>{status}</p>
          {location && <p>Your location -</p>}
          {location && <p>&nbsp; Lat: {lat} </p>}
          {location && <p>&nbsp; Lng: {lng} </p>}
        </div>

        <Map height="800px" center={{ lat: lat, lng: lng }} zoom="11">
          <div className="legend">
            <img src="marker.png" alt="marker"></img>
            <p>Tools available: {tools.length}</p>
          </div>

          <KeyboardControl />
          <ZoomControl />
          <MouseControl zoom={true} pan={true} wheel={true} />
          <CompassControl right={10} top={50} />
          <SyncControl />
          <MarkerLayer>
            {tools.map((tool, index) => (
              <Marker
                key={index}
                coords={{ lat: tool.location[0], lng: tool.location[1] }}
                card={{
                  header: `<a href="tool/${tool._id}">${tool.name}</a>`,
                  body: `<p class="card-status ${tool.status}">${tool.status}</p><img class="tool-img-map" style="width:230px" src='${tool.imageUrl}'/><p class="card-details">${tool.details}</p>`,
                  footer: `<a href="tool/${tool._id}"><p>Book for ${tool.price}€/day</p></a>`,
                  options: {
                    width: 300,
                    height: 400,
                  },
                }}
              />
            ))}
          </MarkerLayer>
        </Map>
      </div>
    </>
  );
}

export default Tools;
