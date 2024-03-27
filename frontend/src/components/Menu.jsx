import { useContext } from "react";
import URL from "../url";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-black w-[200px] flex flex-col  cursor-pointer items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
      {!user && (
        <Link to={"/login"}>
          <h3 className="text-white text-md hover:text-gray-500">Login</h3>
        </Link>
      )}
      {!user && (
        <h3 className="text-white text-md hover:text-gray-500">Register</h3>
      )}
      {user && (
        <h3 className="text-white text-md hover:text-gray-500">Profile</h3>
      )}
      {user && (
        <h3 className="text-white text-md hover:text-gray-500 md:hidden inline-block">
          Write
        </h3>
      )}
      {user && (
        <h3 className="text-white text-md hover:text-gray-500">My Blogs</h3>
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
