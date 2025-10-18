import React from "react";

const SupportComponent = ({ image, children }) => {
  return (
    <section className="bg-white overflow-hidden py-20 px-4">
      <div className="m-auto flex gap-4 md:gap-0 md:flex-row flex-col max-w-7xl justify-center items-center">
        <div className="md:w-96 rounded-2xl md:rounded-none w-full shrink-0 h-60 z-10 overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="donation image"
          />
        </div>
        <div className="border-4 md:-ml-20 rounded-2xl md:rounded-none border-gray-300 md: px-8 max-w-xl md:pl-24 py-6 w-full md:py-16">
          {children}
          <p>Join us in making sports a space for all.</p>
        </div>
      </div>
    </section>
  );
};

export default SupportComponent;
