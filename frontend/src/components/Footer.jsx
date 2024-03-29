const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[400px] flex md:flex-row flex-col items-start space-y-4 md:space-y-0 md:justify-between  text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
          <p> Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers Choice</p>
        </div>
        <div className="flex flex-col text-white">
          <p> Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Services</p>
        </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">
        All rights reserved @KAZAY Anas 2024
      </p>
    </>
  );
};

export default Footer;
