import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Category } from "../components/Category";

// mocking useNavigate Hook.
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// testing the Button is in the DOM
describe("Category Cards", () => {
  test("renders Button with category difficulty text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Category />
      </BrowserRouter>
    );
    const buttonElement = getByText(/Medium/i);
    expect(buttonElement).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeDefined();
  });
});
