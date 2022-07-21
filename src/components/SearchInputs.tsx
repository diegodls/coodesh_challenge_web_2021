import { useState } from "react";
import { Sliders } from "phosphor-react";
import { usePatientContext } from "../contexts/usePatientsContext";
import { Disclosure, Transition } from "@headlessui/react";

import NationalitySearchOptions from "./NationalitySearchOptions";

import NameSearchOption from "./NameSearchOption";
import GenderSearchOptions from "./GenderSearchOptions";

export default function SearchInputs() {
  const { currentFilters, lastFilters, loadMorePatients } = usePatientContext();

  const [openFilterList, setOpenFilterList] = useState<boolean>(false);

  function handleApplyFilters() {
    if (lastFilters !== currentFilters) {
      console.log("handleApplyFilters - loadMorePatients");
      loadMorePatients();
    }
  }

  return (
    <Disclosure>
      <div className='w-full flex flex-col'>
        <div className='w-full flex flex-row items-center justify-center'>
          <NameSearchOption />
          <Disclosure.Button
            aria-label='show-filters'
            className={`w-10 h-10 flex items-center justify-center border border-solid rounded ${
              openFilterList ? "bg-pharma-enable" : "bg-pharma-disable"
            } hover:bg-pharma-hover 
          `}
            onClick={() => {
              setOpenFilterList((prev) => !prev);
            }}
          >
            <Sliders
              size={32}
              color='#78819B'
              weight={openFilterList ? "fill" : "thin"}
            />
          </Disclosure.Button>
        </div>

        <Transition
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Disclosure.Panel>
            <div className='flex flex-col mt-1'>
              <div className='flex flex-row'>
                <GenderSearchOptions />
                <NationalitySearchOptions />
              </div>
              <button
                title='Filtrar'
                className='h-10 p-2 border border-solid border-pharma-enable rounded self-end bg-pharma-secondary hover:bg-pharma-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pharma_primary focus:ring-pharma-border-focus transition-colors disabled:opacity-50'
                onClick={handleApplyFilters}
                disabled={currentFilters === lastFilters}
              >
                Filtrar
              </button>
            </div>
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  );
}
