import { render, screen } from "../test/testing-library-utils";
import { ErrorPatientNotFound } from "./ErrorPatientNotFound";

describe("Testing ErrorPatientNotFound.tsx", () => {
  it("should display error message", () => {
    render(<ErrorPatientNotFound />);

    const notFoundMessage = screen.getByText(
      "Não foi possível localizar o paciente."
    );

    expect(notFoundMessage).toBeInTheDocument();
  });
});
