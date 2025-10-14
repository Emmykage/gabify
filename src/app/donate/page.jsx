"use client";
import Navbar from "@/components/nav/Navbar";
import PageTitle from "@/components/pageTitle/PageTitle";
import SectionTitle from "@/components/sectionTitles/sectionTitle";
import React, { useState } from "react";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const presetAmounts = [10, 20, 50];

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for donating $${amount || "0"}!`);
  };

  return (
    <main>
      <Navbar />
      <PageTitle
        title={"Donation"}
        link={"donate"}
        subtitle={"Support our cause"}
      />
      <section className="bg-gray-100 py-16 px-6">
        <SectionTitle title="Get Involved" subtitle="Be part of the change" />

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            You are donating for the project:
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8 font-semibold">
            Helping Children in Nigeria
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Donation Amount */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                How much would you like to donate?
              </h3>
              <div className="flex gap-4 mb-4 flex-wrap">
                {presetAmounts.map((value) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => handleAmountClick(value)}
                    className={`px-6 py-3 rounded-full border-2 font-semibold transition ${
                      amount === value
                        ? "bg-blue-900 text-white border-blue-900"
                        : "border-gray-300 hover:border-blue-900"
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Your amount here (USD)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                required
              />
            </div>

            {/* Personal Info */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your first name"
                  className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Your last name"
                  className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  required
                />
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Additional Information
              </h3>
              <textarea
                placeholder="Additional information"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
              ></textarea>
            </div>

            {/* Payment Option */}
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">We accept PayPal</p>
              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
              >
                Donate Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Donation;
