import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xl mt-6">
            This is Vaishali Jain,currently pursuing Btech in Computer Science
            and Enginnering from BIT Mesra,Ranchi,Jharkhand.
          </p>

          <p className="text-xl mt-6">
            As a dedicated student specializing in Computer Science and
            Engineering, I possess a strong foundation in computer fundamentals,
            web development, and problem-solving with a focus on data structures
            and algorithms (DSA). I have gained proficiency in key programming
            languages such as Java, C, and C++, allowing me to efficiently
            implement solutions to complex problems. Through hands-on experience
            in web development, I have mastered JavaScript, MongoDB, ExpressJS,
            NodeJS etc. enabling me to create dynamic and responsive websites.
            Additionally, I have sharpened my problem-solving skills through
            coursework and personal projects, utilizing DSA concepts to optimize
            code performance. With this diverse skill set, I am equipped to
            tackle challenges in the realm of technology and contribute to
            innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
