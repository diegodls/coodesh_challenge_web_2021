import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Testing Header,tsx", () => {
  it("should render the header title", () => {
    render(<Header />);

    const title = screen.getByText(/Pharma Inc./i);

    expect(title).toBeInTheDocument();
  });
});
