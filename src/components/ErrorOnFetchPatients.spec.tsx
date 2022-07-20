import {
  render as RTLRender,
  screen as RTLScreen,
} from "@testing-library/react";
import { ErrorOnFetchPatients } from "./ErrorOnFetchPatients";
import * as PatientContext from "../contexts/usePatientsContext";
import "intersection-observer";

describe("Testing LoadingPatients.tsx", () => {
  it("should display error message", async () => {
    const contextValues: PatientContext.PatientContextData = {
      errorLoadingPatients: "ErrorTest",
      patientsList: null,
      filteredPatientsList: null,
      loadingPatients: false,
      nameFilter: "",
      genderFilter: null,
      natFilter: [],
      currentFilters: "",
      lastFilters: "",
      order: "asc",
      orderBy: "name",
      loadMorePatients: jest.fn(),
      defineTypeOfSorting: jest.fn(),
      handleChangeGenderFilter: jest.fn(),
      setNatFilter: jest.fn(),
      handleChangeNameFilter: jest.fn(),
      handleChangePatientQuantity: jest.fn(),
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => contextValues);

    RTLRender(<ErrorOnFetchPatients />);

    const errorMessage = RTLScreen.getByText(
      "Erro ao carregar a lista de pacientes."
    );

    expect(errorMessage).toBeInTheDocument();

    const errorType = RTLScreen.getByText(/Erro: ErrorTest/i);

    expect(errorType).toBeInTheDocument();
  });
});
