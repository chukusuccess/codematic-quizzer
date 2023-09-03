import { render } from "@testing-library/react";
import { Button } from "../components/Button";

// testing the Button is in the DOM
test("renders Button with default button text", () => {
  const { getByText } = render(<Button />);
  const buttonElement = getByText(/button/i);
  expect(buttonElement).toBeInTheDocument();
});
