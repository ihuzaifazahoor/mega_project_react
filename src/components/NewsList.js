import { React, useState } from "react";
import { Link } from "react-router-dom";
import CommentsList from "./CommentsList";
const NewsList = ({ newsList, title }) => {
  const colors = ["8c94f7", "fcb0b0", "8beef5", "7af58c", "f5ef7a"];
  const [selectedPostId, setSelectedPostId] = useState(null);
  function handleClick(id) {
    setSelectedPostId(id);
  }
  return (
    <div>
      <h1>{title}</h1>
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
                  Symbol:{" "}
                  <Link to={`/posts/${news.ticker}`}>{news.ticker}</Link>
                </small>
              </div>
            </h5>
            <p className="card-text">{news.content}</p>
            <div className="image-parent">
              {news.image &&
              (
                news.image.includes(".png") ||
                news.image.includes(".jpg") ||
                news.image.includes(".webp")) ? (
                <img
                  src={news.image}
                  className="card-img-top img-fluid image-itself"
                  alt={news.image}
                />
              ) : (
                <a href={news.image} target="_blank" rel="noreferrer">Read More</a>
              )}
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
