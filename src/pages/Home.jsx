import React from "react";
import { Splash } from "../components/Splash-Animation/Splash";
import { Onboarding } from "../components/Splash-Animation/Onboarding";

// exporting unit test-id for Jest Testing Library
export const HOME_TEST_ID = "HOME_TEST_ID";

// component (Home page)
export const Home = () => {
  return (
    <div
      data-testid={HOME_TEST_ID}
      className="flex flex-col items-center justify-center w-screen h-screen"
    >
      {/* splash screen */}
      <Splash />

      {/* welcome / onboarding screen */}
      <Onboarding />
    </div>
  );
};
