import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Gabify</h2>
          <p className="text-sm leading-relaxed">
            A world where disability is not a limitation but a unique strength —
            where every individual can discover their potential through sports.
            {/* We are committed to empowering individuals with disabilities through
            sports. By creating inclusive opportunities, we promote confidence,
            teamwork, and equal participation in every game.{" "} */}
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              12 Ave., New York
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              info@giving.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              800 516 3290
            </li>
          </ul>
        </div>

        {/* Blog Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            From the Blog
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="font-medium text-white">Missioners in charge</p>
              <span className="text-gray-400 text-xs">
                23rd of April | 2 💬 4 ❤️
              </span>
            </li>
            <li>
              <p className="font-medium text-white">Celebrating the adoption</p>
              <span className="text-gray-400 text-xs">
                5th of April | 3 💬 1 ❤️
              </span>
            </li>
            <li>
              <p className="font-medium text-white">Charity for everyone</p>
              <span className="text-gray-400 text-xs">
                25th of April | 6 💬 18 ❤️
              </span>
            </li>
          </ul>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Our Happy Faces
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-gray-700 rounded-lg hover:opacity-80 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Gabify. All Rights Reserved.
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>Empowering Abilities Through Sports 💪</p>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => (
//   <footer className="bg-gray-800 text-gray-300 py-8 mt-16">

//   </footer>
// );

// export default Footer;
