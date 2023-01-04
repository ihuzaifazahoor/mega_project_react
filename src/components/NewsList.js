import { React, useState } from "react";
import { Link } from "react-router-dom";
import CommentsList from "./CommentsList";
const NewsList = ({ newsList }) => {
  const colors = ["8c94f7", "fcb0b0", "8beef5", "7af58c", "f5ef7a"];
  const [selectedPostId, setSelectedPostId] = useState(null);
  function handleClick(id) {
    setSelectedPostId(id);
  }
  return (
    <div>
      <h1>Recent Posts</h1>
      {newsList.map((news) => (
        <div className="card m-3" key={news.hash}>
          <div className="card-body text-start">
            <h5 className="card-title">
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src={`https://dummyimage.com/50/${
                      colors[Math.floor(Math.random() * colors.length)]
                    }/222.png&text=${news.author[0]}`}
                    className="me-2"
                    alt="Author"
                  />
                  {news.author}
                </div>
                <small className="text-secondary">
                  Symbol: {news.ticker}
                </small>
              </div>
            </h5>
            <p className="card-text">{news.content}</p>
            <div className="image-parent">
              <img
                src={news.image || "https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?s=612x612&w=0&k=20&c=xbGzQiL_UIMFDUZte1U0end0p3E8iwocIOGt_swlywE="}
                className="card-img-top img-fluid image-itself"
                alt={news.hash}
              />
            </div>
            <div>
              <small className="text-sm text-secondary">
                Likes: {news.likes}
              </small>
            </div>
            <div className="row justify-content-center">
              <Link
                onClick={() => handleClick(news.hash)}
                className="text-center"
              >
                View Comments
              </Link>
            </div>
            {selectedPostId === news.hash && <CommentsList id={news.hash} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
