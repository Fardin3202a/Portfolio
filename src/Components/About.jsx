import React from "react";
import Button from "./Button";
import AboutBg from "../assets/AboutBg.png";
import Vector from "../assets/Vector.png";

const About = () => {
  return (
    <div
      id="about-section"
      className="h-screen flex w-screen justify-center items-center relative gap-5"
    >
      <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
        {/* Background Images */}
        <img
          className="absolute lg:w-1/2 w-4/5 animate-spin-slow"
          src={AboutBg}
          alt="Background"
        />
        <img className="absolute lg:w-1/2 w-3/5 " src={Vector} alt="Vector" />
        {/* Content Box */}
        <div className="z-10 lg:w-1/2 w-11/12 bg-transparent backdrop-blur-xl border-2 border-dashed border-lightText rounded-3xl flex flex-col justify-center items-start p-6 lg:p-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-Primary mb-4">
            About me
          </h1>
          <p className="text-sm lg:text-base text-text mb-6">
            Hi, I’m Fardin! I’m a{" "}
            <mark className="bg-yellow-200 text-black px-1 rounded-sm">
              Frontend Developer
            </mark>{" "}
            passionate about creating clean, functional, and visually appealing
            web applications. With expertise in{" "}
            <mark className="bg-blue-200 text-black px-1 rounded-sm">
              React
            </mark>
            ,{" "}
            <mark className="bg-green-200 text-black px-1 rounded-sm">
              Tailwind CSS
            </mark>
            . When I’m not coding, I enjoy exploring the latest tech trends. I’m
            always open to learning, collaborating, and growing, so feel free to
            reach out to me. I’d love to connect!
          </p>

          <Button extraStyle="font-poppins bg-gray-800 text-white w-32 h-10">
            <a href="mailto:fardin3202amailto:fardin@gmail.com?subject=Work%20Opportunity&body=Hello%20Fardin">
              Hire me
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
