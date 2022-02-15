import "./App.css";
import { useEffect, useState } from "react";
import { getPosts } from "./network/api/post";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from "./redux/actions/postActions";
import { NavbarCom } from "./components/Navbar";
import { Hero } from "./containers/Hero";
import { World } from "./containers/World";
import { Popular } from "./containers/Popular";

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
  console.log(posts);
  return (
    <div className="App">
      <NavbarCom />
      <Hero posts={posts}/>
      <World />
      <Popular posts={posts}/>
    </div>
  );
}

export default App;
