import { render, screen } from "../test/testing-library-utils";
import { ErrorOnFetchPatients } from "./ErrorOnFetchPatients";

describe("Testing LoadingPatients.tsx", () => {
  it("should display error message", async () => {
    render(<ErrorOnFetchPatients />);

    const errorMessage = screen.getByText(
      "Erro ao carregar a lista de pacientes."
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
