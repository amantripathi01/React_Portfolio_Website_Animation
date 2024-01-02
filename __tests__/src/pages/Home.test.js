// Test generated by RoostGPT for test ReactUnitTesting using AI Type Open AI and AI Model gpt-4-1106-preview

// Import React testing utilities
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../../../src/pages/Home"; // Adjust the path based on your project structure

// Mock framer-motion to avoid animation-related issues during testing
jest.mock("framer-motion", () => ({
  motion: ({ children, ...rest }) => <div {...rest}>{children}</div>,
}));

describe("Home Component", () => {
  test("renders Home component with animated name and description", () => {
    render(<Home />);

    // Check if the animated name element is present
    const nameElement = screen.getByText("Dipesh Malvia");
    expect(nameElement).toBeInTheDocument();

    // Check if the animated description element is present
    const descElement = screen.getByText(
      "FullStack Developer and Youtube Teacher based in Poland"
    );
    expect(descElement).toBeInTheDocument();

    // Check if the animated name and description have the correct class
    expect(nameElement).toHaveClass("name");
    expect(descElement).toHaveClass("desc");

    // You can add more assertions based on your component's features and behavior
  });
});
