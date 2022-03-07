import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";
import ToolCard from "../components/ToolCard";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
    const { user } = useContext(AuthContext);
    const [tools, setTools] = useState([]);

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

  
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
      { tools.map((tool, i) => {
          if(tool.owner._id === user._id){
            return (<ToolCard key={i} {...tool} />);
          }
          })} 
          </div>
    </div>
  );
}

export default ProjectListPage;

