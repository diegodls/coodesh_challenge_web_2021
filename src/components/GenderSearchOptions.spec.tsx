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

  it("should be able to check female/uncheck checkbox", async () => {
    render(<GenderSearchOptions />);

    const femaleCheckbox = screen.getByRole("checkbox", { name: /feminino/i });

    expect(femaleCheckbox).not.toBeChecked();

    await userEvent.click(femaleCheckbox);

    expect(femaleCheckbox).toBeChecked();

    await userEvent.click(femaleCheckbox);

    expect(femaleCheckbox).not.toBeChecked();
  });

  it("should be able to check/uncheck male checkbox", async () => {
    render(<GenderSearchOptions />);

    const maleCheckbox = screen.getByRole("checkbox", { name: /masculino/i });

    expect(maleCheckbox).not.toBeChecked();

    await userEvent.click(maleCheckbox);

    expect(maleCheckbox).toBeChecked();

    await userEvent.click(maleCheckbox);

    expect(maleCheckbox).not.toBeChecked();
  });

  it("should uncheck male checkbox when check female checkbox", async () => {
    render(<GenderSearchOptions />);

    const maleCheckbox = screen.getByRole("checkbox", { name: /masculino/i });

    expect(maleCheckbox).not.toBeChecked();

    await userEvent.click(maleCheckbox);

    expect(maleCheckbox).toBeChecked();

    const femaleCheckbox = screen.getByRole("checkbox", { name: /feminino/i });

    expect(femaleCheckbox).not.toBeChecked();

    await userEvent.click(femaleCheckbox);

    expect(femaleCheckbox).toBeChecked();

    expect(maleCheckbox).not.toBeChecked();
  });

  it("should uncheck female checkbox when check male checkbox", async () => {
    render(<GenderSearchOptions />);

    const femaleCheckbox = screen.getByRole("checkbox", { name: /feminino/i });

    expect(femaleCheckbox).not.toBeChecked();

    await userEvent.click(femaleCheckbox);

    expect(femaleCheckbox).toBeChecked();

    const maleCheckbox = screen.getByRole("checkbox", { name: /masculino/i });

    expect(maleCheckbox).not.toBeChecked();

    await userEvent.click(maleCheckbox);

    expect(maleCheckbox).toBeChecked();

    expect(femaleCheckbox).not.toBeChecked();
  });
});
