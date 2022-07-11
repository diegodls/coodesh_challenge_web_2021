import PatientModal from "../components/PatientModal";
import { PatientTableArea } from "../components/PatientTableArea";
import SearchInputs from "../components/SearchInputs";

const Home = () => {
  return (
    <div className='w-11/12 h-full flex flex-col items-center gap-2 px-3'>
      <p>
        Olá, seja bem vindo! Obrigado por utilizar nosso gerenciador de
        pacientes. Aqui você poderá localizar, filtrar e ver os detalhes de
        nossos pacientes.
      </p>
      <SearchInputs />
      <PatientTableArea />
      <PatientModal />
    </div>
  );
};

export default Home;
