import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { PatientFullData } from "../interfaces/IPatient";

interface PatientModalProviderProps {
  children: ReactNode;
}

interface PatientModalContextData {
  currentModalPatient: PatientFullData | null;
  openPatientModal: boolean;
  setPatient: (patient: PatientFullData | null) => void;
  handleClose: () => void;
  setOpenPatientModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PatientModalContext = createContext({} as PatientModalContextData);

function PatientModalProvider(props: PatientModalProviderProps) {
  const [currentModalPatient, setCurrentModalPatient] =
    useState<PatientFullData | null>(null);

  const [openPatientModal, setOpenPatientModal] = useState<boolean>(false);

  function setPatient(patient: PatientFullData | null): void {
    if (patient && patient.login.uuid !== currentModalPatient?.login.uuid) {
      setCurrentModalPatient(patient);
    }
  }

  function handleOpen(): void {
    setOpenPatientModal(true);
  }

  function handleClose(): void {
    setOpenPatientModal(false);
    setCurrentModalPatient(null);
  }

  useEffect(() => {
    if (currentModalPatient) {
      handleOpen();
    }
  }, [currentModalPatient]);

  return (
    <>
      <PatientModalContext.Provider
        value={{
          currentModalPatient,
          openPatientModal,
          setOpenPatientModal,
          setPatient,
          handleClose,
        }}
      >
        {props.children}
      </PatientModalContext.Provider>
    </>
  );
}

function usePatientModal() {
  const context = useContext(PatientModalContext);

  if (!context) {
    throw new Error(
      "Erro ao usar contexto do Modal de Paciente(PatientModalContext)"
    );
  }

  return context;
}

export { PatientModalContext, PatientModalProvider, usePatientModal };
