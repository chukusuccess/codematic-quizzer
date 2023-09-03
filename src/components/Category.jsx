import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Button } from "./Button";

export const Category = ({ category }) => {
  // state declaration
  const [hasSelected, setHasSelected] = useState(false);

  // useNavigate hook
  const navigate = useNavigate();

  // button click event handler
  const handleClick = (item) => {
    console.log(item);
    setHasSelected(true);
  };

  // click event within modal handler
  const handleModalClick = (str) => {
    if (str === "close") setHasSelected(false);
    if (str === "start") navigate("/quiz");
  };

  return (
    <div className="w-full h-24 sm:h-32 rounded-xl bg-codematicWhite shadow-lg flex flex-col items-center justify-center sm:gap-3 px-1 sm:w-1/4 hover:border-2 border-orange-600">
      <p className="text-lg font-semibold">{category?.name}</p>
      <div className="w-full flex flex-row items-center justify-evenly gap-2">
        {["Easy", "Medium", "Hard"].map((item, index) => {
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
      {hasSelected && <Modal modalEventHandler={handleModalClick} />}
    </div>
  );
};
