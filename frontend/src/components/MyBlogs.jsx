import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import HomePosts from "./HomePosts";
import Loader from "./Loader";

const MyBlogs = () => {
  const { search } = useLocation();

  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[150px] min-h-[80vh]">
        {posts.map((post) => (
          <Link to={user ? `/posts/post/${post._id}` : "/login"} key={post._id}>
            <HomePosts post={post} />
          </Link>
        ))}
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          noResults && (
            <h3 className="text-center font-bold mt-16">No posts available</h3>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
