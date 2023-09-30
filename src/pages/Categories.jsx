import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../components/Category";
import { Button } from "../components/Button";
import { Loading } from "./Loading";
import { CategoryService } from "../services/category.service";
import { Error } from "./Error";

// exporting unit test-id for Jest test run
export const SELECT_CATEGORY_TEST_ID = "SPLASH_TEST_ID";

export const Categories = () => {
  const [state, setState] = useState({
    loading: true,
    data: [],
    error: "",
  });

  // useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const response = await CategoryService.getCategories();
        setState((prevState) => ({
          ...prevState,
          data: response.trivia_categories,
        }));
        setState((prevState) => ({ ...prevState, loading: false }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, loading: false }));
        if (error.response) {
          // server responding with a non-2xx status code
          console.error("Server Error:", error.response.data);
          console.error("Status Code:", error.response.status);
          setState((prevState) => ({
            ...prevState,
            error:
              "Oops! Failed to get Quiz categories. Please try again later!",
          }));
        } else if (error.request) {
          // the request was made but no response
          console.error("Request Error:", error.request);
          setState((prevState) => ({
            ...prevState,
            error: "Oops! It seems the server is down. Please try again later!",
          }));
        } else {
          // request didn't go at all
          console.error("Error:", error.message);
          setState((prevState) => ({
            ...prevState,
            error: "Oops! Connection error",
          }));
        }
      }
    };

    getData();
  }, []);

  // button click event handler
  const handleClick = () => {
    navigate("/");
  };

  // render loading screen during API call
  if (state.loading === true) {
    return <Loading />;
  }

  // render error screen if error
  if (state.error.length > 1) {
    return <Error message={state.error} />;
  }

  // component (select category page)
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <div className="text-xl sm:text-4xl font-semibold sm:font-bold fixed top-0 w-full left-0 h-28 backdrop-blur-md flex flex-col items-center justify-center">
        <h1 data-testid={SELECT_CATEGORY_TEST_ID}>Select a category.</h1>
        <p className="text-teal-600">
          Each category offers 3 levels of difficulty.
        </p>
      </div>
      <div className="py-32 sm:py-40 w-full flex flex-col gap-5 px-6 lg:px-12 md:px-6 sm:flex-row sm:flex-wrap items-center justify-center">
        {state.data.map((item, _index) => {
          return <Category key={item.id} category={item} />;
        })}
      </div>
      <div className="fixed bottom-0 w-full left-0 flex flex-col items-center justify-center p-6 backdrop-blur-md">
        <div className="w-full sm:w-1/3">
          <Button
            text={"home"}
            height={"h-16"}
            textSize={"text-2xl"}
            eventHandler={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
