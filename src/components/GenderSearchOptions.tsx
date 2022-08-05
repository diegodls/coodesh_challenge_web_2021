import { usePatientContext } from "../contexts/usePatientsContext";
import { PatientGenders } from "../interfaces/IPatient";

export function GenderSearchOptions() {
  const { genderFilter, handleChangeGenderFilter } = usePatientContext();

  function handleGenderChange(e: React.ChangeEvent<HTMLInputElement>) {
    let gender = e.target.name as PatientGenders | null;

    if (genderFilter === gender) {
      handleChangeGenderFilter(null);
    } else {
      handleChangeGenderFilter(gender);
    }
  }
  return (
    <div className='w-full flex flex-col '>
      <label>
        <strong>Filtro por Gênero</strong>
      </label>

      <label className='text-pharma-txt_primary flex items-center gap-1 max-w-0'>
        <input
          className='checked:bg-pharma-enabled '
          name='female'
          aria-label='Buscar somente por feminino'
          type='checkbox'
          id='femaleGenderCheckbox'
          value='Feminino'
          checked={genderFilter === "female"}
          onChange={(e) => {
            handleGenderChange(e);
          }}
        />
        Feminino
      </label>

      <label className='text-pharma-txt_primary flex items-center gap-1 max-w-0'>
        <input
          className='checked:bg-pharma-enabled'
          name='male'
          aria-label='Buscar somente por masculino'
          id='maleGenderCheckbox'
          value='Masculino'
          type='checkbox'
          checked={genderFilter === "male"}
          onChange={(e) => {
            handleGenderChange(e);
          }}
        />
        Masculino
      </label>
    </div>
  );
}
