const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 md:space-x-6 space-x-2">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@snehasishedev</p>
          <div className="flex space-x-2">
            <p>10/07/2024</p>
            <p>10:34</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          distinctio accusamus, possimus sed consequatur necessitatibus eligendi
          accusantium saepe officiis impedit numquam deserunt, dolorum unde ex?
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
