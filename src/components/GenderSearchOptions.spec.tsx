import { render, screen, waitFor } from "../test/testing-library-utils";
import userEvent from "@testing-library/user-event";
import GenderSearchOptions from "./genderSearchOptions";

describe("Testing GenderSearchOptions.tsx", () => {
  it("should show gender filters", () => {
    render(<GenderSearchOptions />);

    const genderSearchLabel = screen.getByText(/filtro por gênero/i);
    expect(genderSearchLabel).toBeInTheDocument();

    const femaleCheckbox = screen.getByRole("checkbox", { name: /feminino/i });
    expect(femaleCheckbox).toBeInTheDocument();

    const maleCheckbox = screen.getByRole("checkbox", { name: /masculino/i });
    expect(maleCheckbox).toBeInTheDocument();
  });

  it("should be able to check female checkbox", () => {
    render(<GenderSearchOptions />);

    const femaleCheckbox = screen.getByRole("checkbox", { name: /feminino/i });

    expect(femaleCheckbox).not.toBeChecked();

    userEvent.click(femaleCheckbox);

    waitFor(() => {
      expect(femaleCheckbox).toBeChecked();
    });
  });

  it("should be able to check male checkbox", () => {
    render(<GenderSearchOptions />);

    const maleCheckbox = screen.getByRole("checkbox", { name: /masculino/i });

    expect(maleCheckbox).not.toBeChecked();

    userEvent.click(maleCheckbox);

    waitFor(() => {
      expect(maleCheckbox).toBeChecked();
    });
  });

  it("should uncheck male checkbox when check female checkbox", () => {
    render(<GenderSearchOptions />);

    const maleCheckbox = screen.getByRole("checkbox", { name: /masculino/i });

    expect(maleCheckbox).not.toBeChecked();

    userEvent.click(maleCheckbox);

    waitFor(() => {
      expect(maleCheckbox).toBeChecked();
    });

    const femaleCheckbox = screen.getByRole("checkbox", { name: /feminino/i });

    expect(femaleCheckbox).not.toBeChecked();

    userEvent.click(femaleCheckbox);

    waitFor(() => {
      expect(femaleCheckbox).toBeChecked();
    });

    waitFor(() => {
      expect(maleCheckbox).not.toBeChecked();
    });
  });

  it("should uncheck female checkbox when check male checkbox", () => {
    render(<GenderSearchOptions />);

    const maleCheckbox = screen.getByRole("checkbox", { name: /masculino/i });

    expect(maleCheckbox).not.toBeChecked();

    userEvent.click(maleCheckbox);

    waitFor(() => {
      expect(maleCheckbox).toBeChecked();
    });

    const femaleCheckbox = screen.getByRole("checkbox", { name: /feminino/i });

    expect(femaleCheckbox).not.toBeChecked();

    userEvent.click(femaleCheckbox);

    waitFor(() => {
      expect(maleCheckbox).toBeChecked();
    });

    waitFor(() => {
      expect(femaleCheckbox).not.toBeChecked();
    });
  });
});
