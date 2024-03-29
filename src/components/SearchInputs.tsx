import { useState } from "react";
import { Sliders } from "phosphor-react";
import { usePatientContext } from "../contexts/usePatientsContext";
import { Disclosure, Transition } from "@headlessui/react";

import { NationalitySearchOptions } from "./NationalitySearchOptions";
import { NameSearchOption } from "./NameSearchOption";
import { GenderSearchOptions } from "./GenderSearchOptions";

export function SearchInputs() {
  const { currentFilters, lastFilters, handleApplyFilters } =
    usePatientContext();

  const [openFilterList, setOpenFilterList] = useState<boolean>(false);

  return (
    <Disclosure>
      <div className='w-full flex flex-col'>
        <div className='w-full flex flex-row items-center justify-center'>
          <NameSearchOption />
          <Disclosure.Button
            aria-label='show-filters'
            className={`w-10 h-10 flex items-center justify-center border border-solid border-pharma-border_disabled rounded ${
              openFilterList
                ? "bg-pharma-enabled hover:bg-pharma-hover"
                : "bg-pharma-disabled opacity-50 hover:opacity-100 hover:bg-pharma-disabled"
            } 
          `}
            onClick={() => {
              setOpenFilterList((prev) => !prev);
            }}
          >
            <Sliders
              size={32}
              color={openFilterList ? "#FFFFFF" : "#252A37"}
              weight={"fill"}
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
            <div className='flex flex-col mt-1 p-1'>
              <div className='flex flex-row'>
                <GenderSearchOptions />
                <NationalitySearchOptions />
              </div>
              <button
                aria-label='apply-filters'
                title='Filtrar'
                className='h-10 p-2 border border-solid border-pharma-enable rounded self-end bg-pharma-enabled text-pharma-primary hover:bg-pharma-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pharma_primary focus:ring-pharma-border-focus transition-colors disabled:bg-pharma-disabled disabled:text-pharma-txt_primary disabled:opacity-50'
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
