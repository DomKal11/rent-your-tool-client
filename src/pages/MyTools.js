import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";
import ToolCard from "../components/ToolCard";

const API_URL = "https://rentyourtools.herokuapp.com";

const closeConfirmation = () => {
  document.getElementById('hidden-confirmation').style.cssText = 'display: none;';
};


function ProjectListPage() {
    const { user } = useContext(AuthContext);
    const [tools, setTools] = useState([]);
    let actualToolID = 0; // tool selected when delete div open

    const getAllTools = () => {
        axios
          .get(`${API_URL}/api/tools`)
          .then((response) => {setTools(response.data)})
          .catch((error) => console.log(error));
      };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllTools();
    // console.log();
  }, [user] );

  const deleteToolDBid = (toolId) => {
    actualToolID = toolId;
    console.log(actualToolID);
  };

  const deleteToolDB = (toolId) => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/tool/${toolId}/delete`, {
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
    <div className="container height-container tool-box card">
    <div id="hidden-confirmation">
    <div className="flex-column align-self-center">
    <div className="d-flex justify-content-center"><p>Do you really want delete this tool?</p><span id="close-x" onClick={()=> closeConfirmation()} className="x-close">X</span></div>
    <div className="d-flex justify-content-center"><button className="button-design" onClick={()=> deleteToolDB(actualToolID)}>Yes</button><button onClick={()=> closeConfirmation()} className="button-design">No</button></div>
    </div>
    </div>
      <div className="row d-flex justify-content-center">
      <span className="category-header">Your tools:</span>
      { tools.map((tool, i) => {
          if(tool.owner._id === user._id){
            return (<ToolCard key={i} {...tool} delete={deleteToolDBid}/>);
          }
          })} 
          </div>
    </div>
  );
}

export default ProjectListPage;

