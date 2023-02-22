import React from "react";
import articles from "./article-content";
import Articles from "../components/Articles";

function ArticlesList(props) {
  return (
    <>
      <h1 className="sm:text-4xl pb-5 text-2xl font-bold mt-6 text-gray-900">
        Article List
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articles} />
        </div>
      </div>
    </>
  );
}

export default ArticlesList;
