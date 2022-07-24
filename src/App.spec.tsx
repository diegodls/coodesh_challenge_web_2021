import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("Pharma Inc. is on DOM", () => {
    const { getByText } = render(<App />);
    expect(getByText("Pharma Inc.")).toBeInTheDocument();
  });

  it("should have search by name input", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("searchByName")).toBeInTheDocument();
  });

  it("should be able to load more patients", () => {
    const { getByText } = render(<App />);
    const loadMoreButton = getByText("Carregar mais...");
    userEvent.click(loadMoreButton);
  });
});
