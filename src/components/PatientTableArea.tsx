import { ReactElement } from "react";

import { usePatientContext } from "../contexts/usePatientsContext";
import { ErrorOnFetchPatients } from "./ErrorOnFetchPatients";

import { LoadingFetchPatients } from "./LoadingFetchPatients";
import { PatientTable } from "./PatientTable";
import { ErrorPatientNotFound } from "./ErrorPatientNotFound";

export function PatientTableArea() {
  const { filteredPatientsList, loadingPatients, errorLoadingPatients } =
    usePatientContext();

  let component: ReactElement = <LoadingFetchPatients />;

  if (!loadingPatients && errorLoadingPatients) {
    component = <ErrorOnFetchPatients />;
  }

  if (
    !loadingPatients &&
    !errorLoadingPatients &&
    filteredPatientsList &&
    filteredPatientsList.length <= 0
  ) {
    component = <ErrorPatientNotFound />;
  }

  if (filteredPatientsList && filteredPatientsList?.length > 0) {
    component = <PatientTable />;
  }

  return (
    <div className='w-full flex flex-col items-center justify-center mt-1 '>
      <div className='w-full h-[440px] flex flex-col items-center justify-center'>
        {component}
      </div>
    </div>
  );
}
