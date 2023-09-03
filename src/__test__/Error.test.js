import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Error, ERROR_TEST_ID } from "../pages/Error";

// mocking useNavigate Hook.
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// testing the Error screen can render
describe("Error page", () => {
  it("renders the Error page", async () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    const Container = screen.getByTestId(ERROR_TEST_ID);
    expect(Container).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeDefined();
  });

  // testing if the navigate button routes home
  test("Clicking the Go Back Home button navigates to /", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    const button = getByText(/Go Back Home/i);
    fireEvent.click(button);
    expect(mockedUsedNavigate).toBeDefined();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
