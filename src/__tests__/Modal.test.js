import { render } from "@testing-library/react";
import { Modal } from "../components/Modal";

// testing the Modal is in the DOM
test("renders Modal with text", () => {
  const { getByText } = render(<Modal />);
  const pElement = getByText(/Choose a question limit for your quiz/i);
  expect(pElement).toBeInTheDocument();
});
