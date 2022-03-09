import { HashLink as Link } from "react-router-hash-link";

// We are deconstructing props object directly in the parentheses of the function
function ToolCard(props) {
  const { name, details, imageUrl, _id, status, rentedby } = props;
  const deleteDiv = (_id) => {
    document.getElementById("hidden-confirmation").style.cssText =
      "display: flex;";
    props.delete(_id);
  };
  return (
    <div className="card card-special card-light">
      {status === "available" && (
        <>
          {rentedby[0] && (
            <Link to={`/tool/${_id}#reservation`}>
              <div className="notification">
                {rentedby[0].name} wants your tool!
              </div>
            </Link>
          )}
        </>
      )}
      {status === "rented" && (
        <>
          {rentedby[0] && (
            <Link to={`/tool/${_id}#reservation`}>
              <div className="notification notification-green">
                {rentedby[0].name} has tool on loan!
              </div>
            </Link>
          )}
        </>
      )}
      <Link to={`/tool/${_id}`}>
        <div className="card-img-container">
          <img className="card-img-top" src={imageUrl} alt={name}></img>
        </div>
      </Link>
      <div className="card-body">
        <Link to={`/tool/${_id}`}>
          <h3>{name}</h3>
        </Link>
        <p className="card-details">{details} </p>
        <div className="delete-div" onClick={() => deleteDiv(_id)}>
          <span>🗑️</span>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
