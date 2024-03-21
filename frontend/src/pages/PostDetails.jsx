import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligence in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@snehasishedev</p>
          <div className="flex space-x-2">
            <p>10/07/2024</p>
            <p>10:34</p>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full mx-auto mt-8"
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          voluptas quasi voluptatibus explicabo magnam velit maxime odit ratione
          consequatur omnis officiis, nisi quaerat modi distinctio ea reiciendis
          totam laudantium hic repellat asperiores? Nulla laborum inventore nisi
          dolor omnis praesentium iste dolores soluta neque quidem tenetur, odio
          provident at culpa ea quae necessitatibus, nihil nemo expedita
          deserunt doloribus ipsam tempore! Placeat dicta temporibus pariatur
          deserunt, inventore beatae unde nihil nesciunt alias sit. Unde,
          aliquid tenetur omnis perferendis voluptatem ipsa quisquam dolore
          nobis, explicabo sunt consequatur quo aspernatur voluptatibus nam
          quibusdam ab ratione earum, totam similique fuga ipsam quos deleniti.
          Suscipit, mollitia!
        </p>

        {/* Categories */}
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Algorithms</div>
          </div>
        </div>

        {/* Comments */}
        <div className="flex flex-col mt-4 space-y-3">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* Comment */}
          <Comment />
          <Comment />
          <Comment />
        </div>
        {/* write a comment */}
        <div className="flex flex-col mt-4 md:flex-row w-full">
          <input
            type="text"
            className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
            placeholder="write a comment"
          />
          <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
