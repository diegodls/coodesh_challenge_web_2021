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

  it("should filters options starts hidden", async () => {
    render(<SearchInputs />);

    const gendersFilterLabel = screen.queryByText("Filtro por Gênero");

    expect(gendersFilterLabel).not.toBeInTheDocument();

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

    const nationalityFilterLabel = screen.queryByText(
      "Filtro por Nacionalidade"
    );

    expect(nationalityFilterLabel).not.toBeInTheDocument();

    const auCheckbox = screen.queryByRole("checkbox", {
      name: /au/i,
    });

    expect(auCheckbox).not.toBeInTheDocument();
  });

  it("should shown gender filters options when click on show button", async () => {
    render(<SearchInputs />);

    const showFiltersButton = screen.getByRole("button", {
      name: /show-filters/i,
    });

    expect(showFiltersButton).toBeInTheDocument();

    userEvent.click(showFiltersButton);

    const genderFilterLabel = await screen.findByText(/Filtro por Gênero/i);

    expect(genderFilterLabel).toBeInTheDocument();

    const femaleCheckbox = await screen.findByRole("checkbox", {
      name: /feminino/i,
    });

    expect(femaleCheckbox).toBeInTheDocument();

    const maleCheckbox = await screen.findByRole("checkbox", {
      name: /masculino/i,
    });

    expect(maleCheckbox).toBeInTheDocument();
  });

  it("should be able to check/uncheck genders checkbox", async () => {
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

    expect(femaleCheckbox).not.toBeChecked();

    userEvent.click(femaleCheckbox);

    waitFor(() => {
      expect(femaleCheckbox).toBeChecked();
    });

    userEvent.click(femaleCheckbox);

    waitFor(() => {
      expect(femaleCheckbox).not.toBeChecked();
    });

    const maleCheckbox = await screen.findByRole("checkbox", {
      name: /feminino/i,
    });

    expect(maleCheckbox).toBeInTheDocument();

    expect(maleCheckbox).not.toBeChecked();

    userEvent.click(maleCheckbox);

    waitFor(() => {
      expect(maleCheckbox).toBeChecked();
    });

    userEvent.click(maleCheckbox);

    waitFor(() => {
      expect(maleCheckbox).not.toBeChecked();
    });
  });

  it("should show nationality filters when click on show button", async () => {
    render(<SearchInputs />);

    const showFiltersButton = screen.getByRole("button", {
      name: /show-filters/i,
    });

    expect(showFiltersButton).toBeInTheDocument();

    userEvent.click(showFiltersButton);

    const natFilterLabel = await screen.findByText(/Filtro por Nacionalidade/i);

    expect(natFilterLabel).toBeInTheDocument();

    const auCheckbox = await screen.findByRole("checkbox", {
      name: /au/i,
    });

    expect(auCheckbox).toBeInTheDocument();

    const brCheckbox = await screen.findByRole("checkbox", {
      name: /br/i,
    });

    expect(brCheckbox).toBeInTheDocument();
  });
});
