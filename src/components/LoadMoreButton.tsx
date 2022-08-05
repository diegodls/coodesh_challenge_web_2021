import { ArrowClockwise } from "phosphor-react";
import { usePatientContext } from "../contexts/usePatientsContext";

export function LoadMoreButton() {
  const { loadingPatients, filteredPatientsList, loadMorePatients } =
    usePatientContext();

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <button
        aria-label='load-more-button'
        className={`h-full flex flex-row items-center justify-center border-0 rounded gap-1 text-center disabled:opacity-50 ${
          filteredPatientsList?.length === 0 ? "hidden" : ""
        }`}
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
  );
}
