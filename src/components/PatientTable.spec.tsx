import { render, screen, waitFor } from "../test/testing-library-utils";
import { PatientTable } from "./PatientTable";

describe("Testing PatientTable.tsx", () => {
  it("should render a table", async () => {
    render(<PatientTable />);
    const patientTable: HTMLElement = await screen.findByRole("table", {
      name: /Tabela de pacientes/i,
    });

    expect(patientTable).toBeInTheDocument();
  });

  it("should a list of patients", async () => {
    render(<PatientTable />);
    const name = await screen.findByText(/Cecilia Wojcik/i);
    expect(name).toBeInTheDocument();
  });

  it("should render row of a table", async () => {
    render(<PatientTable />);

    const row = (
      await screen.findByRole("cell", { name: /Cecilia Wojcik/i })
    ).closest("tr");

    expect(row).toBeInTheDocument();
    expect(row).toHaveTextContent("04/12/1994");
    expect(row).toHaveTextContent(/Detalhes/i);
  });

  it("should render rows of a table", async () => {
    render(<PatientTable />);

    const row = await screen.findAllByText(/Detalhes/i);
    expect(row).toHaveLength(10);

    waitFor(() => {
      expect(screen.findAllByRole("row")).toHaveLength(10);
    });

    let row2: HTMLElement[];

    row2 = await screen.findAllByRole("row");

    waitFor(() => {
      expect(row2).toHaveLength(10);
    });
  });
});
