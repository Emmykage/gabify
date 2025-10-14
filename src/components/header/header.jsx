"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../nav/Navbar";
import headerBg from "@/assets/background/gabifyheader.jpg";
import headerBg1 from "@/assets/images/IMG_6295.jpeg";
import Image from "next/image";
import Assets from "@/assets/assets";
import "hero-slider/dist/index.css";
import HeroSlider, { MenuNav, Nav, Overlay, SideNav, Slide } from "hero-slider";
import Link from "next/link";

const Header = () => {
  const [deviceType, setdeviceType] = useState("windows");

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setdeviceType("mobile");
    } else {
      setdeviceType("windows");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      id: 1,
      title: "Hand to make better life for childer",
      info: () => (
        <div className="md:m-auto sm:max-w-4xl mx-9  lg:max-w-7xl px-4 mt -20  text-white z-10   w-full">
          <div className="max-w-xl py-10 bg-gray-600/30 rounded-xl pl-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">
              Hand to make better life for childer
            </h3>
            <p className="">
              Every goood act is humanity. A mans true welth is hereafter is the
              goood that he does in this world to his fellows{" "}
            </p>

            <div className="flex gap-4 my-4">
              <button className="bg-orange-600 px-4 py-2 rounded-lg text-sm">
                Read More
              </button>
              <button className="bg- px-4 py-2 rounded-lg border  border-white  text-gray-200">
                Our causes
              </button>
            </div>
          </div>
        </div>
      ),
      image: headerBg.src,
    },
    {
      id: 2,
      title: "Give the girl child opportunity",
      info: () => (
        <div className="max-w-7xl px-4  text-white z-10  m-auto  w-full">
          <div className="max-w- max-w-xl py-10 bg-gray-600/50 rounded-xl pl-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">
              Give the girl child opportunity
            </h3>
            <p className="">
              Every goood act is humanity. A mans true welth is hereafter is the
              goood that he does in this world to his fellows{" "}
            </p>

            <div className="flex gap-4 my-4">
              <button className="bg-orange-600 px-4 py-2 rounded-lg text-sm">
                Read More
              </button>
              <button className="bg- px-4 py-2 rounded-lg border  border-white  text-gray-200">
                Our causes
              </button>
            </div>
          </div>
        </div>
      ),
      image: headerBg1.src,
    },
  ];
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      slidingAnimation
      isSmartSliding
      initialSlide="2"
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <div className="bg-gray-900/30 h-full pointer-events-none w-full absolute top-0 left-0 z-10">
        <Navbar />
      </div>
      {items.map((item) => (
        <Slide
          key={item.id}
          shouldRenderMask
          navDescription="Home"
          label={item.title}
          background={{
            backgroundImageSrc: item.image,
            backgroundAttachment: "fixed", // optional: nice parallax effect
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="min h-full flex  m-auto relative w-full justify-center items-center">
            {item.info()}
          </div>
        </Slide>
      ))}
      <Nav />
      <SideNav />

      <MenuNav />
    </HeroSlider>
  );
};

export default Header;
