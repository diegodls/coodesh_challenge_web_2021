import * as PatientContext from "../contexts/usePatientsContext";

import {
  patientContextMockValues,
  patientListOnePageMock,
} from "../test/patientMocks";
import { render, screen } from "../test/testing-library-utils";
import { PatientTableArea } from "./PatientTableArea";

describe("Testing PatientTableArea.tsx", () => {
  it("should display a table with patients", () => {
    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      filteredPatientsList: patientListOnePageMock.results,
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    render(<PatientTableArea />);

    const patientTable = screen.getByRole("table");

    expect(patientTable).toBeInTheDocument();
  });

  it("should display loading message", () => {
    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      loadingPatients: true,
      filteredPatientsList: [],
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    render(<PatientTableArea />);

    const loadingMessage = screen.getByText(/Carregando pacientes/i);

    expect(loadingMessage).toBeInTheDocument();
  });

  it("should display a error message for empty list", () => {
    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      loadingPatients: false,
      filteredPatientsList: [],
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    render(<PatientTableArea />);

    const emptyListErrorMessage = screen.getByText(
      /Não foi possível localizar o paciente/i
    );

    expect(emptyListErrorMessage).toBeInTheDocument();
  });

  it("should display a error message for fetch patients problem", () => {
    const fetchErrorMockMessage = "Fetch error";

    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      errorLoadingPatients: fetchErrorMockMessage,
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    render(<PatientTableArea />);

    const fetchErrorMessage = screen.getByText(
      /Erro ao carregar a lista de pacientes/i
    );

    expect(fetchErrorMessage).toBeInTheDocument();

    const fetchErrorTypeMessage = screen.getByText(
      `Erro: ${fetchErrorMockMessage}`
    );

    expect(fetchErrorTypeMessage).toBeInTheDocument();
  });
});
