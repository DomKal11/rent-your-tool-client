
// We are deconstructing props object directly in the parentheses of the function
function Comment({ i, author, text, rate, userId }) {
  let owner=false;
  if(userId === author._id){owner=true;}
  let profilepic = `https://ui-avatars.com/api/?name=${author.name}&rounded=true&background=random&length=3&size=50`;
  return (
    <div key={i} className="comment-container">
    <div className="d-flex justify-content-start">
      <div className="d-flex flex-column">
        <img src={profilepic} alt={author.name} className="profilepic-comment"></img>
        <p className="profilepic-name">{author.name}</p>
      </div>
      <div className="dialogbox">
      <div className="body">
      <span className="tip tip-left"></span>
      <div className="message">
      <span>{text}</span>
      </div>
      </div>
      </div>
      <div className="d-flex flex-column align-self-center rate-div"><span>⭐️</span><span>{rate}/5</span></div>
      &nbsp;&nbsp;{owner && <button onClick="" className="button-design ml-1">🗑️</button>}
    </div>
    </div>
  );
}

export default Comment;
