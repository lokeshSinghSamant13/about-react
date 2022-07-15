import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting componenet", () => {
  test("renders Hello World as a test", () => {
    // Arrange
    render(<Greeting />);

    //Act
    // ..nothing

    // Assert
    const helloworldElement = screen.getByText("Hello World!");
    expect(helloworldElement).toBeInTheDocument();
  });
});
