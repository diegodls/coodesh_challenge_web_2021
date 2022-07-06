import { render, screen, waitFor } from "../test/testing-library-utils";
import userEvent from "@testing-library/user-event";

import SearchInputs from "./SearchInputs";

describe("Testing SearchInputs component", () => {
  it("should render name search by name input", async () => {
    render(<SearchInputs />);
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      /Pesquisar paciente.../i
    );

    expect(searchInput).toBeInTheDocument();

    userEvent.clear(searchInput);
    userEvent.type(searchInput, "test");

    waitFor(() => {
      expect(searchInput.value).toBe("test");
    });
  });

  it("should filters options starts hidden", () => {
    render(<SearchInputs />);

    const femaleCheckbox: HTMLInputElement | null = screen.queryByRole(
      "checkbox",
      {
        name: "Feminino",
      }
    );

    expect(femaleCheckbox).not.toBeInTheDocument();

    const maleCheckbox: HTMLInputElement | null = screen.queryByRole(
      "checkbox",
      {
        name: "Feminino",
      }
    );

    expect(maleCheckbox).not.toBeInTheDocument();
  });

  it("should shown filters options when click on shown button", async () => {
    render(<SearchInputs />);

    const showFiltersButton = screen.getByRole("button", {
      name: /show-filters/i,
    });

    expect(showFiltersButton).toBeInTheDocument();

    userEvent.click(showFiltersButton);

    const femaleCheckbox = await screen.findByRole("checkbox", {
      name: /feminino/i,
    });

    expect(femaleCheckbox).toBeInTheDocument();
  });
});
