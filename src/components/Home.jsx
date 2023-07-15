import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-slate-50 font-signature">
            Greetings Visitor!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a passionate and dedicated student, I strive to create innovative
            solutions through technology. With a curiosity for cutting-edge
            advancements, I aim to leverage my skills in problem-solving and web
            development. Welcome to my portfolio, where I showcase my skills and
            experience in the world of technology.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-h-80 md:max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
