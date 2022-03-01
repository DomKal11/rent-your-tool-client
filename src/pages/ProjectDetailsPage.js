import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";


const API_URL = "http://localhost:5005";


function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  
  const getProject = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/projects/${id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getProject();
  }, [] );

  
  return (
    <div className="ProjectDetails">
    
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      
      <AddTask refreshProject={getProject} projectId={id} />          

      { project && project.tasks.map((task) => <TaskCard key={task._id} {...task} /> )} 

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
          
      <Link to={`/projects/edit/${id}`}>
        <button>Edit Project</button>
      </Link>
      
    </div>
  );
}

export default ProjectDetailsPage;