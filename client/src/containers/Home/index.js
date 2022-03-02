import { useEffect, useState } from "react";
import { getPosts } from "./../../network/api/post";
import { useSelector, useDispatch } from "react-redux";
import {
  getPostsAction,
  getPostsFailAction,
  getPostsRequestAction,
} from "./../../redux/actions/postActions";
import { Hero } from "./../Hero";
import { World } from "./../World";
import { Popular } from "./../Popular";
import { LifeStyle } from "./../LifeStyle";
import { Latest } from "../Latest";

function Home() {
  const posts = useSelector((state) => state.allPosts.posts);
  const loading = useSelector((state) => state.allPosts.loading);
  const error = useSelector((state) => state.allPosts.error);
  const [heroPosts, setHeroPosts] = useState([]);
  const [worldPosts, setWorldPosts] = useState([]);
  const dispatch = useDispatch();
  const handleFatchPosts = () => {
    dispatch(getPostsRequestAction());
    getPosts()
      .then((res) => {
        dispatch(getPostsAction(res.data));
        setHeroPosts(res.data.slice(0, 4));
        setWorldPosts(res.data.slice(1, 4));
      })
      .catch((err) => {
        dispatch(getPostsFailAction(err));
      });
  };
  useEffect(() => {
    handleFatchPosts();
  }, []);
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
