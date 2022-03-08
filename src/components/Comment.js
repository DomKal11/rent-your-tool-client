import ReactStars from "react-rating-stars-component";

// We are deconstructing props object directly in the parentheses of the function
function Comment({ i, author, text, rate  }) {
  let profilepic = `https://ui-avatars.com/api/?name=${author.name}&rounded=true&background=random&length=1`;
  return (
    <div key={i} className="comment-container">
    <div className="d-flex justify-content-start">
      <div className="d-flex flex-column">
        <img src={profilepic} alt={author.name}></img>
        <p>{author.name}</p>
      </div>
      <div class="dialogbox">
      <div class="body">
      <span class="tip tip-left"></span>
      <div class="message">
      <span>{text}</span>
      </div>
      </div>
      </div>
      <div className="d-flex flex-column align-self-center rate-div"><span>⭐️</span><span>{rate}/5</span></div>
    </div>
    </div>
  );
}

export default Comment;
