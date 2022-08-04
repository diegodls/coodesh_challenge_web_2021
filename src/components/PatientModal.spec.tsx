import {
  render as RTLRender,
  screen as RTLScreen,
} from "@testing-library/react";
import "intersection-observer";

import { PatientModal } from "./PatientModal";
import * as ModalContext from "../contexts/useModalPatients";
import { PatientFullData } from "../interfaces/IPatient";
import { patientListOnePageMock } from "../test/patientMocks";

const femalePatient: PatientFullData = patientListOnePageMock.results[0];
const malePatient: PatientFullData = patientListOnePageMock.results[1];

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

  it("should display modal when female patient is set", async () => {
    const currentModalPatient: PatientFullData = femalePatient;

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

    const emailField = await RTLScreen.findByText(/Email:/i);
    expect(emailField).toBeInTheDocument();

    const patientEmail = await RTLScreen.findByText(
      /cecilia.wojcik@example.com/i
    );
    expect(patientEmail).toBeInTheDocument();

    const patientGender = await RTLScreen.findByText(/feminino/i);
    expect(patientGender).toBeInTheDocument();
  });

  it("should display modal when male patient is set", async () => {
    const currentModalPatient: PatientFullData = malePatient;

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

    const patientName = await RTLScreen.findByText(/Daniel Zhang/i);
    expect(patientName).toBeInTheDocument();

    const emailField = await RTLScreen.findByText(/Email:/i);
    expect(emailField).toBeInTheDocument();

    const patientEmail = await RTLScreen.findByText(
      /daniel.zhang@example.com/i
    );
    expect(patientEmail).toBeInTheDocument();

    const patientGender = await RTLScreen.findByText(/masculino/i);
    expect(patientGender).toBeInTheDocument();
  });

  it("should display error message when patient is not set", async () => {
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

    const errorMessage = await RTLScreen.findByText(
      /Erro ao carregar os dados do paciente!/i
    );
    expect(errorMessage).toBeInTheDocument();

    const emailField = RTLScreen.queryByText(/Email:/i);
    expect(emailField).not.toBeInTheDocument();
  });
});
