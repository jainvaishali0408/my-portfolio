import React from "react";
import clothing from "../assets/portfolio/clothing.jpg";
import portimg from "../assets/portfolio/portimg.jpg";
import codecryp from "../assets/portfolio/codecryp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: clothing,
      href1: "https://mahalaxmi.onrender.com/",
      href2:
        "https://github.com/jainvaishali0408/Mahalaxmi-Synthetics-E-commerce-website-",
    },
    {
      id: 2,
      src: portimg,
      href1: "https://astounding-dasik-a05e58.netlify.app/",
      href2: "https://github.com/jainvaishali0408/my-portfolio",
    },
    {
      id: 3,
      src: codecryp,
      href1: "",
      href2: "https://github.com/jainvaishali0408/CodeCryptor",
    },
  ];

  const handleDemoClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleCodeClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my works here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, href1, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-auto"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(href1)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(href2)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
