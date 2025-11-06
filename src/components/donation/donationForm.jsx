"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
const DonationForm = () => {
  const [state, handleSubmit] = useForm("xrbonaoq");
  const [amount, setAmount] = useState("");
  const presetAmounts = [10, 20, 50];

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  if (state.succeeded) {
    return (
      <p className="text-center  text-4xl">Thank You for getting involved!</p>
    );
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Thank you for donating $${amount || "0"}!`);
  // };

  return (
    <div>
      <div className="flex max-w-7xl px-4 flex-col md:flex-row m-auto items-center ">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            You are donating for the project
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8 font-semibold">
            Helping Children in Nigeria
          </p>
        </div>

        <div className="w-full flex-1">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* Donation Amount */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Please Make a pledge and we will get in touch with you
              </h3>
              {/* <div className="flex gap-4 mb-4 flex-wrap">
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
              </div> */}

              <div>
                <input
                  type="number"
                  name="amount"
                  placeholder="Your amount here (NGN)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                  required
                />
                <ValidationError
                  prefix="Amount"
                  field="amount"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Your first name"
                    className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                    required
                  />
                  <ValidationError
                    prefix="First"
                    field="first_name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                    required
                    name="last_name"
                  />
                  <ValidationError
                    prefix="Last_name"
                    field="last_name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone"
                    className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                    required
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                    required
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Additional Information
              </h3>
              <textarea
                placeholder="Additional information"
                name="message"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Payment Option */}
            <div className="text-center mt-8">
              {/* <p className="text-gray-600 mb-4">We accept PayPal</p> */}
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-yellow-400 text-blue-900 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
              >
                Donate Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
