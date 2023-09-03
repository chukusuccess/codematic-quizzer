import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Loading, LOADING_TEST_ID } from "../pages/Loading";

// testing the Loading screen can render
describe("Loading page", () => {
  it("renders the Loading page", async () => {
    render(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    );
    const Container = screen.getByTestId(LOADING_TEST_ID);
    expect(Container).toBeInTheDocument();
  });
});
