import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ToolCard ( { name, details, imageUrl, _id } ) {
  
  return (
    <div className="card">
    <div className="card-img-container"><img className="card-img-top" src={imageUrl} alt={name}></img></div>
    <div class="card-body">
      <Link to={`/tool/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{details} </p>
      </div>
    </div>
  );
}

export default ToolCard;