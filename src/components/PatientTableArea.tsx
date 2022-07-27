import React, { FC, ReactElement } from "react";

import { ArrowClockwise } from "phosphor-react";

import { usePatientContext } from "../contexts/usePatientsContext";
import { ErrorOnFetchPatients } from "./ErrorOnFetchPatients";

import { LoadingFetchPatients } from "./LoadingFetchPatients";
import { PatientTable } from "./PatientTable";
import { ErrorPatientNotFound } from "./ErrorPatientNotFound";

export const PatientTableArea = () => {
  const {
    filteredPatientsList,
    loadingPatients,
    errorLoadingPatients,
    loadMorePatients,
  } = usePatientContext();

  let component: ReactElement = <LoadingFetchPatients />;

  if (errorLoadingPatients) {
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

  if (
    !loadingPatients &&
    filteredPatientsList &&
    filteredPatientsList?.length > 0
  ) {
    component = <PatientTable />;
  }

  return (
    <div className='w-full flex flex-col items-center justify-center mt-1 '>
      <div className='w-full h-[440px] flex flex-col items-center justify-center'>
        {component}
      </div>
      <div className='w-full flex flex-col items-center justify-center '>
        <button
          className='h-full flex flex-row items-center justify-center border-0 rounded gap-1 text-center disabled:opacity-50'
          onClick={loadMorePatients}
          disabled={loadingPatients}
        >
          <ArrowClockwise
            size={28}
            color='#252A37'
            weight='thin'
            className={`${loadingPatients && "animate-spin"}`}
          />
          Carregar mais...
        </button>
      </div>
    </div>
  );
};
