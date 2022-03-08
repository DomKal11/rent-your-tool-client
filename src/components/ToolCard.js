
import { HashLink as Link } from 'react-router-hash-link';

// We are deconstructing props object directly in the parentheses of the function
function ToolCard ( { name, details, imageUrl, _id, rentedby } ) {
  
  return (
    <div className="card">
    {rentedby[0]&& (<Link to={`/tool/${_id}#reservation`}><div className="notification">{rentedby[0].name} wants your tool!</div></Link>)}
    <div className="card-img-container"><img className="card-img-top" src={imageUrl} alt={name}></img></div>
    <div className="card-body">
      <Link to={`/tool/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{details} </p>
      </div>
    </div>
  );
}

export default ToolCard;