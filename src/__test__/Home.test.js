import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Home, HOME_TEST_ID } from "../pages/Home";

// testing the Homepage is in the DOM
describe("Home page", () => {
  it("renders Home page", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const Container = screen.getByTestId(HOME_TEST_ID);
    expect(Container).toBeInTheDocument();
  });
});
