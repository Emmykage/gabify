"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../nav/Navbar";
import headerBg from "@/assets/images/athletic.jpg";
import headerBg1 from "@/assets/images/IMG_6295.jpeg";
import headerBg2 from "@/assets/images/IMG_6199.jpeg";
import headerBg3 from "@/assets/images/WhatsApp Image 2025-10-20 at 12.25.32_05c2ee4c.jpg";
import headerBg4 from "@/assets/images/WhatsApp-Image-play.jpg";

import "./style.scss";
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
          <div className="max-w-xl py-10 px-4 bg-gray-600/30 rounded-xl pl-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">
              Hands That Build Brighter Futures{" "}
            </h3>
            <p className="">
              Every act of kindness creates a ripple of hope. Together, we
              uplift children and para-athletes across Nigeria to reach their
              full potential.{" "}
            </p>

            <div className="flex gap-4 my-4">
              <Link
                href={"/blog"}
                className="bg-orange-600 px-4 py-2 rounded-lg text-sm"
              >
                Read More
              </Link>
              <Link
                href={"/about"}
                className="bg- px-4 py-2 rounded-lg border  border-white  text-gray-200"
              >
                Our causes
              </Link>
            </div>
          </div>
        </div>
      ),
      image: headerBg2.src,
    },
    {
      id: 2,
      title: "Give the girl child opportunity",
      info: () => (
        <div className="max-w-7xl px-4  text-white z-10  m-auto  w-full">
          <div className=" ml-auto max-w-xl py-10 bg-gray-600/50 rounded-xl pl-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">
              Empower. Inspire. Achieve.
            </h3>
            <p className="">
              We believe ability has no limits. Through sports, education, and
              support, Gabify helps every para-athlete discover their power and
              purpose.{" "}
            </p>

            <div className="flex gap-4 my-4">
              <Link
                href={"/blog"}
                className="bg-orange-600 px-4 py-2 rounded-lg text-sm"
              >
                Read More
              </Link>
              <Link
                href={"/about"}
                className="bg- px-4 py-2 rounded-lg border  border-white  text-gray-200"
              >
                Our causes
              </Link>
            </div>
          </div>
        </div>
      ),
      image: headerBg.src,
    },
    {
      id: 3,
      title: "Give the girl child opportunity",
      info: () => (
        <div className="max-w-7xl px-4  text-white z-10  m-auto  w-full">
          <div className="max-w- max-w-xl py-10 bg-gray-600/50 rounded-xl pl-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">
              A Chance to Dream Again{" "}
            </h3>
            <p className="">
              Hope begins with opportunity. Your support helps us provide
              training, education, and care for those who need it most.{" "}
            </p>

            <div className="flex gap-4 my-4">
              <Link
                href={"/blog"}
                className="bg-orange-600 px-4 py-2 rounded-lg text-sm"
              >
                Read More
              </Link>
              <Link
                href={"/about"}
                className="bg- px-4 py-2 rounded-lg border  border-white  text-gray-200"
              >
                Our causes
              </Link>
            </div>
          </div>
        </div>
      ),
      image: headerBg1.src,
      position: "center 20%",
    },

    {
      id: 4,
      title: "Give the girl child opportunity",
      info: () => (
        <div className="max-w-7xl px-4  text-white z-10  m-auto  w-full">
          <div className="ml-auto max-w-xl py-10 bg-gray-600/50 rounded-xl pl-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">
              Together, We Change Lives
            </h3>
            <p className="">
              Compassion in action — that’s the heart of Gabify. Join us in
              building a community where everyone belongs, thrives, and inspires
              others.{" "}
            </p>

            <div className="flex gap-4 my-4">
              <Link
                href={"/blog"}
                className="bg-orange-600 px-4 py-2 rounded-lg text-sm"
              >
                Read More
              </Link>
              <Link
                href={"/about"}
                className="bg- px-4 py-2 rounded-lg border  border-white  text-gray-200"
              >
                Our causes
              </Link>
            </div>
          </div>
        </div>
      ),
      image: headerBg3.src,
    },
    {
      id: 5,
      title: "Give the girl child opportunity",
      info: () => (
        <div className="max-w-7xl px-4  text-white z-10  m-auto  w-full">
          <div className="max-w- max-w-xl py-10 bg-gray-600/50 rounded-xl pl-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">
              From Courage to Greatness
            </h3>
            <p className="">
              Every para-athlete has a story worth celebrating. We stand beside
              them — breaking barriers, creating champions, and building a more
              inclusive Nigeria.
            </p>

            <div className="flex gap-4 my-4">
              <Link
                href={"/blog"}
                className="bg-orange-600 px-4 py-2 rounded-lg text-sm"
              >
                Read More
              </Link>
              <Link
                href={"/about"}
                className="bg- px-4 py-2 rounded-lg border  border-white  text-gray-200"
              >
                Our causes
              </Link>
            </div>
          </div>
        </div>
      ),
      image: headerBg4.src,
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
      {/* <Overlay className="bg-gray-900 h-full pointer-events- w-full absolute top-0 left-0 z-10"> */}
      <Navbar className="" />
      {/* </Overlay> */}
      {items.map((item) => (
        <Slide
          className="custom-slide"
          key={item.id}
          shouldRenderMask
          navDescription="Home"
          label={item.title}
          background={{
            backgroundImageSrc: item.image,
            backgroundAttachment: "fixed", // optional: nice parallax effect
            backgroundPosition: "center 80%",
          }}
        >
          <div className="min h-full bg-gray-950/60  flex  m-auto relative w-full justify-center items-center">
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
