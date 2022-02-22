import "./App.css";
import { useEffect, useState } from "react";
import { getPosts } from "./network/api/post";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from "./redux/actions/postActions";
import { Hero } from "./containers/Hero";
import { World } from "./containers/World";
import { Popular } from "./containers/Popular";
import { LifeStyle } from "./containers/LifeStyle";

function App() {
  const posts = useSelector((state) => state.allPosts.posts);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleFatchPosts = () => {
    setLoading(true);
    getPosts()
      .then((res) => {
        setLoading(false);
        dispatch(getPostsAction(res.data));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    handleFatchPosts();
  }, []);
  return (
    <div className="App">
      <Hero posts={posts} loading={loading} />
      <World />
      <Popular posts={posts} loading={loading} />
      <LifeStyle posts={posts} loading={loading} />
    </div>
  );
}

export default App;
