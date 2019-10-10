import React from "react";
import "normalize.css";
import "./assets/css/Style.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
