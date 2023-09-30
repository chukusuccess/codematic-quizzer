import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Button } from "./Button";

export const Category = ({ category }) => {
  // state declaration
  const [state, setState] = useState({
    hasSelected: false,
    id: category?.id,
    difficulty: "",
    amount: 1,
  });

  // useNavigate hook
  const navigate = useNavigate();

  // button click event handler
  const handleClick = (diff) => {
    setState((prevState) => ({
      ...prevState,
      hasSelected: true,
      difficulty: diff,
    }));
  };

  // click event within modal handler
  const handleModalClick = (value, amount) => {
    if (value === "close")
      setState((prevState) => ({
        ...prevState,
        hasSelected: false,
        amount: 1,
      }));

    // we pass our options through Navigate Options
    if (value !== "close" && !Number.isNaN(amount)) {
      navigate("/quiz", {
        state: {
          amount: amount,
          category: state.id,
          difficulty: state.difficulty,
        },
      });
    }
  };

  return (
    <div className="w-full h-24 sm:h-32 rounded-xl bg-codematicWhite shadow-2xl flex flex-col items-center justify-center sm:gap-3 px-2 sm:w-1/4 hover:border-4 border-teal-600">
      <p className="w-full text-center text-lg sm:text-2xl truncate font-semibold sm:font-bold">
        {category?.name}
      </p>
      <div className="w-full flex flex-row items-center justify-evenly gap-2">
        {["easy", "medium", "hard"].map((item, index) => {
          return (
            <Button
              key={index}
              text={item}
              textSize={"text-sm"}
              eventHandler={() => handleClick(item)}
              height={"h-10"}
            />
          );
        })}
      </div>
      {state.hasSelected && <Modal modalEventHandler={handleModalClick} />}
    </div>
  );
};
