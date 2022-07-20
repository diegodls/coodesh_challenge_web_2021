import { render, screen, waitFor } from "../test/testing-library-utils";
import userEvent from "@testing-library/user-event";

import NationalitySearchOptions from "./NationalitySearchOptions";

const NAT_AMOUNT = 17;

describe("Testing NationalitySearchOptions component", () => {
  it("should nationality filters starts unchecked", () => {
    render(<NationalitySearchOptions />);

    const natFilterLabel = screen.queryByText("Filtro por Nacionalidade");

    expect(natFilterLabel).toBeInTheDocument();

    const natFilterAllCheckboxes = screen.getAllByRole("checkbox");

    expect(natFilterAllCheckboxes.length).toBe(NAT_AMOUNT);

    for (let natCheckbox of natFilterAllCheckboxes) {
      expect(natCheckbox).not.toBeChecked();
    }
  });

  it("should be able to check/uncheck nationality filters", async () => {
    render(<NationalitySearchOptions />);

    const natFilterLabel = screen.queryByText("Filtro por Nacionalidade");

    expect(natFilterLabel).toBeInTheDocument();

    const natFilterAllCheckboxes = screen.getAllByRole("checkbox");

    expect(natFilterAllCheckboxes.length).toBe(NAT_AMOUNT);

    for (let natCheckbox of natFilterAllCheckboxes) {
      await userEvent.click(natCheckbox);

      expect(natCheckbox).toBeChecked();

      await userEvent.click(natCheckbox);

      expect(natCheckbox).not.toBeChecked();
    }
  });

  it("should be able to check more than one option", async () => {
    render(<NationalitySearchOptions />);

    const auCheckbox = screen.getByRole("checkbox", { name: /au/i });

    expect(auCheckbox).not.toBeChecked();

    await userEvent.click(auCheckbox);

    expect(auCheckbox).toBeChecked();

    const brCheckbox = screen.getByRole("checkbox", { name: /br/i });

    expect(brCheckbox).not.toBeChecked();

    await userEvent.click(brCheckbox);

    expect(brCheckbox).toBeChecked();

    await userEvent.click(brCheckbox);

    expect(brCheckbox).not.toBeChecked();
  });
});
