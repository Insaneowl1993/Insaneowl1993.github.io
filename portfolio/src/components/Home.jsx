import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-300">
          Hello, I'm <span className="text-red-400">Dale Lambert</span>
        </h1>
        <p className="text-4xl font-bold text-gray-300">
          I'm a Junior Software Developer
        </p>
        <p className="text-xl text-gray-400 m-w-[700px]">
          {" "}
          looking to make my mark in the tech industry. I am currently improving
          my skills daily with a focus on full-stack development and
          applications.
        </p>
        {/* Button */}
        <div>
          <button className="flex items-center px-6 py-3 my-2 border-2 group text-white hover:bg-red-400 duration-500">
            <Link
              to="work"
              smooth={true}
              offset={50}
              duration={500}
            >
              View my Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
