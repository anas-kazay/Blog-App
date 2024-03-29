import { useContext } from "react";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-black w-[200px] z-10 flex flex-col  cursor-pointer items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
      {!user && (
        <Link to={"/login"}>
          <h3 className="text-white text-md hover:text-gray-500">
            <Link to="/login">Login</Link>
          </h3>
        </Link>
      )}
      {!user && (
        <h3 className="text-white text-md hover:text-gray-500">
          <Link to="/register">Register</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-md hover:text-gray-500">
          <Link to={"/profile/" + user._id}>Profile</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-md hover:text-gray-500 md:hidden inline-block">
          <Link to="/write">Write</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-md hover:text-gray-500">
          <Link to="/myblogs">My Blogs</Link>
        </h3>
      )}
      {user && (
        <h3
          className="text-white text-md hover:text-gray-500"
          onClick={handleLogout}
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
