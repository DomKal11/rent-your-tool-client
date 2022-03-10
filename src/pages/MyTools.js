import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import ToolCard from "../components/ToolCard";
import { Link } from "react-router-dom";

const API_URL = "https://rentyourtools.netlify.app";

const closeConfirmation = () => {
  document.getElementById("hidden-confirmation").style.cssText =
    "display: none;";
};

function MyTools() {
  let myTools = false;
  const [fetching, setFetching] = useState(true);
  const { user } = useContext(AuthContext);
  const [tools, setTools] = useState([]);
  let actualToolID = 0; // tool selected when delete div open

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
    getAllTools();
  }, [user]);

  const deleteToolDBid = (toolId) => {
    actualToolID = toolId;
  };

  const deleteToolDB = (toolId) => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/api/tool/${toolId}/delete`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        console.log(response.data);
        setTools(response.data);
        closeConfirmation();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {fetching && (
        <div className="d-flex justify-content-center flex-column loading-img">
          <img src="/loading.gif" alt="loading..."></img>
        </div>
      )}
      <div className="container height-container tool-box card fix-height">
        <div id="hidden-confirmation">
          <div className="flex-column align-self-center">
            <div className="d-flex justify-content-center">
              <p>Do you really want delete this tool?</p>
              <span
                id="close-x"
                onClick={() => closeConfirmation()}
                className="x-close"
              >
                X
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="button-design"
                onClick={() => deleteToolDB(actualToolID)}
              >
                Yes
              </button>
              <button
                onClick={() => closeConfirmation()}
                className="button-design"
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <span className="category-header">Your tools:</span>
          {tools.map((tool, i) => {
            if (tool.owner._id === user._id) {
              myTools = true;
              return <ToolCard key={i} {...tool} delete={deleteToolDBid} />;
            }
          })}
          {!myTools && (
            <p>
              You don't have any tools. Do you want to{" "}
              <Link to="/add-tool">Add a tool</Link>?
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default MyTools;
