import { render, renderHook, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoadingPatients from ".";
import {
  PatientProvider,
  usePatientContext,
} from "../../contexts/usePatientsContext";

describe("LoadingPatients", () => {
  it("render the component", () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.handleChangePatientQuantity(200);
    });

    render(<LoadingPatients />, { wrapper });
    screen.debug();
  });
});
