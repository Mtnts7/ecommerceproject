import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function PageContent() {
  const slides = [
    { url: "src/assets/mainpage.jpg" },
    { url: "src/assets/mainpage2.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[960px] w-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 p-2 text-navbarLight cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={70} />
      </div>
      {/* Right Arrow */}
      <div className="group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 p-2 text-navbarLight cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={70} />
      </div>
      <div className="top-[26%] absolute left-[10%] text-navbarLight">
        <h5 className="text-lg  font-semibold pb-16">SUMMER 2020</h5>
        <h1 className="text-7xl font-bold">NEW COLLECTION</h1>
        <h4 className="text-xl pt-16">
          We know how large objects will act.
          <br />
          but things on a small scale.
        </h4>
        <button className="bg-success text-2xl rounded-md px-5 py-3 mt-7 font-bold">
          SHOP NOW
        </button>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer flex"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PageContent;
