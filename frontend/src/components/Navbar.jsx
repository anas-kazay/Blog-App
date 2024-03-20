import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const user = true;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">BLOG BOOK</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p>
          <BsSearch />
        </p>
        <input
          type="text"
          placeholder="Search a post"
          className="outline-none px-3"
        />
      </div>

      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <h3>
          {!user && <Link to="/login">Login</Link>}
          {user && <Link to="/write">Write</Link>}
        </h3>
        <h3>
          {!user && <Link to="/register">Register</Link>}
          {user && <Link to="/profile">Profile</Link>}
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
