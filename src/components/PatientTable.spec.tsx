import { render, screen, waitFor } from "../test/testing-library-utils";
import userEvent from "@testing-library/user-event";

import { PatientTable } from "./PatientTable";

import * as PatientModalContext from "../contexts/useModalPatients";
import { patientListOnePageMock } from "../test/patientListMock";
import { API_PATIENT_QUANTITY } from "../utils/constants";

const setPatientMockFunc = jest.fn();
const mockContextValues: PatientModalContext.PatientModalContextData = {
  currentModalPatient: patientListOnePageMock.results[0],
  openPatientModal: true,
  setPatient: setPatientMockFunc,
  handleClose: jest.fn(),
  setOpenPatientModal: jest.fn(),
};

jest
  .spyOn(PatientModalContext, "usePatientModal")
  .mockImplementation(() => mockContextValues);

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
    expect(row).toHaveLength(API_PATIENT_QUANTITY);

    waitFor(() => {
      expect(screen.findAllByRole("row")).toHaveLength(API_PATIENT_QUANTITY);
    });

    let row2: HTMLElement[];

    row2 = await screen.findAllByRole("row");

    waitFor(() => {
      expect(row2).toHaveLength(API_PATIENT_QUANTITY);
    });
  });

  it("should render details button", async () => {
    render(<PatientTable />);

    const detailsButton = await screen.findAllByText(/Detalhes/i);
    expect(detailsButton).toHaveLength(API_PATIENT_QUANTITY);

    await userEvent.click(detailsButton[0]);

    expect(setPatientMockFunc).toHaveBeenCalled();
  });
});
