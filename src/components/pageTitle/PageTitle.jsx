import React from "react";
import "./pageTitle.scss";
import Link from "next/link";
const PageTitle = ({ title, subtitle, titleBg, link }) => (
  <div
    style={{
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${titleBg?.src ?? "/background/about-img.jpg"} )`,
    }}
    className="text-center  pt-40 pb-20 px-4 mb-0 relative"
  >
    <div className="bg-gray-900/80"></div>
    <h2 className="text-3xl font-bold text-gray-100 my-4">{title}</h2>
    <div className="max-w-7xl mx-6 px-4 flex text-white pt-10 border-white border-t justify-between md:m-auto">
      <h3 className="text-4xl font-semibold">{subtitle ?? title}</h3>
      <span className="text-xs">
        {" "}
        Home / <Link href={`/${link}`}>{link}</Link>{" "}
      </span>
    </div>
    {subtitle && (
      <p className="text-gray-200 font-bold mt-2 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default PageTitle;
