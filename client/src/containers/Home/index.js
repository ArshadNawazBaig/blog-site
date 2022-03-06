import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from "./../../redux/actions/postActions";
import { Hero } from "./../Hero";
import { World } from "./../World";
import { Popular } from "./../Popular";
import { LifeStyle } from "./../LifeStyle";
import { Latest } from "../Latest";
import { toast } from "react-toastify";

function Home() {
  const {posts, error, loading} = useSelector((state) => state.allPosts);
  const [heroPosts, setHeroPosts] = useState([]);
  const [worldPosts, setWorldPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
    setHeroPosts(posts.slice(0, 4));
    setWorldPosts(posts.slice(1, 4));
  }, [error, posts]);
  
  return (
    <div className="home">
      <Hero posts={heroPosts} loading={loading} />
      <World posts={posts} worldPosts={worldPosts} loading={loading} />
      <Popular posts={posts} loading={loading} />
      <LifeStyle posts={posts} loading={loading} />
      <Latest posts={posts} loading={loading} />
    </div>
  );
}

export default Home;
