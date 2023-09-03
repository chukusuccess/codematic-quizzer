import React from "react";
import { Button } from "./Button";

export const Modal = ({ modalEventHandler }) => {
  // component (modal)
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-[#00000080] flex flex-col items-center justify-center p-6 sm:p-12 backdrop-blur-md">
      <div className="relative w-full sm:w-1/3 px-12 py-12 bg-codematicWhite rounded-2xl flex flex-col items-center justify-center gap-2 text-xl">
        <h1
          onClick={() => modalEventHandler("close")}
          className="absolute top-5 right-5 cursor-pointer"
        >
          ✕
        </h1>
        <h1 className="font-semibold text-2xl">Ready?</h1>
        <p>Choose a question limit for your quiz</p>
        <form className="w-full">
          <select className="w-full h-10 rounded-lg mb-6 capitalize">
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
            eventHandler={() => modalEventHandler("start")}
            text="Start Quiz"
          />
        </div>
      </div>
    </div>
  );
};
