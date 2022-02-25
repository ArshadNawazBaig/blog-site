import { useEffect, useState } from "react";
import { getPosts } from "./../../network/api/post";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from './../../redux/actions/postActions';
import { Hero } from "./../Hero";
import { World } from "./../World";
import { Popular } from "./../Popular";
import { LifeStyle } from "./../LifeStyle";
import { Latest } from "../Latest";

function Home() {
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
    <div className="home">
      <Hero posts={posts} loading={loading} />
      <World posts={posts} />
      <Popular posts={posts} loading={loading} />
      <LifeStyle posts={posts} loading={loading} />
      <Latest posts={posts} loading={loading} />
    </div>
  );
}

export default Home;
