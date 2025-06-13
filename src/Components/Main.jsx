import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import MainBg from "/src/assets/MainBg.png";
import Vector from "/src/assets/Vector.png";

const Main = () => {
  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="home-section">
      <div className=" w-screen h-screen flex justify-center items-center flex-col relative">
        <img
          className=" opacity-90 -z-20 w-full
         lg:w-3/4 xl:w-3/4 absolute "
          src={MainBg}
          alt=""
        />
        <img
          className="-z-10 w-full sm:w-full lg:w-[960px] xl:w-[960px] absolute "
          src={Vector}
          alt="Responsive Image"
        />
        <div className=" absolute w-full h-full flex justify-center items-center flex-col">
          <div className=" w-full flex justify-center items-end gap-2">
            <h1 className="text-Secondary text-2xl font-poppins lg:text-6xl font-bold">Hello, I'm </h1>
            <h1 className="font-poppins font-bold text-2xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-tl from-Secondary to-Primary"> Fardin Ahmed</h1>

          </div>
          <h2 className=" font-poppins text-center w-10/12 font-bold text-2xl leading-tight lg:text-5xl xl:text-5xl text-gray-800">
            I will create modern and user-friendly web solutions
          </h2>
          <p className=" lg:mt-4 xl:mt-4 w-11/12 xl:w-5/12 lg:w-5/12 lg:my-2 xl:my-2 font-roboto text-text text-xs lg:text-sm xl:text-sm text-center leading-tight my-1">
            I'm here to help you build modern, responsive, and user-friendly web
            solutions using HTML, CSS, JavaScript, and React. With a strong
            focus on design and functionality, I use tools like Tailwind CSS to
            bring your ideas to life.
          </p>
          <Button
            handlClick={scrollToPortfolio}
            extraStyle=" font-poppins w-36 h-11 bg-gradient-to-tl from-Secondary to-Primary text-white flex flex-row gap-2 justify-center items-center text-xs mt-5 xl:w-56 xl:h-14 xl:gap-3 xl:text-lg"
          >
            Explore Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Main;
