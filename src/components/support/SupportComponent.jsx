import React from "react";

const SupportComponent = ({ image, children }) => {
  return (
    <section className="bg-white py-20">
      <div className="m-auto flex max-w-7xl justify-center items-center">
        <div className="w-96 shrink-0 h-60 z-10">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="donation image"
          />
        </div>
        <div className="border-4 -ml-20 border-gray-300 px-8 max-w-xl pl-24 w-full py-16">
          {children}
          <p>Join us in making sports a space for all.</p>
        </div>
      </div>
    </section>
  );
};

export default SupportComponent;
