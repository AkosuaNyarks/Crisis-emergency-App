import { render, screen } from "@testing-library/react";
import App from "./App";
it("renders the app", () => {
  render(<App />);
  const found = screen.queryByText(/vite/i) || screen.queryByText(/padding test/i);
  expect(found).toBeTruthy();
});
