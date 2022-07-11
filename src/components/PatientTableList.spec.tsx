import {
  findByText,
  render,
  screen,
  within,
} from "../test/testing-library-utils";
import PatientTableList from "./PatientTableList";

describe("Testing PatientTableList.tsx", () => {
  it("should render a table", async () => {
    render(<PatientTableList />);
    const patientTable = await screen.findByRole("table", {
      name: /Tabela de pacientes/i,
    });

    expect(patientTable).toBeInTheDocument();
    screen.debug();
  });

  it("should a list of patients", async () => {
    render(<PatientTableList />);
    const name = await screen.findByText(/Cecilia Wojcik/i);
    expect(name).toBeInTheDocument();
  });
});
