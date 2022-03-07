import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ToolCard ( { name, details, _id } ) {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/tool/${_id}`}>
        <h3>{name}</h3>
        <p>{details}</p>
      </Link>
      <p style={{ maxWidth: "400px" }}>{details} </p>
    </div>
  );
}

export default ToolCard;