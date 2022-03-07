import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function ToolDetail(props) {
  const { user } = useContext(AuthContext);
  const [tool, setTool] = useState(null);
  const [owner, setOwner] = useState(false);
  const { id } = useParams();

  const getTool = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/tool/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneTool = response.data;
        setTool(oneTool);
        if (user._id === response.data.owner._id) {
          setOwner(true);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTool();
  }, [user]);

  return (
    <div className="container">
      <div className="tool-box">
        {tool && (
          <>
            <h2>{tool.name}</h2>
            <img
              className="tool-picture"
              src={tool.imageUrl}
              alt={tool.name}
            ></img>
            <p>Status: {tool.status}</p>
            {tool.status === "rented" && (
              <p>
                Tool is rented from {tool.from} to {tool.to}
              </p>
            )}
            <p>Owner: {tool.owner.name}</p>
            <p>{tool.details}</p>
          </>
        )}

        <Link to="/tools">
          <button>Back to tools map</button>
        </Link>

        {owner && (
          <Link to={`/tool/edit/${id}`}>
            <button>Edit tool</button>
          </Link>
        )}

        {tool && (
          <>
            {tool.status === "available" && (
              <>
                <h2>Rent this tool:</h2>
                <button id="rent">Rent the tool!</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ToolDetail;
