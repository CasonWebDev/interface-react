import React from "react";
import HtmlReactParser from "html-react-parser";

import Comment from "./Comment";

function PostItem({ data }) {
  return (
    <div className="postItem">
      <div className="user">
        <img src={data.author.avatar} alt={data.author.name} />
        <div className="infos">
          <h3>{data.author.name}</h3>
          <small>{data.date}</small>
        </div>
      </div>
      <div className="content">{HtmlReactParser(data.content)}</div>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default PostItem;
