import React, { Component } from "react";

import Posts from "../../posts.json";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: Posts
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
