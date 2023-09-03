import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/Button";
import { CategoryService } from "../services/category.service";
import { pushToArray } from "../utilities/arrays.utils";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const Quiz = () => {
  // state declaration
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [isOpen, setIsOpen] = useState({
    restart: false,
    submit: false,
    totalScore: null,
  });
  const [state, setState] = useState({
    loading: false,
    error: "",
    data: [],
  });
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(state.data.length).fill(null)
  );

  const results = state.data; // set results variable to state data

  const navigate = useNavigate(); // useNavigate hook
  const location = useLocation(); // useLocation hook

  useEffect(() => {
    const getData = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const response = await CategoryService.getCategory(location.state);
        setState((prevState) => ({
          ...prevState,
          data: response.results,
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
              "Oops! Failed to get Quiz questions. Please try again later!",
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
    // eslint-disable-next-line
  }, []);

  // create currentQuestionAnswers array for creating dynamic options
  const currentQuestionAnswers = pushToArray(
    results[currentQuestionNumber]?.correct_answer,
    results[currentQuestionNumber]?.incorrect_answers || []
  );

  // Previous and Next button event handler
  const handlePrevNextButtons = (str) => {
    if (str === "previous_question") {
      if (currentQuestionNumber > 0) {
        setCurrentQuestionNumber(currentQuestionNumber - 1);
      }
    }
    if (str === "next_question") {
      if (currentQuestionNumber < results.length - 1) {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
      }
    }
  };

  // onChange event handler for updating selected answers array
  const handleAnswerChange = (selectedAnswer) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionNumber] = selectedAnswer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  // restart or submit button handlers
  const handleRestartSubmitButtons = (str) => {
    if (str === "Submit") {
      setIsOpen((prevState) => ({
        ...prevState,
        submit: true,
      }));
    }
    if (str === "Restart") {
      setIsOpen((prevState) => ({
        ...prevState,
        restart: true,
      }));
    }
  };

  // restart or submit confirmation handlers
  const handleRestartSubmitConfirmation = (str) => {
    if (str === "Submit") {
      let userScore = 0;
      results.forEach((question, index) => {
        if (question.correct_answer === selectedAnswers[index]) {
          userScore++;
        }
      });

      // Log user's score
      setIsOpen((prevState) => ({
        ...prevState,
        totalScore: userScore,
      }));
    }
    if (str === "Restart") window.location.reload();
  };

  // render loading screen during API call
  if (state.loading === true) {
    return <Loading />;
  }

  // render error screen if error
  if (state.error.length > 1) {
    return <Error message={state.error} />;
  }

  // component (Quiz page)
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start sm:justify-center p-6 gap-6 sm:px-60">
      <h1 className="text-4xl font-semibold capitalize text-center">
        {results[0]?.category} quiz
      </h1>
      <form className="w-full flex font-normal sm:font-bold flex-col items-start justify-start gap-6">
        <div className="w-full flex flex-col items-start justify-start text-2xl">
          <p
            dangerouslySetInnerHTML={{
              __html: results[currentQuestionNumber]?.question,
            }}
            className="pb-3"
          ></p>
          {currentQuestionAnswers?.map((item, index) => {
            const uniqueId = `answer_${index}_${currentQuestionNumber}`;
            return (
              <label
                key={index}
                onClick={() => handleAnswerChange(item)}
                className="py-3 border-y w-full"
                htmlFor={uniqueId}
              >
                <input
                  type={"radio"}
                  name={`answer_${currentQuestionNumber}`}
                  id={uniqueId}
                  checked={selectedAnswers[currentQuestionNumber] === item}
                  onChange={() => handleAnswerChange(item)}
                />{" "}
                <span dangerouslySetInnerHTML={{ __html: item }}></span>
              </label>
            );
          })}
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <span
            onClick={() => handlePrevNextButtons("previous_question")}
            className="material-symbols-outlined text-6xl cursor-pointer"
          >
            arrow_circle_left
          </span>
          <span className="text-6xl"> | </span>
          <span
            onClick={() => handlePrevNextButtons("next_question")}
            className="material-symbols-outlined text-6xl cursor-pointer"
          >
            arrow_circle_right
          </span>
        </div>
      </form>
      <div className="w-full flex flex-row items-center justify-center gap-2 fixed bottom-5 p-6 sm:bottom-10 sm:px-60">
        {["Restart", "Submit"].map((item, index) => {
          return (
            <Button
              eventHandler={() => handleRestartSubmitButtons(item)}
              key={index}
              text={item}
              height={"h-14"}
            />
          );
        })}
      </div>
      {isOpen.restart && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-[#00000080] flex flex-col items-center justify-center p-6 sm:p-12 backdrop-blur-md">
          <div className="relative w-full sm:w-1/3 px-12 py-12 bg-codematicWhite rounded-2xl flex flex-col items-center justify-center gap-2 text-xl">
            <h1
              onClick={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  submit: false,
                  restart: false,
                }))
              }
              className="absolute top-5 right-5 cursor-pointer"
            >
              ✕
            </h1>
            <h1 className="font-semibold text-2xl">
              Are you sure you want to restart this quiz?
            </h1>
            <div className="w-full">
              <Button
                eventHandler={() => handleRestartSubmitConfirmation("Restart")}
                text="confirm"
              />
            </div>
          </div>
        </div>
      )}{" "}
      {isOpen.submit && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-[#00000080] flex flex-col items-center justify-center p-6 sm:p-12 backdrop-blur-md">
          <div className="relative w-full sm:w-1/3 px-12 py-12 bg-codematicWhite rounded-2xl flex flex-col items-center justify-center gap-2 text-xl">
            {isOpen.totalScore !== null ? (
              ""
            ) : (
              <h1
                onClick={() => setIsOpen(() => (isOpen.submit = false))}
                className="absolute top-5 right-5 cursor-pointer"
              >
                ✕
              </h1>
            )}
            {isOpen.totalScore !== null ? (
              <h1 className="font-bold text-3xl sm:text-4xl pb-2 sm:pb-4">
                Your score is: {isOpen.totalScore}
              </h1>
            ) : (
              <h1 className="font-bold text-3xl sm:text-4xl pb-2 sm:pb-4">
                Are you sure you want to submit your answers?
              </h1>
            )}
            <div className="w-full">
              {isOpen.totalScore !== null ? (
                <Button
                  eventHandler={() => navigate("/quiz-category")}
                  text="categories"
                />
              ) : (
                <Button
                  eventHandler={() => handleRestartSubmitConfirmation("Submit")}
                  text="confirm"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
