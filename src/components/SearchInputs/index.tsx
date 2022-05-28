import { useState } from "react";
import { Sliders } from "phosphor-react";
import { usePatientContext } from "../../contexts/usePatientsContext";
import { PatientGenders, NationalityList } from "../../interfaces/IPatient";
import { Disclosure, Transition } from "@headlessui/react";

//ver o método createData que está na pagina de tabela do material ui para criar a lista abaixo.
const natListT: NationalityList[] = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IR",
  "NO",
  "NL",
  "NZ",
  "TR",
  "US",
];

export default function SearchInputs() {
  const {
    genderFilter,
    natFilter,
    currentFilters,
    lastFilters,
    loadMorePatients,
    handleChangeGenderFilter,
    setNatFilter,
    handleChangeNameFilter,
  } = usePatientContext();

  const [searchText, setSearchText] = useState<string>("");
  const [openFilterList, setOpenFilterList] = useState<boolean>(false);

  function handleGenderChange(e: React.ChangeEvent<HTMLInputElement>) {
    let gender = e.target.name as PatientGenders | null;

    if (genderFilter === gender) {
      handleChangeGenderFilter(null);
    } else {
      handleChangeGenderFilter(gender);
    }
  }

  function handleNatChange(e: React.ChangeEvent<HTMLInputElement>) {
    let nat = e.target.name as NationalityList;
    let tempNat = [...natFilter];
    if (natFilter?.includes(nat)) {
      tempNat = tempNat.filter((e) => e !== nat);
    } else {
      tempNat.push(nat);
    }
    setNatFilter(tempNat);
  }

  function handleSearchTextChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSearchText(e.target.value);
    handleChangeNameFilter(e.target.value);
  }

  function handleApplyFilters() {
    if (lastFilters !== currentFilters) {
      loadMorePatients();
    }
  }

  return (
    <Disclosure>
      <div className='w-full flex flex-col'>
        <div className='w-full flex flex-row items-center justify-center'>
          <input
            data-testid='searchByName'
            aria-label='Procurar por nome'
            type='search'
            className='w-full h-10 mr-1 px-3 border border-solid border-pharma-disable rounded transition ease-in-out m-0 focus:text-pharma-txt_primary focus:bg-white focus:border-pharma-enabled focus:outline-none'
            placeholder='Pesquisar paciente...'
            value={searchText}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              handleSearchTextChange(e);
            }}
          />
          <Disclosure.Button
            className={`w-10 h-10 flex items-center justify-center border border-solid rounded ${
              openFilterList ? "bg-pharma-enable" : "bg-pharma-disable"
            } hover:bg-pharma-hover 
          `}
            onClick={() => {
              setOpenFilterList((prev) => !prev);
            }}
          >
            {openFilterList ? (
              <Sliders size={32} color='#78819B' weight='fill' />
            ) : (
              <Sliders size={32} color='#78819B' weight='thin' />
            )}
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
            <div className='w-full flex flex-col'>
              <div
                className='w-full flex flex-row mt-1 
            '
              >
                <div className='w-full'>
                  <label>Filtro por Gênero</label>
                  <label className='text-pharma-txt_primary flex items-center gap-1'>
                    <input
                      type='checkbox'
                      id='femaleGenderCheckbox'
                      checked={genderFilter === "female"}
                      onChange={(e) => {
                        handleGenderChange(e);
                      }}
                      name='female'
                    />
                    Feminino
                  </label>

                  <label className='text-pharma-txt_primary flex items-center gap-1'>
                    <input
                      type='checkbox'
                      value=''
                      id='maleGenderCheckbox'
                      checked={genderFilter === "male"}
                      onChange={(e) => {
                        handleGenderChange(e);
                      }}
                      name='male'
                    />
                    Masculino
                  </label>
                </div>

                <div className='w-full'>
                  <label>Filtro por Nacionalidade</label>
                  <div>
                    <div className='w-full grid grid-cols-6'>
                      {natListT.map((country) => {
                        return (
                          <label
                            className='text-pharma-txt_primary flex items-center gap-1'
                            key={country}
                          >
                            <input
                              type='checkbox'
                              value=''
                              id={`${country}countryCheckbox`}
                              checked={natFilter?.includes(country)}
                              onChange={(e) => {
                                handleNatChange(e);
                              }}
                              name={country}
                            />
                            {country}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
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
