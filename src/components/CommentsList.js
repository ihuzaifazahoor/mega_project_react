import React from "react";
import useFetch from "./useFetch";
const CommentsList = ({ id }) => {
  const colors = ['8c94f7', 'fcb0b0', '8beef5', '7af58c', 'f5ef7a'];
  const {
    error,
    isPending,
    data: comments,
  } = useFetch("https://reddit-by-huzaifa-dot-cloud-work-314310.ew.r.appspot.com/comments?news_id=" + id);
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {comments &&
        comments["comments"].map((comment) => (
          <div className="card bg-light mx-4 my-2" key={comment.hash}>
            <div className="card-body text-start">
              <h6 className="card-title">
                <img
                  src={`https://dummyimage.com/20/${colors[Math.floor(Math.random() * colors.length)]}/000000.png&text=${comment.author[0]}`}
                  className="me-2"
                  alt={comment.author}
                />
                {comment.author}
              </h6>
              <p className="card-text">{comment.content}</p>
              <div>
                <small className="text-sm text-secondary">Likes: {comment.likes}</small>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentsList;
