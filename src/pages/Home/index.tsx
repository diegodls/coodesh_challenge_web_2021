import PatientModal from "../../components/PatientModal";
import PatientTableList from "../../components/PatientTableList";
import SearchInputs from "../../components/SearchInputs";

const Home = () => {
  return (
    <div className='w-11/12 h-full flex flex-col items-center gap-2 px-3'>
      <p>
        Olá, seja bem vindo! Obrigado por utilizar nosso gerenciador de
        pacientes. Aqui você poderá localizar, filtrar e ver os detalhes de
        nossos pacientes.
      </p>
      <SearchInputs />
      <PatientTableList />
      <PatientModal />
    </div>
  );
};

export default Home;
