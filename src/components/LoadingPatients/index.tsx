import {
  ArrowClockwise,
  CircleNotch,
  FileX,
  User,
  Warning,
} from "phosphor-react";
import { usePatientContext } from "../../contexts/usePatientsContext";

function LoadingPatients() {
  const { filteredPatientsList, loadingPatients, errorLoadingPatients } =
    usePatientContext();

  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {errorLoadingPatients && (
          <div className='flex flex-col items-center justify-center'>
            <Warning size={60} color='#EB5353' weight='fill' />

            <p className='text-pharma-error_primary text-4xl'>Oops!</p>
            <div className='w-full border-solid border-[1px] border-pharma-error_primary' />
            <p className='text-pharma-txt_primary text-xl'>
              Erro ao carregar a lista de pacientes.
            </p>
            <p className='text-pharma-txt_primary'>
              Erro: {errorLoadingPatients}
            </p>
          </div>
        )}

        {loadingPatients && (
          <div className='flex flex-col items-center opacity-50'>
            <ArrowClockwise
              size={32}
              color='#252A37'
              weight='fill'
              className='animate-spin'
            />
            <span>Carregando pacientes...</span>
          </div>
        )}

        {!loadingPatients &&
          filteredPatientsList &&
          filteredPatientsList.length === 0 && (
            <div className='flex flex-col items-center justify-center'>
              <User size={60} color='#EB5353' weight='fill' />
              <p className='text-pharma-error_primary text-4xl'>Oops!</p>
              <div className='w-full border-solid border-[1px] border-pharma-error_primary' />
              <p className='text-pharma-txt_primary text-xl'>
                Não foi possível localizar o paciente.
              </p>
            </div>
          )}
      </div>
    </>
  );
}

export default LoadingPatients;
