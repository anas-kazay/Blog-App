import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfilePosts from "../components/ProfilePosts";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updated, setUpdated] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleUserUpdate = async () => {
    setUpdated(false);
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const res = await axios.put(
        URL + "/api/users/" + storedUser._id,
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      setUpdated(true);
    } catch (err) {
      console.log(err);
      setUpdated(false);
    }
  };

  const handleUserDelete = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const res = await axios.delete(URL + "/api/users/" + storedUser._id, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const res = await axios.get(URL + "/api/posts/user/" + storedUser._id);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username);
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[100px] mt-8 flex md:flex-row flex-col-reverse space-x-8 items-start">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
          <h1 className="text-xl font-bold mb-4">Your posts:</h1>
          {posts.map((post) => (
            <ProfilePosts key={post._id} post={post} />
          ))}
        </div>
        <div className="md:sticky md:top-16 flex justify-start items-start md:justify-end  md:w-[30%] w-full ">
          <div className="flex flex-col space-y-4 items-start">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              placeholder="Your username"
              className="outline-non px-4 py-2 text-gray-500"
              onChange={(e) => setUsername(e.target.value)}
              value={username || ""}
            />
            <input
              type="email"
              placeholder="Your email"
              className="outline-non px-4 py-2 text-gray-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
            <input
              type="password"
              placeholder="Your password"
              className="outline-non px-4 py-2 text-gray-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
            />
            <div className="flex items-center space-x-4 mt-8">
              <button
                className="text-white font-semibold bg-black hover:text-black hover:bg-gray-400 py-2 px-4"
                onClick={handleUserUpdate}
              >
                Update
              </button>
              <button
                className="text-white font-semibold bg-black hover:text-black hover:bg-gray-400 py-2 px-4"
                onClick={handleUserDelete}
              >
                Delete
              </button>
            </div>
            {updated && (
              <h3 className="text-green-500 text-sm text-center mt-4">
                User updated successfully!
              </h3>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
