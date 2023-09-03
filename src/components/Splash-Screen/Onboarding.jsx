import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

// exporting unit test-id for Jest test run
export const HERO_TEST_ID = "HERO_TEST_ID";
export const SUBTEXT_TEST_ID = "SUBTEXT_TEST_ID";
export const BUTTON_TEST_ID = "BUTTON_TEST_ID";

export const Onboarding = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quiz-category");
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-10 sm:gap-20 items-center justify-center p-6 sm:p-12 text-2xl sm:text-4xl">
      <h1
        data-testid={HERO_TEST_ID}
        className="font-bold text-4xl sm:text-6xl text-center"
      >
        Welcome to Codematic Quizzer.
      </h1>
      <p data-testid={SUBTEXT_TEST_ID} className="text-center">
        Test your knowledge and have fun with our quizzer. <br />
        Spot an interesting category?
        <br /> Choose your difficulty level!
      </p>
      <div data-testid={BUTTON_TEST_ID} className="w-full sm:w-1/3">
        <Button
          eventHandler={handleClick}
          height={"h-16"}
          textSize={"text-2xl"}
          text={"Got it."}
        />
      </div>
    </div>
  );
};
