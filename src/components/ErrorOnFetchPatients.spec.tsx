import {
  render as RTLRender,
  screen as RTLScreen,
} from "@testing-library/react";
import "intersection-observer";
import { ErrorOnFetchPatients } from "./ErrorOnFetchPatients";
import * as PatientContext from "../contexts/usePatientsContext";
import { patientContextMockValues } from "../test/patientMocks";

describe("Testing LoadingPatients.tsx", () => {
  it("should display error message", async () => {
    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      errorLoadingPatients: "ErrorTest",
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    RTLRender(<ErrorOnFetchPatients />);

    const errorMessage = RTLScreen.getByText(
      "Erro ao carregar a lista de pacientes."
    );

    expect(errorMessage).toBeInTheDocument();

    const errorType = RTLScreen.getByText(/Erro: ErrorTest/i);

    expect(errorType).toBeInTheDocument();
  });
});
