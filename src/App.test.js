import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom"

test("header contains text", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveClass("test");
});