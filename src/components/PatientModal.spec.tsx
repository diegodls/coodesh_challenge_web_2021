import {
  render as RTLRender,
  screen as RTLScreen,
} from "@testing-library/react";
import "intersection-observer";

import PatientModal from "./PatientModal";
import * as ModalContext from "../contexts/useModalPatients";
import { PatientFullData } from "../interfaces/IPatient";
import { patientListOnePageMock } from "../test/patientListMock";

describe("Testing PatientModal.tsx", () => {
  it("shouldn't display modal when no patient is set", async () => {
    const currentModalPatient: PatientFullData | null = null;

    const openPatientModal = true;
    const setPatient = jest.fn();
    const handleClose = jest.fn();
    const setOpenPatientModal = jest.fn();

    const contextValues = {
      currentModalPatient,
      openPatientModal,
      setPatient,
      handleClose,
      setOpenPatientModal,
    };

    jest
      .spyOn(ModalContext, "usePatientModal")
      .mockImplementation(() => contextValues);

    RTLRender(<PatientModal />);

    const patientName = RTLScreen.queryByText(/Cecilia Wojcik/i);

    expect(patientName).not.toBeInTheDocument();
  });

  it("should display modal", async () => {
    const currentModalPatient: PatientFullData =
      patientListOnePageMock.results[0];

    const openPatientModal = true;
    const setPatient = jest.fn();
    const handleClose = jest.fn();
    const setOpenPatientModal = jest.fn();

    const contextValues = {
      currentModalPatient,
      openPatientModal,
      setPatient,
      handleClose,
      setOpenPatientModal,
    };

    jest
      .spyOn(ModalContext, "usePatientModal")
      .mockImplementation(() => contextValues);

    RTLRender(<PatientModal />);

    const patientName = await RTLScreen.findByText(/Cecilia Wojcik/i);

    expect(patientName).toBeInTheDocument();
  });
});
