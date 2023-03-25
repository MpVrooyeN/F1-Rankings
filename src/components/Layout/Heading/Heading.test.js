import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Heading from "./Heading";

describe("<Heading />", () => {
  test("it should mount", () => {
    render(<Heading />);

    const heading = screen.getByTestId("Heading");

    expect(heading).toBeInTheDocument();
  });

  // test("renders heading prop", () => {
  //   // const heading = "My Heading";
  //   // const { getByTestId } = render(<Heading heading={heading} />);
  //   // const headingElement = getByTestId("Heading");

  //   const heading = "hello";

  //   render(<Heading heading={heading} />);

  //   const headingElement = screen.getByTestId("Heading");

  //   expect(headingElement.textContent).toBe(heading);
  // });

  // test("renders StandingsToggle component", () => {
  //   const { getByTestId } = render(<Heading />);
  //   const standingsToggleElement = getByTestId("StandingsToggle");
  //   expect(standingsToggleElement).toBeInTheDocument();
  // });
});
