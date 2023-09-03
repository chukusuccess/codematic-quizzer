import React from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../components/Category";
import { Button } from "../components/Button";
import data from "../data/cats.json";

// exporting unit test-id for Jest test run
export const SELECT_CATEGORY_TEST_ID = "SPLASH_TEST_ID";

export const Categories = () => {
  // useNavigate hook
  const navigate = useNavigate();

  // destructuring triviacategories from data
  const { trivia_categories } = data;

  // button click event handler
  const handleClick = () => {
    navigate("/");
  };

  // component (select category page)
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <div className="text-xl sm:text-3xl font-semibold fixed top-0 w-full left-0 h-28 backdrop-blur-md flex flex-col items-center justify-center">
        <h1 data-testid={SELECT_CATEGORY_TEST_ID}>Select a category.</h1>
        <p className="text-orange-600">
          Each category offers 3 levels of difficulty.
        </p>
      </div>
      <div className="mt-32 w-full flex flex-col gap-5 p-6 sm:p-12 sm:flex-row sm:flex-wrap items-center justify-center">
        {trivia_categories.map((item, _index) => {
          return <Category key={item.id} category={item} />;
        })}
      </div>
      <div className="fixed bottom-0 w-full left-0 flex flex-col items-center justify-center p-6 backdrop-blur-md">
        <div className="w-full sm:w-1/3">
          <Button
            text={"Back"}
            height={"h-16"}
            textSize={"text-2xl"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
