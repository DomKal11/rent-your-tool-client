import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import Comment from "../components/Comment";

const API_URL = "https://rentyourtools.herokuapp.com";

function ToolDetail(props) {
  const [fetching, setFetching] = useState(true);
  const { user } = useContext(AuthContext);
  const [tool, setTool] = useState(null);
  const [owner, setOwner] = useState(false);
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");
  const [rate, setRate] = useState(0);
  const { id } = useParams();

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  const getTool = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/tool/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTool(response.data);
        setComments(response.data.comment);
        if (user._id === response.data.owner._id) {
          setOwner(true);
        }
        setFetching(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTool();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      author: user._id,
      comment,
      rate,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/comment/${id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setComment("");
        setRate("");
        setTool(response.data);
        setComments(response.data.comment);
      })
      .catch((error) => console.log(error));
  };

  const rentTool = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/tool/${id}/rented`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const newData = response.data;
        // Reset the state
        setTool(newData);
        setComments(newData.comment);
      })
      .catch((error) => console.log(error));
  };
  const toolAvailable = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/tool/${id}/available`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const newData = response.data;
        // Reset the state
        setTool(newData);
        setComments(response.data.comment);
      })
      .catch((error) => console.log(error));
  };

  const rentThisTool = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/tool/${id}/${user._id}/rent`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTool(response.data);
        setComments(response.data.comment);
      })
      .catch((error) => console.log(error));
  };

  const deleteComment = (commentId, toolId) => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/comment/${toolId}/${commentId}/delete`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTool(response.data);
        setComments(response.data.comment);
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

      <div className="container container-padding fix-height tool-box card">
        <div className="">
          {tool && (
            <>
              <div className="img-bg">
                <img
                  className="tool-picture"
                  src={tool.imageUrl}
                  alt={tool.name}
                ></img>
                <Link to="/tools">
                  <button className="button-design back-to-map">
                    Back to map
                  </button>
                </Link>
              </div>
              <div className="d-flex justify-content-center status-detail">
                <h2>{tool.name}</h2>
                <span className={tool.status}>{tool.status}</span>
                {owner && (
                  <Link to={`/tool/${id}/edit`}>
                    <button className="edit-button button-design">
                      Edit tool
                    </button>
                  </Link>
                )}
              </div>
              <p>
                Price: {tool.price}€/day - Owner: {tool.owner.name}
              </p>
              <p className="tool-description">{tool.details}</p>
              <br></br>
              <br></br>
            </>
          )}

          {owner && (
            <>
              {tool.status === "available" && (
                <>
                  {tool.rentedby[0] && (
                    <div
                      id="reservation"
                      name="reservation"
                      className="reservation"
                    >
                      <h2>New request:</h2>
                      <p className="width-60">
                        <b>{tool.rentedby[0].name}</b> want to borrow your tool!
                        Contact him/her on <b>{tool.rentedby[0].email}</b> /{" "}
                        <b>{tool.rentedby[0].phone}</b> to agree on the details.
                      </p>
                      <button
                        className="button-design btn-approve"
                        onClick={(e) => rentTool(e)}
                      >
                        Rent tool to {tool.rentedby[0].name}
                      </button>
                      <button
                        className="button-design btn-decline"
                        onClick={(e) => rentTool(e)}
                      >
                        Cancel {tool.rentedby[0].name} request
                      </button>
                    </div>
                  )}
                </>
              )}
              {tool.status === "rented" && (
                <>
                  <p id="reservation">
                    Rented by <b>{tool.rentedby[0].name}</b>
                  </p>
                  <p>
                    Contact information: <b>{tool.rentedby[0].email}</b> /{" "}
                    <b>{tool.rentedby[0].phone}</b>
                  </p>
                  <button
                    className="button-design w-50 mx-auto"
                    onClick={(e) => toolAvailable(e)}
                  >
                    Change status to: "available"
                  </button>
                </>
              )}
            </>
          )}

          {tool && (
            <>
              {!owner && (
                <>
                  {tool.status === "available" && (
                    <>
                      <>
                        {tool.rentedby[0] && (
                          <>
                            <div class="reservation">
                              <h2>Waiting requests:</h2>
                              <p className="width-60">
                                <b>{tool.rentedby[0].name}</b> already sent rent
                                request. Please wait until his requests are
                                approved or rejected.
                              </p>
                              <button
                                disabled
                                className="button-design w-50 mx-auto"
                                id="rent"
                              >
                                Rent the tool!
                              </button>
                              <br></br>
                              <br></br>
                            </div>
                          </>
                        )}
                      </>
                      {!tool.rentedby[0] && (
                        <>
                          <br></br>
                          <br></br>
                          <button
                            className="button-design w-50 mx-auto"
                            id="rent"
                            onClick={(e) => rentThisTool(e)}
                          >
                            <span>Rent the tool!</span>
                          </button>
                          <br></br>
                          <br></br>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}

          <form onSubmit={handleSubmit} className="comment-form">
            <h2>Comments:</h2>
            <div className="d-flex justify-content-center">
              <textarea
                className="input-format"
                type="text"
                name="details"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit" className="button-design send">
                <span>Send</span>
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <span className="rate-label">Rate:</span>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={28}
                activeColor="#ffd700"
              />
            </div>
          </form>
          {comments && (
            <>
              {comments.map((comment, i) => {
                return (
                  <Comment
                    key={i}
                    {...comment}
                    userId={user._id}
                    toolId={id}
                    delete={deleteComment}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ToolDetail;
