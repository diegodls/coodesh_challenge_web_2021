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

  it("should be able to check/uncheck nationality filters", () => {
    render(<NationalitySearchOptions />);

    const natFilterLabel = screen.queryByText("Filtro por Nacionalidade");

    expect(natFilterLabel).toBeInTheDocument();

    const natFilterAllCheckboxes = screen.getAllByRole("checkbox");

    expect(natFilterAllCheckboxes.length).toBe(NAT_AMOUNT);

    for (let natCheckbox of natFilterAllCheckboxes) {
      userEvent.click(natCheckbox);
      waitFor(() => {
        expect(natCheckbox).toBeChecked();
      });
      userEvent.click(natCheckbox);
      waitFor(() => {
        expect(natCheckbox).not.toBeChecked();
      });
    }
  });

  it("should be able to check more than one option", () => {
    render(<NationalitySearchOptions />);

    const auCheckbox = screen.getByRole("checkbox", { name: /au/i });
    expect(auCheckbox).not.toBeChecked();
    userEvent.click(auCheckbox);
    waitFor(() => {
      expect(auCheckbox).toBeChecked();
    });

    const brCheckbox = screen.getByRole("checkbox", { name: /br/i });
    expect(brCheckbox).not.toBeChecked();
    userEvent.click(brCheckbox);
    waitFor(() => {
      expect(brCheckbox).toBeChecked();
    });
  });
});
