import React from "react";
import useFetch from "./useFetch";
import NewsList from "./NewsList";
import { useParams } from "react-router-dom";
const Category = () => {
  const { symbol } = useParams();
  const {
    error,
    isPending,
    data: newsList,
  } = useFetch("https://reddit-dot-cloud-work-314310.ew.r.appspot.com/news?symbol=" + symbol);
  console.log(newsList);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-6">
          {error && <div>{error}</div>}
          {isPending && <div>Loading ...</div>}
          {newsList && <NewsList newsList={newsList["news"]} title={`${symbol} Posts`} />}
        </div>
      </div>
    </div>
  );
};

export default Category;
