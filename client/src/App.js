import "./App.css";
import { useEffect, useState } from "react";
import { getPosts } from "./network/api/post";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from "./redux/actions/postActions";
import { Hero } from "./containers/Hero";
import { World } from "./containers/World";
import { Popular } from "./containers/Popular";
import { LifeStyle } from "./containers/LifeStyle";
import { register, login } from "./network/api/auth";
import { loginAction, logoutAction } from "./redux/actions/authActions";
import { setMessageAction } from "./redux/actions/messageActions";
// import { authActions } from "./redux/actions/authActions";

function App() {
  const posts = useSelector((state) => state.allPosts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts()
      .then((res) => {
        dispatch(getPostsAction(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Hero posts={posts} />
      <World />
      <Popular posts={posts} />
      <LifeStyle posts={posts} />
    </div>
  );
}

export default App;
