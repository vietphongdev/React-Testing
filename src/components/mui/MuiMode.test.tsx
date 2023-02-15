import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("Mui Mode", () => {
  test("renders text correctly", () => {
    customRender(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });

  // test("renders text in white color for dark mode", () => {
  //   render(<MuiMode />);
  //   const headingElement = screen.getByRole("heading");
  //   expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
  // });
});
