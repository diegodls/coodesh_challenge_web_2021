import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { PatientModalProvider, usePatientModal } from "./useModalPatients";
import {
  mockFirstPatient,
  mockSecondPatient,
  TIMEOUT_INTERVAL_ACTION,
  TIMEOUT_INTERVAL_WAIT,
} from "../utils/constants";

describe("useModalPatients", () => {
  afterEach(cleanup);

  it("should be able to set a patient", async () => {
    const wrapper = ({ children }: any) => (
      <PatientModalProvider>{children}</PatientModalProvider>
    );
    const { result } = renderHook(() => usePatientModal(), { wrapper });

    act(() => {
      result.current.setPatient(mockFirstPatient);
    });

    await waitFor(
      () => {
        expect(result.current.currentModalPatient?.name.first).toBe(
          mockFirstPatient.name.first
        );
        expect(result.current.currentModalPatient?.name.last).toBe(
          mockFirstPatient.name.last
        );
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should be able to change patients", async () => {
    const wrapper = ({ children }: any) => (
      <PatientModalProvider>{children}</PatientModalProvider>
    );
    const { result } = renderHook(() => usePatientModal(), { wrapper });

    act(() => {
      result.current.setPatient(mockFirstPatient);
    });

    setTimeout(() => {
      act(() => {
        result.current.setPatient(mockSecondPatient);
      });
    }, TIMEOUT_INTERVAL_ACTION);

    await waitFor(
      () => {
        expect(result.current.currentModalPatient?.name.first).not.toBe(
          mockFirstPatient.name.first
        );
        expect(result.current.currentModalPatient?.name.last).not.toBe(
          mockFirstPatient.name.last
        );
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should open modal after set a patient", async () => {
    const wrapper = ({ children }: any) => (
      <PatientModalProvider>{children}</PatientModalProvider>
    );
    const { result } = renderHook(() => usePatientModal(), { wrapper });

    act(() => {
      result.current.setPatient(mockFirstPatient);
    });

    await waitFor(
      () => {
        expect(result.current.openPatientModal).toBeTruthy();
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should reset after close modal", async () => {
    const wrapper = ({ children }: any) => (
      <PatientModalProvider>{children}</PatientModalProvider>
    );
    const { result } = renderHook(() => usePatientModal(), { wrapper });

    act(() => {
      result.current.handleClose();
    });

    await waitFor(
      () => {
        expect(result.current.openPatientModal).toBeFalsy();
        expect(result.current.currentModalPatient).toBe(null);
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });
});
