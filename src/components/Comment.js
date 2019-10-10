import React from "react";

function Comment({ data }) {
  return (
    <div className="comment">
      <img src={data.author.avatar} alt={data.author.name} />
      <div className="contentComment">
        <strong>{data.author.name}</strong> {data.content}
      </div>
    </div>
  );
}

export default Comment;
