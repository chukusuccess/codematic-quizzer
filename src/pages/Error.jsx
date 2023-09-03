import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

// exporting unit test-id for Jest testing
export const ERROR_TEST_ID = "ERROR_TEST_ID";

export const Error = ({ message }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      data-testid={ERROR_TEST_ID}
      className="w-screen h-screen flex flex-col items-center justify-center px-6 sm:px-40"
    >
      <h1 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-center">
        {message}
      </h1>
      <br />
      <br />
      <div className="w-full sm:w-1/3">
        <Button eventHandler={handleClick} text="go back home" />
      </div>
    </div>
  );
};
