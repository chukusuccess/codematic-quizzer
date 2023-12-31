import React, { useState } from "react";
import { Button } from "./Button";

export const Modal = ({ modalEventHandler }) => {
  // state declaration
  const [amount, setAmount] = useState();

  // get user selected amount from modal
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const dismissModal = (e) => {
    if (!e.target.closest(".modal")) modalEventHandler("close", null);
  };

  // component (modal)
  return (
    <div
      className="fixed z-50 top-0 left-0 w-screen h-screen bg-[#00000080] flex flex-col items-center justify-center p-6 lg:p-12 md:p-9 backdrop-blur-md"
      onClick={dismissModal}
    >
      <div className="relative w-full lg:w-1/3 md:w-1/2 px-10 py-12 bg-codematicWhite rounded-2xl flex flex-col items-center justify-center gap-2 font-semibold text-2xl sm:font-bold sm:text-3xl modal">
        <h1
          onClick={() => modalEventHandler("close", amount)}
          className="absolute top-5 right-5 cursor-pointer"
        >
          ✕
        </h1>
        <h1>Ready?</h1>
        <p className="font-semibold">Choose a question limit for your quiz</p>
        <form className="w-full mt-2 text-2xl">
          <select
            onChange={handleAmount}
            className="w-full h-10 rounded-lg mb-6 capitalize font-semibold"
          >
            {[
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "ten",
            ].map((item, index) => {
              return (
                <option
                  className="capitalize"
                  key={index + 1}
                  value={index + 1}
                >
                  {item === "one"
                    ? `${item} question (minimum)`
                    : item === "ten"
                    ? `${item} questions (maximum)`
                    : `${item} questions`}
                </option>
              );
            })}
          </select>
        </form>
        <div className="w-full">
          <Button
            eventHandler={() => modalEventHandler("start", amount)}
            text="Start Quiz"
          />
        </div>
      </div>
    </div>
  );
};
