import userEvent from "@testing-library/user-event";
import { render, screen } from "../test/testing-library-utils";

import { NameSearchOption } from "./NameSearchOption";

describe("Testing NameSearchOption.tsx", () => {
  it("should render a text input", () => {
    render(<NameSearchOption />);
    const nameInput = screen.getByPlaceholderText(/Pesquisar paciente/i);
    expect(nameInput).toBeInTheDocument();
  });

  it("should be able to type in text input", async () => {
    render(<NameSearchOption />);
    const nameInput = screen.getByPlaceholderText(/Pesquisar paciente/i);

    expect(nameInput).toBeInTheDocument();

    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "test");

    expect(nameInput).toHaveValue("test");
  });
});
