import React from "react";
import useFetch from "./useFetch";
import NewsList from "./NewsList";
const Home = () => {
  const {
    error,
    isPending,
    data: newsList,
  } = useFetch("http://127.0.0.1:8000/news");
  console.log(newsList);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-6">
          {error && <div>{error}</div>}
          {isPending && <div>Loading ...</div>}
          {newsList && <NewsList newsList={newsList["news"]} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
