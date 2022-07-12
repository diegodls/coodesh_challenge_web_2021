import { ArrowClockwise, CircleNotch } from "phosphor-react";
import { PatientFullData } from "../interfaces/IPatient";

import { usePatientContext } from "../contexts/usePatientsContext";

import { usePatientModal } from "../contexts/useModalPatients";

import LoadingPatients from "./LoadingPatients";
import { SortingButtonTable } from "./SortingButtonTable";
import PatientTableList from "./PatientTableList";

interface OrderByTypes {
  name: string;
  gender: string;
  dob: string;
}

export const PatientTableArea = () => {
  const { setPatient } = usePatientModal();

  const {
    filteredPatientsList,
    errorLoadingPatients,
    loadingPatients,
    order,
    orderBy,
    loadMorePatients,
    defineTypeOfSorting,
  } = usePatientContext();

  function setTypeOfSorting(type: keyof OrderByTypes) {
    defineTypeOfSorting(type);
  }

  function viewPatientDetails(patient: PatientFullData): void {
    setPatient(patient);
  }

  function formatDate(date: string): string {
    let tempDate: Date = new Date(date);

    let stringDay: string =
      tempDate.getDate() < 10
        ? `0${tempDate.getDate()}`
        : `${tempDate.getDate()}`;

    let stringMonth: string =
      tempDate.getMonth() + 1 < 10
        ? `0${tempDate.getMonth() + 1}`
        : `${tempDate.getMonth() + 1}`;

    let stringYear: string = String(tempDate.getFullYear());

    return `${stringDay}/${stringMonth}/${stringYear}`;
  }

  return (
    <div className='w-full flex flex-col items-center justify-center mt-1 '>
      <div className='w-full h-[450px] flex flex-col items-center justify-center'>
        {loadingPatients ? (
          <LoadingPatients />
        ) : (
          <div className='w-full h-[440px] rounded border border-solid border-pharma-border_enable overflow-auto scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'>
            <PatientTableList />
          </div>
        )}
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
