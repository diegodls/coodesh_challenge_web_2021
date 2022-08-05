import { LoadMoreButton } from "../components/LoadMoreButton";
import { PatientModal } from "../components/PatientModal";
import { PatientTableArea } from "../components/PatientTableArea";
import { SearchInputs } from "../components/SearchInputs";

export function Home() {
  return (
    <div className='w-11/12 h-full flex items-center flex-col gap-2 px-3'>
      <div className='flex items-center flex-col'>
        <p className='text-lg'>
          Obrigado por utilizar nosso{" "}
          <strong className='text-pharma-enabled gb'>
            Gerenciador de pacientes
          </strong>
          .
        </p>
        <p className='text-base text-pharma-txt_secondary'>
          Aqui você poderá localizar, filtrar e ver os detalhes de nossos
          pacientes.
        </p>
      </div>
      <SearchInputs />
      <PatientTableArea />
      <LoadMoreButton />
      <PatientModal />
    </div>
  );
}
