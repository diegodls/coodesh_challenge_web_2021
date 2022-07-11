import { render, screen } from "@testing-library/react";
import NameSearchOption from "./nameSearchOption";

describe("Testing NameSearchOption.tsx", () => {
  it("should render a text input", () => {
    render(<NameSearchOption />);
    const nameInput = screen.getByPlaceholderText(/Pesquisar paciente/i);
    expect(nameInput).toBeInTheDocument();
  });
});
