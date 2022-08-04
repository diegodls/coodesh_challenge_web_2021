import { usePatientContext } from "../contexts/usePatientsContext";

export function NameSearchOption() {
  const { nameFilter, handleChangeNameFilter } = usePatientContext();

  function handleSearchTextChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    handleChangeNameFilter(e.target.value);
  }

  return (
    <input
      aria-label='Procurar por nome'
      type='search'
      className='w-full h-10 mr-1 px-3 border border-solid border-pharma-disable rounded transition ease-in-out m-0 focus:text-pharma-txt_primary focus:bg-white focus:border-pharma-enabled focus:outline-none'
      placeholder='Pesquisar paciente...'
      value={nameFilter}
      onChange={(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        handleSearchTextChange(e);
      }}
    />
  );
}
