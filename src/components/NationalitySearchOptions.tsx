import { useState } from "react";
import { Sliders } from "phosphor-react";
import { usePatientContext } from "../contexts/usePatientsContext";
import { PatientGenders, NationalityList } from "../interfaces/IPatient";
import { Disclosure, Transition } from "@headlessui/react";
import GenderSearchOptions from "./genderSearchOptions";

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

export default function NationalitySearchOptions() {
  const { natFilter, setNatFilter } = usePatientContext();

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

  return (
    <div className='w-full gap-1'>
      <label>Filtro por Nacionalidade</label>
      <div>
        <div className='grid grid-cols-6 gap-1'>
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
  );
}
