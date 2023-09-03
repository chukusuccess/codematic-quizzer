import React from "react";

/**
 * Re-usable button component. Takes in 4 props and returns a button with a custom height, text, and event handler.
 * @param {string} height - TailwindCSS height value e.g 'h-16'
 * @param {string} text - Button text e.g 'my button'
 * @param {string} textSize - TailwindCSS font size e.g 'text-2xl'
 * @param {function} eventHandler - event handler function e.g () => void || (params or event) => { // logic... }
 * @returns {React.JSX.Element} custom button element <button className="h-16" onClick={() => { // logic}}>my button</button>
 */

// reusable button component
export const Button = ({ height, text, eventHandler, textSize }) => {
  return (
    <button
      onClick={eventHandler}
      className={`w-full capitalize bg-black text-white rounded-full ${height} ${textSize} font-bold border-4 border-black active:bg-codematicWhite active:text-black hover:bg-codematicWhite hover:text-black`}
    >
      {text}
    </button>
  );
};

// default props for button if not provided
Button.defaultProps = {
  height: "h-16",
  text: "button",
  textSize: "text-2xl",
  eventHandler: () => console.log("click event"),
};
