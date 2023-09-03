import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Splash,
  SPLASH_TEST_ID,
  SPLASHTEXT_TEST_ID,
} from "../components/Splash-Animation/Splash";
import { SplashText } from "../components/Splash-Animation/SplashText";
import {
  Onboarding,
  BUTTON_TEST_ID,
  SUBTEXT_TEST_ID,
  HERO_TEST_ID,
} from "../components/Splash-Animation/Onboarding";

// mocking useNavigate Hook.
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// testing the Splash screen is in the DOM
describe("Splash Screen", () => {
  it("renders Splash Screen page", async () => {
    render(
      <BrowserRouter>
        <Splash />
      </BrowserRouter>
    );
    const SplashContainer = screen.getByTestId(SPLASH_TEST_ID);
    const SplashTextContainer = screen.getByTestId(SPLASHTEXT_TEST_ID);
    expect(SplashContainer).toBeInTheDocument();
    expect(SplashTextContainer).toBeInTheDocument();
  });

  test("renders Quizzer text", () => {
    const { getByText } = render(<SplashText />);
    const h1Element = getByText(/Quizzer/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("renders onboarding page", async () => {
    render(
      <BrowserRouter>
        <Onboarding />
      </BrowserRouter>
    );
    const heroElement = screen.getByTestId(HERO_TEST_ID);
    const subHeroElement = screen.getByTestId(SUBTEXT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);
    expect(heroElement).toBeInTheDocument();
    expect(subHeroElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeDefined();
  });

  test("Clicking the Got It button navigates to /quiz-category route", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Onboarding />
      </BrowserRouter>
    );
    const button = getByText(/Got it./i);
    fireEvent.click(button);
    expect(mockedUsedNavigate).toBeDefined();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/quiz-category");
  });
});
