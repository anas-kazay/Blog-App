import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  console.log(file);

  const addCategory = () => {
    let updatedCats = [...cats, cat];
    setCat("");
    setCats(updatedCats);
  };

  const deleteCategory = (index) => {
    let updatedCats = [...cats];
    updatedCats.splice(index, 1);
    setCats(updatedCats);
  };

  const handleCreate = async (e) => {
    //to prevent refreshing of this page
    e.preventDefault();
    const post = {
      title,
      description,
      username: user.username,
      userId: user._id,
      categories: cats,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      //image upload
      try {
        const imgUpload = await axios.post(URL + "/api/upload", data);
        console.log(imgUpload.data);
      } catch (err) {
        console.log(err);
        console.log("here");
      }
    }
    //post upload
    try {
      const res = await axios.post(
        URL + "/api/posts/create",

        post,

        { withCredentials: true }
      );
      navigate("/posts/post/" + res.data._id);
    } catch (err) {
      console.log(err);
      console.log("yes");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold text-xl md:text-2xl mt-8">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input
            type="text"
            placeholder="Enter post title"
            className="outline-none px-4 py-2"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            className="px-4"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Enter post category"
              />
              <div
                onClick={addCategory}
                className="text-white px-4 py-2 bg-black font-semibold cursor-pointer"
              >
                Add
              </div>
            </div>

            {/* Categories */}
            <div className="flex px-4 mt-3">
              {cats.length != 0 &&
                cats.map((c, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                  >
                    <p>{c}</p>
                    <p
                      onClick={() => deleteCategory(index)}
                      className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                    >
                      <ImCross />
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <textarea
            className="px-4 py-2 outline-none"
            placeholder="Enter post description"
            cols="30"
            rows="8"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 text-lg md:text-xl"
            onClick={handleCreate}
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
