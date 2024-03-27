import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenu(!menu);
  };
  //const user = false;
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">BLOG BOOK</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <input
          type="text"
          placeholder="Search a post"
          className="outline-none px-3"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <p
          className="cursor-pointer"
          onClick={() => navigate(prompt ? "?search=" + prompt : "/")}
        >
          <BsSearch />
        </p>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        <h3>
          {!user && <Link to="/login">Login</Link>}
          {user && <Link to="/write">Write</Link>}
        </h3>
        <h3>
          {!user && <Link to="/register">Register</Link>}
          {user && (
            <div>
              <p className="cursor-pointer relative" onClick={showMenu}>
                <FaBars />
              </p>
              {menu && <Menu />}
            </div>
          )}
        </h3>
      </div>
      <div onClick={showMenu} className="md:hidden ">
        <p className="cursor-pointer text-lg relative">
          <FaBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
