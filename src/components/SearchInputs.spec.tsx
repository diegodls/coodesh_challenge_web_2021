import { fireEvent, render, screen } from "../test/testing-library-utils";
import SearchInputs from "./SearchInputs";

describe("Testing SearchInputs component", () => {
  it("should show name search by name input", () => {
    render(<SearchInputs />);
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      /Pesquisar paciente.../i
    );

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
