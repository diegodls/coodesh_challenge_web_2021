import PatientModal from "../components/PatientModal";
import PatientTableList from "../components/PatientTableList";
import SearchInputs from "../components/SearchInputs";

import { usePatientContext } from "../contexts/usePatientsContext";

const Home = () => {
  const {
    genderFilter,
    natFilter,
    nameFilter,
    currentFilters,
    lastFilters,
    loadingPatients,
    loadMorePatients,
    handleChangeGenderFilter,
    setNatFilter,
    handleChangeNameFilter,
  } = usePatientContext();

  return (
    <div className='w-11/12 h-full flex flex-col items-center gap-2 px-3'>
      <p>
        Olá, seja bem vindo! Obrigado por utilizar nosso gerenciador de
        pacientes. Aqui você poderá localizar, filtrar e ver os detalhes de
        nossos pacientes.
      </p>
      <SearchInputs
        currentFilters={currentFilters}
        genderFilter={genderFilter}
        lastFilters={lastFilters}
        loadingPatients={loadingPatients}
        natFilter={natFilter}
        nameFilter={nameFilter}
        loadMorePatients={loadMorePatients}
        setNatFilter={setNatFilter}
        handleChangeNameFilter={handleChangeNameFilter}
        handleChangeGenderFilter={handleChangeGenderFilter}
      />
      <PatientTableList />
      <PatientModal />
    </div>
  );
};

export default Home;
